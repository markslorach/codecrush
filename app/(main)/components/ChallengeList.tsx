import ChallengeCard from "./ChallengeCard";
import { SiJavascript } from "react-icons/si";

interface Props {
  icon: any;
  title: string;
  description: string;
}

const jsCard: Props = {
  icon: <SiJavascript className="h-12 w-12 rounded-sm text-blue-300" />,
  title: "JavaScript",
  description: "Challenge yourself with today's JavaScript questions!",
};

const ChallengeList = () => {
  return (
    <ChallengeCard
      icon={jsCard.icon}
      title={jsCard.title}
      description={jsCard.description}
    />
  );
};

export default ChallengeList;
