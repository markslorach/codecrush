import { FaCode } from "react-icons/fa";
import SideNav from "./(app)/components/shared/SideNav";

const loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[80px_1fr]">
      <div className="hidden min-h-screen flex-col border-r border-white/10 py-6 md:flex">
        <SideNav />
      </div>
      <div className="flex h-dvh w-full items-center justify-center">
        <FaCode className="h-10 w-10 animate-spin text-white/70" />
      </div>
    </div>
  );
};

export default loading;
