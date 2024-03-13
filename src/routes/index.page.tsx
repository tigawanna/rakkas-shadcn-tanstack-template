import { HeroSection } from "@/components/landing/HeroSection";
import { Toolbar } from "@/components/navigation/Toolbar";
import { PageProps } from "rakkasjs";

export default function HomePage({}: PageProps) {
  return (
    <main className="flex flex-col items-center w-full  h-fit ">

      <HeroSection />
    </main>
  );
}
