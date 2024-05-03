import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-[85vh] py-10">
      <SignUp path="/sign-up" />
    </div>
  );
}
