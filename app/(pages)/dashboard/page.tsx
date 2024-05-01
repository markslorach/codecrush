import SubHeading from "@/app/components/SubHeading";
import UserGreeting from "@/app/components/UserGreeting";

const Dashboard = () => {
  return (
    <div>
      <UserGreeting/>
      <SubHeading className="mb-5">Your Stats</SubHeading>
      <SubHeading className="mb-5">Today's Challenge</SubHeading>
    </div>
  );
};

export default Dashboard;
