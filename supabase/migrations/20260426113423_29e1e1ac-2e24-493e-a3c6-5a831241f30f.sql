-- ============ ENUMS ============
create type public.app_role as enum ('admin', 'user');
create type public.tier_type as enum ('free', 'premium');

-- ============ PROFILES ============
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  tier tier_type not null default 'free',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.profiles enable row level security;

-- ============ USER ROLES ============
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql stable security definer set search_path = public
as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

create or replace function public.get_user_tier(_user_id uuid)
returns tier_type
language sql stable security definer set search_path = public
as $$
  select coalesce((select tier from public.profiles where id = _user_id), 'free'::tier_type)
$$;

-- ============ LEADS ============
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  whatsapp text,
  source text default 'landing',
  notes text,
  created_at timestamptz not null default now()
);
alter table public.leads enable row level security;

-- ============ PROMPT CATEGORIES ============
create table public.prompt_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  tier tier_type not null default 'premium',
  color text default 'sage',
  icon text,
  sort_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.prompt_categories enable row level security;

-- ============ PROMPTS ============
create table public.prompts (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.prompt_categories(id) on delete cascade,
  title text not null,
  prompt_text text not null,
  follow_up text,
  purpose text,
  outcome text,
  output_format text,
  time_saved text,
  relevance int,
  utility text,
  revenue_potential text,
  tier tier_type not null default 'premium',
  sort_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.prompts enable row level security;
create index on public.prompts(category_id);
create index on public.prompts(tier);

-- ============ SETTINGS (key/value, admin-managed; e.g., razorpay links) ============
create table public.settings (
  key text primary key,
  value text,
  updated_at timestamptz not null default now()
);
alter table public.settings enable row level security;

-- ============ TIMESTAMP TRIGGER ============
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;

create trigger profiles_updated before update on public.profiles
  for each row execute function public.set_updated_at();
create trigger prompt_categories_updated before update on public.prompt_categories
  for each row execute function public.set_updated_at();
create trigger prompts_updated before update on public.prompts
  for each row execute function public.set_updated_at();
create trigger settings_updated before update on public.settings
  for each row execute function public.set_updated_at();

-- ============ AUTO-CREATE PROFILE ON SIGNUP ============
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', new.email))
  on conflict (id) do nothing;
  insert into public.user_roles (user_id, role)
  values (new.id, 'user')
  on conflict do nothing;
  return new;
end $$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============ RLS POLICIES ============

-- profiles
create policy "Users view own profile" on public.profiles for select
  to authenticated using (auth.uid() = id);
create policy "Users update own profile" on public.profiles for update
  to authenticated using (auth.uid() = id);
create policy "Admins view all profiles" on public.profiles for select
  to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "Admins update any profile" on public.profiles for update
  to authenticated using (public.has_role(auth.uid(), 'admin'));

-- user_roles
create policy "Users view own roles" on public.user_roles for select
  to authenticated using (auth.uid() = user_id);
create policy "Admins view all roles" on public.user_roles for select
  to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "Admins manage roles" on public.user_roles for all
  to authenticated using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- leads
create policy "Anyone can submit lead" on public.leads for insert
  to anon, authenticated with check (true);
create policy "Admins view leads" on public.leads for select
  to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "Admins manage leads" on public.leads for all
  to authenticated using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- prompt_categories: free visible to all; premium visible to premium users + admins; admins manage
create policy "Public reads free categories" on public.prompt_categories for select
  to anon, authenticated using (is_active and tier = 'free');
create policy "Premium users read all categories" on public.prompt_categories for select
  to authenticated using (
    is_active and (
      tier = 'free'
      or public.get_user_tier(auth.uid()) = 'premium'
      or public.has_role(auth.uid(), 'admin')
    )
  );
create policy "Admins manage categories" on public.prompt_categories for all
  to authenticated using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- prompts
create policy "Public reads free prompts" on public.prompts for select
  to anon, authenticated using (is_active and tier = 'free');
create policy "Premium users read all prompts" on public.prompts for select
  to authenticated using (
    is_active and (
      tier = 'free'
      or public.get_user_tier(auth.uid()) = 'premium'
      or public.has_role(auth.uid(), 'admin')
    )
  );
create policy "Admins manage prompts" on public.prompts for all
  to authenticated using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- settings (public read for things like razorpay links; admin writes)
create policy "Public reads settings" on public.settings for select
  to anon, authenticated using (true);
create policy "Admins manage settings" on public.settings for all
  to authenticated using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));