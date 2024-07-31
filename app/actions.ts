"use server";
import { getUser } from "@/lib/user";
import prisma from "@/prisma/client";
import { getDay } from "@/utils/helpers";

// Update user stats
export const updateUser = async (correct: boolean, difficulty: string) => {
  try {
    const day = getDay();
    const user = await getUser();

    if (!user) {
      throw new Error("User not found.");
    }

    const updateData: { [key: string]: any } = {
      [difficulty + "Answered"]: day,
      streak: correct ? { increment: 1 } : 0,
      score: correct
        ? { increment: 10 }
        : user.score > 0
          ? { decrement: 5 }
          : 0,
    };

    await prisma.user.update({
      where: { username: user?.username },
      data: updateData,
    });
  } catch (error) {
    return { error: "Error updating user" };
  }
};
