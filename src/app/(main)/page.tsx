import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "~/utils/supabase/server";

export default async function AuthButton() {
  const supabase = createClient(cookies());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient(cookies());
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex-column flex items-center justify-center gap-4">
      Hey, {user.email}!
      <form action={signOut}>
        <button className="rounded-md bg-primary px-4 py-2 no-underline hover:bg-neutral-500">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="bg-btn-background hover:bg-btn-background-hover flex rounded-md px-3 py-2 no-underline"
    >
      Login
    </Link>
  );
}
