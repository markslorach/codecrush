import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

interface ClerkUser {
  username: string;
}

const UserGreeting = async () => {
  const user = (await currentUser()) as ClerkUser;

  return (
    <header className="flex items-center justify-between">
      <h1 className="text-4xl font-bold md:text-[42px]">
        <span>Hello,</span>{" "}
        {user?.username.charAt(0).toUpperCase() + user?.username.slice(1)}!
      </h1>
      <UserButton />
    </header>
  );
};

export default UserGreeting;
