import prisma from "@/prisma/client";
import QuizContainer from "./QuizContainer";
import { getAnswers, getQuestion } from "@/lib/quiz";
import { Answers, User } from "@prisma/client";
import { getUser } from "@/lib/user";
import { capitaliseString, getDay } from "@/utils/helpers";

export const revalidate = 0;

const QuizPage = async ({ params }: { params: { difficulty: string } }) => {

  const day = getDay()
  const question = await getQuestion(params.difficulty, day);

  if (!question) return;

  const answers = (await getAnswers(question.id)) as Answers[]
  const user = await getUser() as User

  // Update user stats
  const updateUser = async (correct: boolean) => {
    "use server";

    try {
      const user = await getUser();

      if (!user) {
        throw new Error("User not found.");
      }

      const updateData: { [key: string]: any } = {
        [params.difficulty + "Answered"]: day,
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
        user={user}
        day={day}
        difficulty={params.difficulty}
      />
    </div>
  );
};

export default QuizPage;
