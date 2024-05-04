import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { ReactNode } from "react";
import { FaCode } from "react-icons/fa";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="grid grid-cols-1 sm:grid-cols-[80px_1fr]">
        <div className="h-screen hidden sm:flex flex-col justify-between items-center border-r border-white/10 py-6">
          <Link
            href="/dashboard"
            className="p-2.5 rounded-full border border-white/20"
          >
            <FaCode className="w-6 h-6 text-white/90" />
          </Link>
          <UserButton />
        </div>
        <div className="px-5 py-8 sm:p-10 overflow-y-scroll h-screen flex-col">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
