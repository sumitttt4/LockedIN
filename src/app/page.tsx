import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { GoalMarquee } from "@/components/home/GoalMarquee";
import { FeatureDeepDive } from "@/components/home/FeatureDeepDive";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Pricing } from "@/components/home/Pricing";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div>
        <Hero />
        <GoalMarquee />
        <FeatureDeepDive />
        <HowItWorks />
        <Pricing />
        <Footer />
      </div>
    </main>
  );
}
