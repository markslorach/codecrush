"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface QuestionProps {
  id: number;
  question: string;
  correctAnswer: string;
  day: number;
}

interface AnswerProps {
  id: number;
  answer: string;
  correct: boolean | null;
}

const QuizContainer = ({
  userCorrect,
  userIncorrect,
  question,
  answers,
}: {
  userCorrect: () => void;
  userIncorrect: () => void;
  question: QuestionProps;
  answers: AnswerProps[];
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerProps | null>(
    null,
  );
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(0); // Store the selected answer index
  const [submitted, setSubmitted] = useState(false); // Track if the user has submitted

  console.log(selectedAnswer?.correct);
  return (
    <section className="space-y-3">
      <h2>{question?.question}</h2>

      <div className="space-y-3">
        {answers.map((answer, idx) => (
          <div
            key={idx}
            onClick={() => {
              setSelectedAnswer(answer);
              setSelectedAnswerIndex(idx);
            }}
            className={cn({
              "cursor-pointer rounded-md border p-4": true,
            })}
          >
            {answer.answer}
          </div>
        ))}
      </div>
      <form action={selectedAnswer?.correct ? userCorrect : userIncorrect}>
        <Button variant="outline">Submit</Button>
      </form>
    </section>
  );
};

export default QuizContainer;
