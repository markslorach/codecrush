import { Questions } from "@prisma/client";

const Question = ({ question }: { question: Questions }) => {
  return (
    <h2 className="text-pretty text-xl md:text-2xl">{question?.question}</h2>
  );
};

export default Question;
