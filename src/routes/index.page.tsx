import { HeroSection } from "@/components/landing/HeroSection";


import { PageProps } from "rakkasjs";

export default function HomePage({}: PageProps) {
  return (
    <main className="flex items-center justify-center w-full  h-fit gap-3">
      <HeroSection />

    </main>
  );
}
