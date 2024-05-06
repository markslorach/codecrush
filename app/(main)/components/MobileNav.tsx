"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Icons
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="pb-8 pt-12 fixed z-30 bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 sm:hidden">
      <div className="max-w-md mx-auto h-full flex justify-center items-center px-5 sm:px-10">
        <div className="bg-slate-900 border w-[90%] py-4 px-6 rounded-xl shadow-md">
          <ul className="flex justify-between">
            <li>
              <Link href="/dashboard">
                <SpaceDashboardIcon
                  className={pathname === "/dashboard" ? "text-blue-400" : ""}
                  fontSize="medium"
                />
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <AccountBoxIcon
                  className={pathname === "/profile" ? "text-blue-400" : ""}
                  fontSize="medium"
                />
              </Link>
            </li>
            <li>
              <Link href="/leaderboard">
                <LeaderboardIcon
                  className={pathname === "/leaderboard" ? "text-blue-400" : ""}
                  fontSize="medium"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
