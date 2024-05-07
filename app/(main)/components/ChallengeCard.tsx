import { Card, CardDescription, CardTitle } from '@/components/ui/card';


interface Props {
  icon: string;
  title: string;
  description: string;
}

const ChallengeCard = ({icon, title, description}: Props) => {
  return (
    <Card className="w-full bg-white/5 border border-white/40 hover:border-white/70 transition-colors duration-300 ease-in-out text-white/90 p-3.5 space-y-4 group">
    <div className="p-2.5 rounded-full border border-white/20 w-fit">
      <p>{icon}</p>
    </div>
    <div className="space-y-1">
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription className="text-gray-400 font-light tracking-wide">
        {description}
      </CardDescription>
    </div>
  </Card>
  )
}

export default ChallengeCard