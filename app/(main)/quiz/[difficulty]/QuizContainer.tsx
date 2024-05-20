"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Confetti from "react-confetti";
import { useWindowSize as windowSize } from "usehooks-ts";

// Components
import QuestionPagination from "../../components/QuestionPagination";
import CodeBox from "../../components/CodeBox";

// Icons
import { Code, LoaderCircle } from "lucide-react";

interface QuestionProps {
  id: number;
  question: string;
  correctAnswer: string;
  day: number;
  code: string;
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
  const [pending, setPending] = useState(false); // Track if the submission is pending

  // React confetti
  const [isExploding, setIsExploding] = useState(false);
  const [confetti, setConfetti] = useState(true);

  const { width, height } = windowSize();

  const handleSubmit = () => {
    setPending(true);
    setTimeout(() => {
      setSubmitted(true);
      setPending(false);
      if (selectedAnswer.correct) {
        setIsExploding(true);
        setTimeout(() => setConfetti(false), 5000);
      }
    }, 1500);
  };

  return (
    <>
      {isExploding && (
        <Confetti
          height={height}
          width={width}
          numberOfPieces={200}
          recycle={confetti}
        />
      )}
      <section className="flex gap-6">
        <div className="flex w-1/2 items-center pr-8">
          <h2 className="text-pretty text-2xl">{question?.question}</h2>
        </div>
        <div className="w-1/2 space-y-4">
          <CodeBox code={question.code} />
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
              {pending ? (
                <LoaderCircle className="ml-1.5 animate-spin" />
              ) : (
                <Code className="ml-1.5 " />
              )}
            </Button>
          </form>
        </div>
      </section>
      <QuestionPagination />
    </>
  );
};

export default QuizContainer;
function useWindowSize(): { width: any; height: any } {
  throw new Error("Function not implemented.");
}
