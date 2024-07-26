interface StatCardProps {
  title: string;
  value: string | number;
  icon: any;
  detail: string;
}

const StatCard = ({ title, value, icon, detail }: StatCardProps) => {
  return (
    <div className="bg-slate-800 flex flex-col space-y-8 rounded-md p-6">
      <div className="flex justify-between w-full items-center">
        <h3 className="text-lg font-medium">{title}</h3>
        <span className="w-fit">
          {icon}
        </span>
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
