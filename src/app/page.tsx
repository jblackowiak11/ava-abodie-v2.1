'use client';

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // This handles the redirect if session already exists (optional)
    getServerSession(authOptions).then(session => {
      if (session) {
        redirect('/chat');
      }
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5F0E6]">
      <h1 className="text-6xl font-extrabold tracking-wide">Ava</h1>
      <p className="mt-2 text-lg">one brain – built by Abodie</p>
      <button
        onClick={() => signIn("google")}
        className="mt-6 rounded bg-black px-6 py-3 text-white hover:bg-gray-800"
      >
        Sign in with Google
      </button>
    </main>
  );
}
