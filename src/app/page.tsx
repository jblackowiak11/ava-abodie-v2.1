// ✅ FILE: src/app/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import SignInButton from "@/components/SignInButton";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/chat");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5F0E6] px-4">
      <h1 className="text-7xl font-extrabold tracking-tight text-center mb-2">Ava</h1>
      <p className="text-lg mb-6 text-center">one brain – built by Abodie</p>
      <SignInButton />
    </main>
  );
}
