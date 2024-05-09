import { cn } from "@/lib/utils";

interface HeadingProps {
    children: React.ReactNode;
    className?: string;
  }
  
  const SubHeading = ({ children, className }: HeadingProps) => {
    return (
      <h2 className={cn("text-3xl font-normal leading-none", className)}>
        {children}
      </h2>
    );
  };
  
  export default SubHeading;
  