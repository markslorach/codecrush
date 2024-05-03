import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Hero from "./components/Hero";
import HomeCardsList from "./components/HomeCardsList";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main>
      <Hero />
      <HomeCardsList />
    </main>
  );
}
