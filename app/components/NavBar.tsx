"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { FaCode } from "react-icons/fa";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full py-6 items-center justify-between flex px-5 md:px-20">
      <h1>
        <Link href="/" className="font-bold text-2xl flex items-center">
          {" "}
          <FaCode className="w-9 h-9 mr-2" /> CodeCrush
        </Link>
      </h1>

      <SignedOut>
        <div className="space-x-3 hidden sm:inline">
          <SignInButton>
            <Button className="rounded-full border-2 border-white/90">Sign In</Button>
          </SignInButton>
          <SignUpButton>
            <Button className="bg-white/90 text-[#0f172a] rounded-full">
              Get Started
            </Button>
          </SignUpButton>
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};

export default NavBar;
