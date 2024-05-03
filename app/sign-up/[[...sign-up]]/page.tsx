import NavBar from "@/app/(home)/components/NavBar";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center min-h-[80vh] py-10">
        <SignUp path="/sign-up" />
      </div>
    </>
  );
}
