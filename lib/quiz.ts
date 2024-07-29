import prisma from "@/prisma/client";

// Get question from the database based on difficulty and day
export async function getQuestion(difficulty: string, day: number) {
  try {
    const question = await prisma.questions.findFirst({
      where: {
        difficulty: difficulty,
        day: day,
      },
    });

    return question;
  } catch (error) {
    console.error(error);
  }
}

// Get all answers for a question based on the question ID
export async function getAnswers(questionId: number) {
  try {
    const answers = await prisma.answers.findMany({
      where: {
        questionId: questionId,
      },
    });

    return answers;
  } catch (error) {
    console.error(error);
  }
}
