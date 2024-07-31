import { User } from "@prisma/client";
import { Star, Trophy, Flame } from "lucide-react";
import { getAllUsers, getUser } from "@/lib/user";
import StatCard from "./StatCard";

const StatsList = async () => {
  const user = (await getUser()) as User;
  const allUsers = (await getAllUsers()) as User[];

  const sortedUsers = allUsers.sort((a, b) => b.score - a.score);
  const currentUserRank =
    sortedUsers.findIndex((u) => u.username === user.username) + 1;

  const totalUsers = sortedUsers.length;
  const top5Percent = Math.ceil(totalUsers * 0.05);
  const top10Percent = Math.ceil(totalUsers * 0.1);
  const top20Percent = Math.ceil(totalUsers * 0.2);

  const scoreDetail = (() => {
    if (user.score === null || user.score === 0)
      return "Time to start earning points!";
    if (currentUserRank <= top5Percent) return "Top 5% of users.";
    if (currentUserRank <= top10Percent) return "Top 10% of users.";
    if (currentUserRank <= top20Percent) return "Top 20% of users.";
    return "Keep it up!";
  })();

  const rankDetail = (() => {
    if (user.score === null || user.score === 0)
      return "Earn points to rank up!";
    if (currentUserRank === 1) return "You are top of the leaderboard!";
    if (currentUserRank === 2) return "You are in 2nd place!";
    if (currentUserRank === 3) return "You are in 3rd place!";
    if (currentUserRank <= 4) return "Can you make top 3?";
    return "Keep it up!";
  })();

  const streakDetail =
    user.streak === 0 ? "Time to start a streak!" : "Keep it up!";

  return (
    <div className="flex w-full flex-wrap gap-5 lg:flex-nowrap">
      <div className="w-full lg:w-1/3">
        <StatCard
          title={"Current Score"}
          value={user.score ?? 0}
          icon={<Star className="h-6 w-6 text-blue-400" />}
          detail={scoreDetail}
        />
      </div>
      <div className="w-full lg:w-1/3">
        <StatCard
          title={"Current Streak"}
          value={user.streak ?? 0}
          icon={<Flame className="h-6 w-6 text-red-400" />}
          detail={streakDetail}
        />
      </div>
      <div className="w-full lg:w-1/3">
        <StatCard
          title={"Current Rank"}
          value={`#${currentUserRank ?? 0}`}
          icon={<Trophy className="h-6 w-6 text-zinc-200" />}
          detail={rankDetail}
        />
      </div>
    </div>
  );
};

export default StatsList;
