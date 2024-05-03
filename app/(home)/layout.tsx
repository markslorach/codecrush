import NavBar from "./components/NavBar";

const HomeLayout = ({ children }: any) => {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
};

export default HomeLayout;
