import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/prisma/client";
import StatCard from "./StatCard";

// Icons
import { FaStar } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";

const StatsList = async () => {
  const clerkUser = await currentUser();

  // Find logged in user in the database
  const dbUser = await prisma.user.findUnique({
    where: {
      username: clerkUser?.username as string,
    },
  });

  // Find all users in the database
  const allDbUsers = await prisma.user.findMany({
    orderBy: {
      score: "desc",
    },
  });

  // Find logged in user index in the database
  const currentUserRank =
    allDbUsers.findIndex((user) => user.username === dbUser?.username) + 1;

  return (
      <div className="flex w-1/2 space-x-5">
        <StatCard
          title={"Score"}
          value={dbUser?.score ?? 0}
          icon={<FaStar className="w-6 h-6" />}
        />
        <StatCard
          title={"Streak"}
          value={dbUser?.streak ?? 0}
          icon={<BsFillLightningChargeFill className="w-6 h-6" />}
        />
        <StatCard
          title={"Rank"}
          value={currentUserRank ?? 0}
          icon={<FaTrophy className="w-6 h-6" />}
        />
      </div>
  );
};

export default StatsList;
