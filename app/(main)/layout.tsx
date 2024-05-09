import React, { ReactNode } from "react";

// Components
import SideNav from "./components/SideNav";

const MainLayout = ({ children }: { children: ReactNode }) => {
  
  return (
    <main className="grid grid-cols-1 md:grid-cols-[80px_1fr]">
      <div className="h-screen hidden md:flex flex-col border-r border-white/10 py-6">
        <SideNav />
      </div>
      <div className="px-5 py-8 md:p-14 md:overflow-y-auto h-screen flex-col 2xl:px-40">
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
