"use client";
import { LogOut } from "lucide-react";
import { useClerk } from "@clerk/nextjs";

export const SignOutButton = () => {
  const { signOut } = useClerk();

  return (
    <button aria-label="sign out" onClick={() => signOut({ redirectUrl: "/" })}>
      <LogOut className="h-7 w-7 hover:opacity-80 transition-opacity" />
    </button>
  );
};
