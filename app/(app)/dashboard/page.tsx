import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/prisma/client";
import { Prisma } from "@prisma/client";

// Components
import ChallengeList from "@/app/(app)/components/ChallengeList";
import StatsList from "@/app/(app)/components/StatsList";
import SubHeading from "@/app/(app)/components/SubHeading";
import UserGreeting from "@/app/(app)/components/UserGreeting";
import Leaderboard from "../components/Leaderboard";

export const dynamic = "force-dynamic";

const Dashboard = async () => {
  // Get Clerk user
  // const clerkUser = await currentUser()

  // // Create user if they don't exist in the database
  // if (clerkUser) {
  //   try {
  //     await prisma.user.create({
  //       data: { username: clerkUser?.username as string },
  //     });
  //   } catch (error) {
  //     if (
  //       error instanceof Prisma.PrismaClientKnownRequestError &&
  //       error.code === "P2002"
  //     ) {
  //       console.warn("User already exists:", clerkUser?.username);
  //     } else {
  //       console.error("Error creating user:", error);
  //       throw error;
  //     }
  //   }
  // }

  return (
    <main>
      <header className="mb-20">
        <UserGreeting />
      </header>
      <section className="mb-20">
        <StatsList />
      </section>
      <section className="mb-10 gap-5 grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1">
          <SubHeading className="mb-5 font-semibold">Today&apos;s Challenge</SubHeading>
          <ChallengeList />
        </div>
        <div className="hidden lg:inline col-span-2">
          <SubHeading className="mb-5 font-semibold">Leaderboard</SubHeading>
          <Leaderboard />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
