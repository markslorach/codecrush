import React, { ReactNode, useEffect } from "react";
import SideNav from "./components/SideNav";

const MainLayout = ({ children }: { children: ReactNode }) => {

  return (
    <main className="grid grid-cols-1 md:grid-cols-[80px_1fr]">
      <div className="hidden min-h-screen flex-col border-r border-white/10 py-6 md:flex">
        <SideNav />
      </div>
      <div className="h-screen px-4 xl:px-0 pt-10 pb-20 overflow-y-auto">
        <div className="mx-auto max-w-5xl">{children}</div>
      </div>
    </main>
  );
};

export default MainLayout;
