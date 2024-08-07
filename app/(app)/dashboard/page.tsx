import SubHeading from "@/app/(app)/components/shared/SubHeading";
import Leaderboard from "../components/shared/Leaderboard";
import UserGreeting from "../components/dashboard/UserGreeting";
import StatsList from "../components/dashboard/StatsList";
import ChallengeList from "../components/dashboard/ChallengeList";

export const dynamic = "force-dynamic";

const Dashboard = async () => {
  return (
    <main>
      <header className="mb-20">
        <UserGreeting />
      </header>
      <section className="mb-20">
        <StatsList />
      </section>
      <section className="mb-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="col-span-1">
          <SubHeading className="mb-5 font-semibold">
            Today&apos;s Challenge
          </SubHeading>
          <ChallengeList />
        </div>
        <div className="col-span-2 hidden lg:inline">
          <SubHeading className="mb-5 font-semibold">Leaderboard</SubHeading>
          <Leaderboard />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
