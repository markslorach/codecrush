import prisma from "@/prisma/client";
import QuizContainer from "./QuizContainer";
import { currentUser } from "@clerk/nextjs/server";

export const revalidate = 0;

const QuizPage = async ({ params }: { params: { difficulty: string } }) => {
  const question = await prisma.questions.findFirst({
    where: {
      difficulty: params.difficulty,
      day: 1,
    },
  });

  if (!question) return <div>Page Not Found</div>;

  const answers = await prisma.answers.findMany({
    where: {
      questionId: question.id,
    },
  });

  const updateUserIfCorrect = async () => {
    "use server";
    const clerkUser = await currentUser();

    const updateData: { [key: string]: any } = {
      score: { increment: 10 },
      streak: { increment: 1 },
    };

    if (params.difficulty === "beginner") {
      updateData.beginnerAnswered = 1;
    } else if (params.difficulty === "intermediate") {
      updateData.intermediateAnswered = 1;
    } else if (params.difficulty === "advanced") {
      updateData.advancedAnswered = 1;
    }

    await prisma.user.update({
      where: {
        username: clerkUser?.username as string,
      },
      data: updateData,
    });
  };

  const updateUserIfIncorrect = async () => {
    "use server";
    const clerkUser = await currentUser();

    const updateData: { [key: string]: any } = {
      streak: 0,
    };

    if (params.difficulty === "beginner") {
      updateData.beginnerAnswered = 1;
    } else if (params.difficulty === "intermediate") {
      updateData.intermediateAnswered = 1;
    } else if (params.difficulty === "advanced") {
      updateData.advancedAnswered = 1;
    }

    await prisma.user.update({
      where: {
        username: clerkUser?.username as string,
      },
      data: updateData,
    });
  };

  return (
    <div>
      <h1>
        {params.difficulty.charAt(0).toUpperCase() + params.difficulty.slice(1)}{" "}
        Question
      </h1>

      <QuizContainer
        answers={answers}
        question={question}
        userCorrect={updateUserIfCorrect}
        userIncorrect={updateUserIfIncorrect}
      />
    </div>
  );
};

export default QuizPage;
