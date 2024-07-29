import prisma from "@/prisma/client";
import QuizContainer from "./QuizContainer";
import { getAnswers, getQuestion } from "@/lib/quiz";
import { Answers } from "@prisma/client";
import { getUser } from "@/lib/user";
import { capitaliseString } from "@/utils/helpers";

export const revalidate = 0;

const QuizPage = async ({ params }: { params: { difficulty: string } }) => {
  const question = await getQuestion(params.difficulty, 1);

  if (!question) return;

  const answers = (await getAnswers(question.id)) as Answers[];

  // Update user stats
  const updateUser = async (correct: boolean) => {
    "use server";

    try {
      const user = await getUser();

      if (!user) {
        throw new Error("User not found.");
      }

      const updateData: { [key: string]: any } = {
        [params.difficulty + "Answered"]: 1,
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

  return (
    <div>
      <header className="mb-20">
        <h1 className="text-3xl font-bold md:text-4xl">
         {capitaliseString(params.difficulty)}{" "}
          Question
        </h1>
      </header>

      <QuizContainer
        question={question}
        answers={answers}
        updateUser={updateUser}
      />
    </div>
  );
};

export default QuizPage;
