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
    <div className="p-[1px] bg-gradient-to-br from-purple-400 via-red-400 to-blue-400 rounded-lg">
      <Card className="w-full bg-900 bg-slate-900 transition-colors duration-300 ease-in-out text-white/90 p-6 space-y-6 group">
        <span>{icon}</span>
        <div className="space-y-1">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-gray-400 font-light tracking-wide">
            {description}
          </CardDescription>
        </div>
        <div className="flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors ease-in-out duration-300 w-fit">
          <Link href="/dashboard">Choose difficulty</Link>
          <MoveRight className="group-hover:translate-x-0.5 transition-transform duration-300 ease-in-out" />
        </div>
      </Card>
    </div>
  );
};

export default ChallengeCard;
