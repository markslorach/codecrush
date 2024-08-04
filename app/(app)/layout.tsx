import React, { ReactNode } from "react";
import MobileNav from "./components/shared/MobileNav";
import SideNav from "./components/shared/SideNav";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-[80px_1fr]">
      <div className="hidden min-h-screen flex-col border-r border-white/10 py-6 md:flex">
        <SideNav />
      </div>
      <div className="h-screen overflow-y-auto px-4 pb-32 pt-10 xl:px-0">
        <div className="mx-auto max-w-5xl">{children}</div>
      </div>
      <MobileNav />
    </main>
  );
};

export default MainLayout;
