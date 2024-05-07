import Link from "next/link";
import { FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-44">
      <div className=" mx-5 md:mx-20 border-t border-white/10 py-10 flex justify-center">
        <Link href="/" className="font-bold text-2xl flex items-center">
          {" "}
          <FaCode className="w-9 h-9 mr-2" /> CodeCrush
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
