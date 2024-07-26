"use client";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

// Icons
import { FaCode } from "react-icons/fa";
import { Trophy, UserRound, LayoutDashboard } from "lucide-react";

type NavLink = {
  label: string;
  path: string;
  icon: any;
};

const navLinks: NavLink[] = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Leaderboard", path: "/leaderboard", icon: Trophy },
  // { label: "Profile", path: "/profile", icon: UserRound },
];

const SideNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="flex h-full flex-col items-center justify-between">
      <div className="space-y-20">
        <Link
          href="/dashboard"
          aria-label="Dashboard"
          className="flex justify-center"
        >
          <FaCode className="h-8 w-8 text-white/90" />
        </Link>
        <div className="flex flex-col items-center space-y-4 pb-20">
          {navLinks.map((link, idx) => (
            <button
              type="button"
              key={idx}
              aria-label={link.label}
              onClick={() => {
                router.push(link.path);
                router.refresh();
              }}
              className={cn({
                "bg-white/15": pathname === link.path,
                "bg-white/5": pathname !== link.path,
                "cursor-pointer rounded-md p-2.5 transition-colors hover:bg-white/15":
                  true,
              })}
            >
              <link.icon />
              <span className="hidden">{link.label}</span>
            </button>
          ))}
        </div>
      </div>
      <UserButton />
    </nav>
  );
};

export default SideNav;
