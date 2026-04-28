import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/sections/HeroSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Hamza Hassan | AI Engineer</title>
        <meta name="description" content="Landing page for Hamza Hassan Elgzairy" />
        <link rel="canonical" href="/" />
      </Helmet>
      <main className="min-h-screen">
      <HeroSection />
      <ExpertiseSection />
      </main>
    </>
  );
}
