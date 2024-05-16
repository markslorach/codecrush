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

  const updateUser = async (correct: boolean) => {
    "use server";
    const clerkUser = await currentUser();

    let updateData: { [key: string]: any } = {
      [params.difficulty + "Answered"]: 1,
      streak: correct ? { increment: 1 } : 0,
    };

    if (correct) updateData.score = { increment: 10 };

    await prisma.user.update({
      where: { username: clerkUser?.username as string },
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
        question={question}
        answers={answers}
        updateUser={updateUser}
      />
    </div>
  );
};

export default QuizPage;
