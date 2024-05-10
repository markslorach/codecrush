import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { MoveRight } from "lucide-react";
import Link from "next/link";

interface Props {
  icon: string;
  title: string;
  description: string;
}

const ChallengeCard = ({ icon, title, description }: Props) => {
  return (
    // <div className="p-[1px] bg-gradient-to-br from-purple-400 via-red-400 to-blue-400 rounded-lg">
    <Card className="bg-900 group w-full space-y-5 border rounded-md border-white/40 bg-slate-900 px-6 pt-6 pb-5 text-white/90 transition-colors duration-300 ease-in-out">
      <span>{icon}</span>
      <div className="space-y-1">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="font-light tracking-wide text-gray-400">
          {description}
        </CardDescription>
      </div>
      <div className="flex w-fit items-center space-x-2 text-blue-300 transition-colors duration-300 ease-in-out hover:text-blue-200">
        <Link href="/dashboard">Choose difficulty</Link>
        <MoveRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </div>
    </Card>
    // </div>
  );
};

export default ChallengeCard;
