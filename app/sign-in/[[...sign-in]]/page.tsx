import NavBar from "@/app/(home)/components/NavBar";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
    <NavBar/>
    <div className="flex justify-center items-center min-h-[80vh] py-10">
      <SignIn path="/sign-in" />
    </div>
    </>
  );
}
