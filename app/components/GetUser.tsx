import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import prisma from "@/prisma/client";

interface User {
  id: string;
  username: string;
  fullName: string;
}

const GetUser = async () => {
  const user = await currentUser() as User;

  const checkUser = await prisma.user.findUnique({
    where: { uid: user?.id },
  });

  if (!checkUser) {
    await prisma.user.create({
      data: {
        name: user?.fullName,
        username: user?.username,
        uid: user?.id,
      },
    });
  }

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-bold">Hello, {user?.username.charAt(0).toUpperCase() + user?.username.slice(1)}</h1>
      <UserButton />
    </div>
  );
};

export default GetUser;
