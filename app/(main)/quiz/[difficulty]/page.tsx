import prisma from "@/prisma/client";
import Answers from "./Answers";

const GamePage = async ({ params }: { params: { difficulty: string } }) => {
const question = await prisma.questions.findFirst({
    where: {
        difficulty: params.difficulty,
        day: 1,
    },
});

if (!question) {
    return <div>Page Not Found</div>; 
  }

const answers = await prisma.answers.findMany({
    where: {
        questionId: question?.id
    },
});

console.log(answers)

  return (
    <div>
      <h1>
        {params.difficulty.charAt(0).toUpperCase() + params.difficulty.slice(1)}{" "}
        Question
      </h1>
      <h2>{question?.question}</h2>
      <ul>
        {answers?.map((answer) => (
          <Answers answer={answer} key={answer.id} />
        ))}
      </ul>
    </div>
  );
};

export default GamePage;
