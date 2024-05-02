import { currentUser } from "@clerk/nextjs/server";
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

  console.log(findUser)
  

  // If user is not found in the database, create a new user
  if (!findUser) {
    await prisma.user.create({
      data: {
        username: user?.username,
        uid: user?.id,
      },
    });
  }

  return (
    <header className="h-28">
      <h1 className="text-4xl font-extrabold">
        <span>Hello,</span>{" "}
        {user?.username.charAt(0).toUpperCase() + user?.username.slice(1)}!
      </h1>
    </header>
  );
};

export default UserGreeting;
