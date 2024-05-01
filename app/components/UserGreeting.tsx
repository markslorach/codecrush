import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import prisma from "@/prisma/client";

interface ClerkUser {
  id: string;
  username: string;
  fullName: string;
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
        name: user?.fullName,
        username: user?.username,
        uid: user?.id,
      },
    });
  }

  return (
    <header className="flex justify-between items-center h-28">
      <h1 className="text-4xl font-extrabold">
        Hello,{" "}
        {user?.username.charAt(0).toUpperCase() + user?.username.slice(1)}!
      </h1>
      <UserButton />
    </header>
  );
};

export default UserGreeting;
