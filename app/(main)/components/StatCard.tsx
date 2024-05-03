interface StatCardProps {
  title: string;
  value: number;
  icon: any;
}

const StatCard = ({ title, value, icon }: StatCardProps) => {
  return (
    <div className="flex flex-col space-y-3 border-2 border-gray-700 w-1/3 items-center rounded-2xl shadow-sm p-3">
      <p className="text-purple-400 w-fit py-1 ">{icon}</p>
      <p className="font-bold text-xl">{value}</p>
      <p className="text-xl font-bold">{title}</p>
    </div>
  );
};

export default StatCard;
