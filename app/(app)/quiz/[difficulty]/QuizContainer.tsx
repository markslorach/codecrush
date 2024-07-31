"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useWindowSize } from "usehooks-ts";
import { Code, LoaderCircle } from "lucide-react";
import { updateUserAction } from "@/app/actions";
import { Answers, Questions, User } from "@prisma/client";
import Confetti from "react-confetti";
import QuestionPagination from "../../components/QuestionPagination";
import CodeBox from "../../components/CodeBox";

interface Props {
  user: User;
  question: Questions;
  answers: Answers[];
  day: number;
  difficulty: string;
}

const QuizContainer = ({ question, answers, user, day, difficulty }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<Answers>(answers[0]);
  const [submitted, setSubmitted] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [pending, setPending] = useState(false);

  // React confetti state
  const [confetti, setConfetti] = useState(false);
  const [confettiRecycle, setConfettiRecycle] = useState(true);

  const { width, height } = useWindowSize();

  const userAnswered = (user as any)[difficulty + "Answered"] === day;

  useEffect(() => {
    if (userAnswered) setDisabled(true);
  }, [userAnswered]);

  const handleSubmit = () => {
    setPending(true);
    setDisabled(true);
    setTimeout(() => {
      setSubmitted(true);
      setPending(false);
      if (selectedAnswer.correct) {
        setConfetti(true);
        setTimeout(() => setConfettiRecycle(false), 3000);
      }
    }, 1000);
  };

  const updateUser = async () => {
    handleSubmit();
    const result = await updateUserAction(
      selectedAnswer?.correct,
      difficulty,
      day,
    );

    if (result?.error) {
      console.error(result.error);
    }
  };

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
      <section className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-10">
          <h2 className="text-pretty text-xl md:text-2xl">
            {question?.question}
          </h2>
          <div>
            <CodeBox code={question.code?.trim() as string} />
          </div>
        </div>
        <div className="space-y-4">
          <RadioGroup
            defaultValue={`${0}`}
            disabled={disabled}
            className="space-y-2"
          >
            {answers.map((answer, idx) => (
              <div
                key={answer.id}
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
              </div>
            ))}
          </RadioGroup>

          <form action={updateUser}>
            <Button
              disabled={disabled}
              variant="outline"
              type="submit"
              className="w-full border-none bg-blue-500/80 py-6 transition-colors hover:bg-blue-500"
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
