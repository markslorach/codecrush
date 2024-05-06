interface StatCardProps {
  title: string;
  value: string | number;
  icon: any;
  detail: string;
}

const StatCard = ({ title, value, icon, detail }: StatCardProps) => {
  return (
    <div className="w-1/3 flex flex-col p-[1px] rounded-lg bg-gradient-to-br from-red-400 via-purple-400 to-blue-400">
      <div className="bg-[#1b2335] space-y-8 rounded-lg p-6">
        <div className="flex justify-between w-full items-center">
          <p className="text-lg">{title}</p>
          <p className="w-fit">{icon}</p>
        </div>
        <div>
          <p className="text-5xl font-medium">{value}</p>
          <small className="text-gray-400 tracking-wide hidden lg:inline">{detail}</small>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
