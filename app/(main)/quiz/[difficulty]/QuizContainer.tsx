"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";
import QuestionPagination from "../../components/QuestionPagination";
import CodeBox from "../../components/CodeBox";

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
  const [submitted, setSubmitted] = useState(false); // Track if the user has submitted
  const [disabled, setDisabled] = useState(false); // Disable the submit button after submission

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <>
    <section className="flex gap-6">
      <div className="w-1/2 flex items-center pr-8">
        <h2 className="text-2xl text-pretty">{question?.question}</h2>
      </div>
      <div className="w-1/2 space-y-4">
        <CodeBox/>
        <RadioGroup
          defaultValue={`${0}`}
          disabled={disabled}
          className="space-y-2"
        >
          {answers.map((answer, idx) => (
            <div
              key={answer.id}
              className={cn({
                "bg-green-600": submitted && answer.correct, // Correct answer
                "bg-red-600":
                  submitted && !answer.correct && selectedAnswer === answer, // Incorrectly selected answer
                "bg-white/5": !submitted && selectedAnswer === answer, // Selected answer before submission
                "flex items-center space-x-4 rounded-md border pl-4": true, // Always apply these styles
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
                className="flex h-full w-full cursor-pointer items-center py-6"
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
            setDisabled(true);
          }}
        >
          <Button
            onClick={handleSubmit}
            disabled={disabled}
            variant="outline"
            type="submit"
            className="w-full"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
    <QuestionPagination/>
    </>
  );
};

export default QuizContainer;
