import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MoveRight } from "lucide-react";
import SubHeading from "./SubHeading";
import Link from "next/link";

interface ChallengeCardProps {
  icon: string;
  title: string;
  description: string;
}

const ChallengeCard = ({ icon, title, description }: ChallengeCardProps) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Card className="bg-900 group w-full cursor-pointer space-y-5 rounded-md bg-slate-800 px-6 pb-5 pt-6 text-white/90 transition-colors duration-300 ease-in-out hover:bg-slate-800/80">
            <span>{icon}</span>
            <div className="space-y-1">
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="font-light tracking-wide text-gray-400">
                {description}
              </CardDescription>
            </div>
            <div className="flex w-fit items-center space-x-2 text-blue-300">
              <span>Choose difficulty</span>
              <MoveRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </div>
          </Card>
        </DialogTrigger>
        <DialogContent className="h-52 w-[95%] border-2 border-slate-400 bg-slate-50 p-4 text-black/80 sm:w-1/2">
          <DialogHeader>
            <SubHeading className="font-medium">
              Choose your difficulty
            </SubHeading>
          </DialogHeader>
          <section className="flex flex-col space-y-4">
            <Link href="/quiz/beginner">Beginner</Link>
            <Link href="/quiz/intermediate">Intermediate</Link>
            <Link href="/quiz/advanced">Advanced</Link>
          </section>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChallengeCard;
