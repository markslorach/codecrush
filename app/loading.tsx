import { FaCode } from "react-icons/fa";

const loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <FaCode className="h-10 w-10 animate-spin text-white/70" />
    </div>
  );
};

export default loading;
