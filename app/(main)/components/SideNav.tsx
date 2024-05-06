import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { FaCode } from "react-icons/fa";

const SideNav = () => {
  return (
    <nav className="flex flex-col h-full justify-between items-center">
      <Link
        href="/dashboard"
        className="p-2.5 rounded-full border border-white/20"
      >
        <FaCode className="w-6 h-6 text-white/90" />
      </Link>
      <UserButton />
    </nav>
  );
};

export default SideNav;
