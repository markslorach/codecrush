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
    <Card className="w-full sm:w-1/3 bg-white/5 border border-white/40 hover:border-white/70 transition-colors duration-300 ease-in-out text-white/90 p-3.5 space-y-4 group">
      <div className="p-2.5 rounded-full border border-white/20 w-fit">
        <p>{icon}</p>
      </div>
      <div className="space-y-1">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-400 font-light tracking-wide">
          {description}
        </CardDescription>
      </div>
      <div className="flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors ease-in-out duration-300 w-fit">
        <Link href="/dashboard">Get started</Link>
        <MoveRight className="group-hover:translate-x-0.5 transition-transform duration-300 ease-in-out" />
      </div>
    </Card>
  );
};

export default FeaturesCard;
