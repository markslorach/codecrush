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

    const user = await prisma.user.findUnique({
      where: { username: clerkUser?.username as string },
    });

    const score = user?.score ?? 0;

    const updateData: { [key: string]: any } = {
      [params.difficulty + "Answered"]: 1, // Dynamic key - computed property name
      streak: correct ? { increment: 1 } : 0,
      score: correct ? { increment: 10 } : score > 0 ? { decrement: 5 } : 0,
    };

    await prisma.user.update({
      where: { username: clerkUser?.username as string },
      data: updateData,
    });
  };

  return (
    <div>
      <header className="mb-28">
        <h1 className="text-4xl font-bold md:text-[42px]">
          {params.difficulty.charAt(0).toUpperCase() +
            params.difficulty.slice(1)}{" "}
          Question
        </h1>
      </header>

      <QuizContainer
        question={{
          ...question,
          code: question.code ?? ""
        }}
        answers={answers}
        updateUser={updateUser}
      />
    </div>
  );
};

export default QuizPage;
