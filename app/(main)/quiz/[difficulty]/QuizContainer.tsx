"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
  updateUser,
  question,
  answers,
}: {
  updateUser: (correct: boolean) => void;
  question: QuestionProps;
  answers: AnswerProps[];
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerProps>(answers[0]); // Store the selected answer object
  // const [selectedAnswerIndex, setSelectedAnswerIndex] = useState();
  const [submitted, setSubmitted] = useState(false); // Track if the user has submitted
  const [disableSubmit, setDisableSubmit] = useState(false); // Disable the submit button after submission

  console.log(selectedAnswer);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="space-y-3">
      <h2>{question?.question}</h2>

      <RadioGroup defaultValue={`${0}`} disabled={disableSubmit} className="space-y-2">
        {answers.map((answer, idx) => (
          <div
            key={answer.id}
            className={cn({
              "bg-green-600": submitted && answer.correct, // Correct answer
              "bg-red-600":
                submitted && !answer.correct && selectedAnswer === answer, // Incorrectly selected answer
              "bg-white/5": !submitted && selectedAnswer === answer, // Selected answer before submission
              "cursor-pointer rounded border pl-4 flex items-center space-x-4": true, // Always apply these styles
            })}
          >
            <RadioGroupItem
              value={`${idx}`}
              id={`${idx}`}
              onClick={() => {
                setSelectedAnswer(answer);
              }}
            />
            <Label
              htmlFor={`${idx}`}
              className="flex h-full w-full items-center py-6"
            >
              {answer.answer}
            </Label>
          </div>
        ))}
      </RadioGroup>

      <form
        onSubmit={(e) => {
          updateUser(selectedAnswer?.correct ?? false);
          e.preventDefault();
          setDisableSubmit(true);
        }}
      >
        <Button
          onClick={handleSubmit}
          disabled={disableSubmit}
          variant="outline"
          type="submit"
          className="w-full"
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default QuizContainer;
