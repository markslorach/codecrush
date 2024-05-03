interface HeadingProps {
    children: React.ReactNode;
    className?: string;
  }
  
  const SubHeading = ({ children, className }: HeadingProps) => {
    return (
      <h2 className={`${className} text-3xl font-extrabold leading-none`}>
        {children}
      </h2>
    );
  };
  
  export default SubHeading;
  