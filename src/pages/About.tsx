import { Helmet } from "react-helmet-async";
import AboutContent from "@/components/sections/AboutContent";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Hamza Hassan</title>
        <meta name="description" content="About Hamza Hassan" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <main className="min-h-screen">
      <AboutContent />
      </main>
    </>
  );
}
