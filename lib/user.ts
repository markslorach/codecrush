import prisma from "@/prisma/client";
import { currentUser } from "@clerk/nextjs/server";

// Gets logged in user from the db or creates a new user if they don't exist
export async function getUser() {
  try {
    const clerkUser = await currentUser();

    if (!clerkUser) return;

    let user = await prisma.user.findUnique({
      where: { username: clerkUser.username as string },
    });

    if (!user) {
      user = await prisma.user.create({
        data: { username: clerkUser.username as string },
      });
    }

    return user;
  } catch (error) {
    console.error(error);
  }
}

// Gets all users in the db in descending order of score
export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        score: "desc",
      },
    });

    return users;
  } catch (error) {
    console.error(error);
  }
}
