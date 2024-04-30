interface Props {
  children: React.ReactNode;
}

const PagesLayout = ({ children }: Props) => {
  return <main className="max-w-lg mx-auto">{children}</main>;
};

export default PagesLayout;
