"use server";
import { getUser } from "@/lib/user";
import prisma from "@/prisma/client";

// Update user score and streak
export const updateUserAction = async (
  correct: boolean,
  difficulty: string,
  day: number,
) => {
  try {
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
