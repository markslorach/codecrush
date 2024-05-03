import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

// Components
import ChallengeList from "@/app/(main)/components/ChallengeList";
import StatsList from "@/app/(main)/components/StatsList";
import SubHeading from "@/app/(main)/components/SubHeading";
import UserGreeting from "@/app/(main)/components/UserGreeting";

// export const dynamic = "force-dynamic";

const Dashboard = () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  return (
    <main>
      <header className="mb-14">
        <UserGreeting />
      </header>
      <section className="mb-10">
        <SubHeading className="mb-5">Your Stats</SubHeading>
        <StatsList />
      </section>
      <section className="mb-10">
        <SubHeading className="mb-5">Today&apos;s Challenge</SubHeading>
        <ChallengeList />
      </section>
    </main>
  );
};

export default Dashboard;
