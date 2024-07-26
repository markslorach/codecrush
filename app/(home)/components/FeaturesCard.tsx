import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface HomeCardProps {
  icon: any;
  title: string;
  description: string;
}

const FeaturesCard = ({ icon, title, description }: HomeCardProps) => {
  return (
    <Link href="/dashboard" className="group w-full space-y-5 rounded-md border border-white/30 bg-slate-800 p-3.5 text-white/90 transition-colors duration-300 ease-in-out hover:border-white/60 md:w-1/3">
      <div className="w-fit rounded-full border border-white/20 p-2.5">
        <span>{icon}</span>
      </div>
      <div className="space-y-1">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="font-sourceSans3 text-base tracking-wide text-gray-400">
          {description}
        </CardDescription>
      </div>
      <div className="flex w-fit items-center space-x-2 text-blue-300 transition-colors duration-300 ease-in-out hover:text-blue-200">
        <span>Get started</span>
        <MoveRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
};

export default FeaturesCard;
