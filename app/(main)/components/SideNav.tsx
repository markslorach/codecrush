"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// Icons
import { FaCode } from "react-icons/fa";
import { Trophy, User, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  path: string;
  icon: React.FC;
}

const navLinks: NavLink[] = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Leaderboard", path: "/leaderboard", icon: Trophy },
  { label: "Profile", path: "/profile", icon: User },
];

const SideNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="flex flex-col h-full justify-between items-center">
      <div className="space-y-20">
        <Link href="/dashboard" className="flex justify-center">
          <FaCode className="w-8 h-8 text-white/90" />
        </Link>
        <div className="flex flex-col space-y-4 items-center">
          {navLinks.map((link, idx) => (
            <span
              key={idx}
              onClick={() => {
                router.push(link.path);
                router.refresh();
              }}
              className={cn({
                "bg-white/15": pathname === link.path,
                "bg-white/5": pathname !== link.path,
                "cursor-pointer p-2.5 rounded-lg": true,
              })}
            >
              <link.icon />
            </span>
          ))}
        </div>
      </div>
      <UserButton />
    </nav>
  );
};

export default SideNav;
