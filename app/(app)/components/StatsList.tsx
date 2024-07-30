import { User } from "@prisma/client";
import { Star, Trophy, Flame } from "lucide-react";
import { getAllUsers, getUser } from "@/lib/user";
import StatCard from "./StatCard";

const StatsList = async () => {
  const user = (await getUser()) as User;
  console.log(user)
  const allUsers = (await getAllUsers()) as User[];
  // console.log(allUsers)

  const currentUserRank =
    allUsers.findIndex((user) => user.username === user.username) + 1;

  const totalUsers = allUsers.length;
  const top5Percent = Math.ceil(totalUsers * 0.05);
  const top10Percent = Math.ceil(totalUsers * 0.1);
  const top20Percent = Math.ceil(totalUsers * 0.2);

  let scoreDetail;
  if (currentUserRank === 1) {
    scoreDetail = "You have the highest score!";
  } else if (user.score === null || user.score === 0) {
    scoreDetail = "Time to start earning points!";
  } else if (currentUserRank <= top5Percent) {
    scoreDetail = "Top 5% of users.";
  } else if (currentUserRank <= top10Percent) {
    scoreDetail = "Top 10% of users.";
  } else if (currentUserRank <= top20Percent) {
    scoreDetail = "Top 20% of users.";
  } else {
    scoreDetail = "Keep it up!";
  }

  let rankDetail;
  if (currentUserRank === 1) {
    rankDetail = "You are top of the leaderboard!";
  } else if (user.score === null || user.score === 0) {
    rankDetail = "Earn points to rank up!";
  } else if (currentUserRank === 2) {
    rankDetail = "You are in 2nd place!";
  } else if (currentUserRank === 3) {
    rankDetail = "You are in 3rd place!";
  } else if (currentUserRank === 4) {
    rankDetail = "Can you make top 3?";
  } else {
    rankDetail = "Keep it up!";
  }

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
