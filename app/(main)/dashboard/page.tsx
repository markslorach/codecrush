import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/prisma/client";
import { Prisma } from "@prisma/client";

// Components
import ChallengeList from "@/app/(main)/components/ChallengeList";
import StatsList from "@/app/(main)/components/StatsList";
import SubHeading from "@/app/(main)/components/SubHeading";
import UserGreeting from "@/app/(main)/components/UserGreeting";
import Leaderboard from "../components/Leaderboard";

interface ClerkUser {
  username: string;
}

export const dynamic = "force-dynamic";

const Dashboard = async () => {
  const user = (await currentUser()) as ClerkUser;

  if (user) {
    try {
      await prisma.user.create({
        data: { username: user?.username },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        console.warn("User already exists:", user?.username);
      } else {
        console.error("Error creating user:", error);
        throw error;
      }
    }
  }

  return (
    <main>
      <header className="mb-28">
        <UserGreeting />
      </header>
      <section className="mb-20">
        <SubHeading className="mb-5">Your Stats</SubHeading>
        <StatsList />
      </section>
      <section className="mb-10 flex gap-14">
        <div className="w-full lg:w-1/3">
          <SubHeading className="mb-5">Today&apos;s Challenge</SubHeading>
          <ChallengeList />
        </div>
        <div className="hidden md:w-2/3 lg:inline">
          <SubHeading className="mb-5">Leaderboard</SubHeading>
          <Leaderboard />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
