interface StatCardProps {
  title: string;
  value: number;
  icon: any;
}

const StatCard = ({ title, value, icon }: StatCardProps) => {
  return (
    <div className="flex flex-col space-y-3 w-1/3 bg-[#f7f3ff] items-center rounded-lg shadow-sm p-3">
      <p className="text-purple-400/50 w-fit ">{icon}</p>
      <p className="font-bold text-xl">{value}</p>
      <p className="text-xl font-bold">{title}</p>
    </div>
  );
};

export default StatCard;
