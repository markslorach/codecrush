"use client";
import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { updateUserAction } from "@/app/actions";
import { Answers, Questions, User } from "@prisma/client";
import Confetti from "react-confetti";
import QuestionPagination from "../../components/quiz/QuestionPagination";
import CodeBox from "../../components/quiz/CodeBox";
import Question from "../../components/quiz/Question";
import AnswersList from "../../components/quiz/AnswersList";
import SubmitButton from "../../components/quiz/SubmitButton";

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
          <Question question={question} />
          <CodeBox code={question.code?.trim() as string} />
        </div>
        <div className="space-y-4">
          <AnswersList
            answers={answers}
            disabled={disabled}
            submitted={submitted}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
          />
          <form action={updateUser}>
            <SubmitButton disabled={disabled} pending={pending} />
          </form>
        </div>
      </section>
      <QuestionPagination />
    </>
  );
};

export default QuizContainer;
