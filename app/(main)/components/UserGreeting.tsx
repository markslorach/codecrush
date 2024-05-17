import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import prisma from "@/prisma/client";
import { Prisma } from "@prisma/client";

interface ClerkUser {
  username: string;
}

const UserGreeting = async () => {
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
