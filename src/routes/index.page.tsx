import { HeroSection } from "@/components/landing/HeroSection";
import { HeroSection2 } from "@/components/landing/heroSection2";

import { Link, PageProps } from "rakkasjs";

export default function HomePage({}: PageProps) {
  return (
    <main className="flex items-center justify-center w-full  h-fit gap-3">
      {/* <HeroSection /> */}
      <HeroSection2/>
    </main>
  );
}
