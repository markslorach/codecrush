interface StatCardProps {
  title: string;
  value: string | number;
  icon: any;
  detail: string;
}

const StatCard = ({ title, value, icon, detail }: StatCardProps) => {
  return (
    <div className="bg-white/5 w-full flex flex-col space-y-8 rounded-lg p-6 border-b border-white/70 shadow-sm">
      <div className="flex justify-between w-full items-center">
        <p className="text-lg font-medium">{title}</p>
        <p className="w-fit">
          {icon}
        </p>
      </div>
      <div>
        <p className="text-5xl font-medium">{value}</p>
        <small className="text-gray-400 tracking-wide">
          {detail}
        </small>
      </div>
    </div>
  );
};

export default StatCard;
