import { UserButton } from "@clerk/nextjs";
import { getUser } from "@/lib/user";
import { User } from "@prisma/client";
import { capitaliseString } from "@/utils/helpers";

const UserGreeting = async () => {
  const user = (await getUser()) as User

  return (
    <header className="flex items-center justify-between">
      <h1 className="text-3xl font-bold lg:text-4xl">
        <span>Hello,</span>{" "}
        {capitaliseString(user.username)}!
      </h1>
      <UserButton />
    </header>
  );
};

export default UserGreeting;
