import React, { ReactNode } from "react";

// Components
import SideNav from "./components/SideNav";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-[80px_1fr]">
      <div className="hidden min-h-screen flex-col border-r border-white/10 py-6 md:flex">
        <SideNav />
      </div>
      <div className="h-screen flex-col px-5 py-20 md:overflow-y-auto">
        <div className="container">{children}</div>
      </div>
    </main>
  );
};

export default MainLayout;
