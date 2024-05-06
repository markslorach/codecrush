import React, { ReactNode } from "react";

// Components
import SideNav from "./components/SideNav";
import MobileNav from "./components/MobileNav";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-[80px_1fr]">
      <div className="h-screen hidden sm:flex flex-col border-r border-white/10 py-6">
        <SideNav />
      </div>
      <div className="px-5 py-8 sm:p-10 sm:overflow-y-auto h-screen flex-col">
        {children}
      </div>
      <MobileNav />
    </main>
  );
};

export default MainLayout;
