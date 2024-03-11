import { Link } from "rakkasjs";

interface HeroSectionProps {}

export function HeroSection({}: HeroSectionProps) {
  return (
    <div className="w-full  h-screen flex flex-col items-center justify-center text-center relative">
      <div
        className="w-full h-screen flex flex-col items-center justify-center absolute z-30 top-0 
      bottom-0 bg-gradient-to-t from-base-200 to-accent"
      >
        ........................... .............................
        ............................. ...............................
        ........................
      </div>
      <div
        className="h-fit  p-5 flex flex-col items-center gap-3 justify-center 
      bg-gradient-to-t from-accent/20 to-base-100 glass rounded-xl shadow z-40"
      >
        <h1 className="font-bold tracking-tighter text-6xl">
          Applicate
        </h1>
        <h3 className="text-lg lg:text-3xl  tracking-tighter">
          Ease into the your next job application
        </h3>
        <img
          src="/svg/typewriter.svg"
          className="w-1/3 aspect-square text-orange-600"
        />
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          Create a stunning resume and cover letter with our easy-to-use builder
          with automation that leverages your application history to grant you a
          friction less experience.
        </p>

        <div>
          <Link className="btn btn-wide text-lg" href="/dashboard">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
