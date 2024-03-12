import { HeroSection } from "@/components/landing/HeroSection";
import { ThemeSwitcher } from "@/components/landing/ThemeSwitcher";

import { PageProps } from "rakkasjs";

export default function HomePage({}: PageProps) {
  return (
    <main className="flex items-center justify-center w-full  h-fit gap-3">
      <ThemeSwitcher />
      <HeroSection />
    </main>
  );
}
