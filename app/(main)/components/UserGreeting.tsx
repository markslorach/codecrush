import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import prisma from "@/prisma/client";

interface ClerkUser {
  id: string;
  username: string;
}

const UserGreeting = async () => {
  const user = (await currentUser()) as ClerkUser;

  // Finds logged in user in the database
  const findUser = await prisma.user.findUnique({
    where: { username: user?.username },
  });

  // If user is not found in the database, create a new user
  if (!findUser) {
    await prisma.user.create({
      data: {
        username: user?.username,
      },
    });
  }

  return (
    <header className="flex items-center justify-between">
      <h1 className="text-4xl md:text-[42px] font-bold">
        <span>Hello,</span>{" "}
        {user?.username.charAt(0).toUpperCase() + user?.username.slice(1)}!
      </h1>
      <UserButton />
    </header>
  );
};

export default UserGreeting;
