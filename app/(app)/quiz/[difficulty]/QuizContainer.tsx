"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useWindowSize } from "usehooks-ts";
import { Code, LoaderCircle } from "lucide-react";
import Confetti from "react-confetti";
import QuestionPagination from "../../components/QuestionPagination";
import CodeBox from "../../components/CodeBox";
import { motion } from 'framer-motion';


type QuestionProps = {
  id: number;
  question: string;
  correctAnswer: string;
  day: number;
  code: string | null;
};

type AnswerProps = {
  id: number;
  answer: string;
  correct: boolean;
};

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

  // React confetti state
  const [confetti, setConfetti] = useState(false);
  const [confettiRecycle, setConfettiRecycle] = useState(true);

  const handleSubmit = () => {
    setPending(true);
    setTimeout(() => {
      setSubmitted(true);
      setPending(false);
      if (selectedAnswer.correct) {
        setConfetti(true);
        setTimeout(() => setConfettiRecycle(false), 3000);
      }
    }, 1000);
  };

  const { width, height } = useWindowSize();

  return (
    <>
      {confetti && (
        <Confetti
          height={height}
          width={width}
          numberOfPieces={200}
          recycle={confettiRecycle}
        />
      )}
      <section className="mb-20 gap-10 md:space-y-0 space-y-10  md:flex ">
        <div className="flex flex-col gap-10 justify-between md:w-1/2">
          <h2 className="text-pretty text-2xl">{question?.question}</h2>
          <div className="-my-2">

          <CodeBox code={question.code as string} />
          </div>
        </div>
        <div className="space-y-4 md:w-1/2">
          <RadioGroup
            defaultValue={`${0}`}
            disabled={disabled}
            className="space-y-2"
          >
            {answers.map((answer, idx) => (
              <motion.div
                key={answer.id}
                // initial={{ opacity: 0 }} 
                // animate={{ opacity: 1 }}
                // transition={{ delay: idx * 0.2 }}
                className={cn(
                  "flex items-center space-x-4 rounded-lg bg-slate-800 pl-4 transition-colors",
                  {
                    "hover:bg-slate-700": !disabled,
                    "bg-green-600/70": submitted && answer.correct,
                    "bg-red-500/70":
                      submitted && !answer.correct && selectedAnswer === answer,
                    "bg-slate-700": !submitted && selectedAnswer === answer,
                  },
                )}
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
              </motion.div>
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
              className="w-full border-none bg-blue-500/80 py-6"
            >
              Submit
              {pending ? (
                <LoaderCircle className="ml-1.5 h-5 w-5 animate-spin" />
              ) : (
                <Code className="ml-1.5 h-5 w-5" />
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