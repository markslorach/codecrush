import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Answers } from "@prisma/client";

type Props = {
    answers: Answers[]
    disabled: boolean;
    submitted: boolean;
    selectedAnswer: Answers;
    setSelectedAnswer: (answer: Answers) => void;
    };

const AnswersList = ({
  answers,
  disabled,
  submitted,
  selectedAnswer,
  setSelectedAnswer,
}: Props) => {
  return (
    <>
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
    </>
  );
};

export default AnswersList;
