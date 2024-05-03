import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

// Components
import Hero from "./components/Hero";
import HomeCardsList from "./components/FeaturesCardList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main>
      <NavBar />
      <Hero />
      <HomeCardsList />
      <Footer />
    </main>
  );
}
