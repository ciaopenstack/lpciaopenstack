import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Intelligence } from "@/components/sections/Intelligence";
import { Results } from "@/components/sections/Results";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary-500/30 selection:text-white">
      <Header />
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <Intelligence />
      <Results />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
