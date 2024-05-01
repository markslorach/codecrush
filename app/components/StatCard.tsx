interface StatCardProps {
  title: string;
  value: number;
  icon: any;
}

const StatCard = ({ title, value, icon }: StatCardProps) => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <p className="py-1">{icon}</p>
      <p>{value}</p>
      <p className="">{title}</p>
    </div>
  );
};

export default StatCard;
