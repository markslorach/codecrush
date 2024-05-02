import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="h-[550px] w-full flex justify-center items-center space-y-6 text-center px-5">
      <div className="relative max-w-xl">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold">Level Up Your Coding Skills</h1>
          <p className="text-gray-300 font-medium">
            Test your knowledge and boost your confidence with daily coding
            questions.
          </p>
          <Button className="bg-white/90 rounded-full text-slate-950">Get Started</Button>
        </div>
        <div className="absolute -top-0 sm:-top-20 -left-5 w-64 h-64 sm:w-96 sm:h-96 bg-purple-400 rounded-full mix-blend-lighten  filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute sm:-top-10 -top-5 -right-5  sm:-right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-400 rounded-full mix-blend-lighten  filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 sm:bottom-10 left-10 w-64 h-64 sm:w-72 sm:h-72 bg-red-400 rounded-full mix-blend-lighten filter blur-2xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>
    </section>
  );
};

export default Hero;
