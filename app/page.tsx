
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Home() {

  const { userId } = auth();

  if (userId) {
    redirect('/dashboard')
  }

  return (
    <main className="max-w-md mx-auto flex justify-center items-center min-h-screen">
      <div className="flex flex-col space-y-5">
        <h1 className="font-extrabold text-5xl">CodeCrush.</h1>
        <SignedIn>
          <Button>
            <Link href="/dashboard">Go to dashboard</Link>
          </Button>
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button className="border">Sign In</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </main>
  );
}
