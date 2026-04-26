import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );
    const email = "yadhuvarshini1@gmail.com";
    const password = "123456a"; // 6-char min on Supabase; user-requested 123456 + 'a'
    
    // Check if user already exists
    const { data: existing } = await supabase.auth.admin.listUsers();
    let userId: string | undefined = existing?.users.find((u) => u.email === email)?.id;

    if (!userId) {
      const { data, error } = await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { full_name: "Yadhu Varshini" },
      });
      if (error) throw error;
      userId = data.user!.id;
    } else {
      // Ensure password is set to expected value
      await supabase.auth.admin.updateUserById(userId, { password });
    }

    // Ensure profile is premium tier
    await supabase.from("profiles").upsert({
      id: userId, full_name: "Yadhu Varshini", tier: "premium",
    });

    // Ensure admin role
    await supabase.from("user_roles").upsert(
      { user_id: userId, role: "admin" },
      { onConflict: "user_id,role" }
    );
    await supabase.from("user_roles").upsert(
      { user_id: userId, role: "user" },
      { onConflict: "user_id,role" }
    );

    return new Response(JSON.stringify({ ok: true, user_id: userId, email, password }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
