import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export default MainLayout;
