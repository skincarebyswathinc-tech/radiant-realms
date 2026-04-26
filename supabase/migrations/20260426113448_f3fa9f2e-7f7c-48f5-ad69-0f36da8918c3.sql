-- Fix search_path on trigger functions
create or replace function public.set_updated_at()
returns trigger language plpgsql security definer set search_path = public
as $$
begin new.updated_at = now(); return new; end $$;

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

-- Replace permissive insert policy with validated one
drop policy if exists "Anyone can submit lead" on public.leads;
create policy "Anyone can submit valid lead" on public.leads for insert
  to anon, authenticated
  with check (
    email is not null
    and length(email) between 5 and 255
    and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    and (whatsapp is null or (length(whatsapp) between 7 and 20 and whatsapp ~ '^[+0-9 \-()]+$'))
    and (source is null or length(source) <= 50)
    and (notes is null or length(notes) <= 1000)
  );