import ChallengeCard from "./ChallengeCard";

interface Props {
  icon: string;
  title: string;
  description: string;
}

const jsCard: Props = {icon: "temp", title: "JavaScript", description: "This is a description"};

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
