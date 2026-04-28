import { Helmet } from "react-helmet-async";
import ProjectsGrid from "@/components/sections/ProjectsGrid";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | Hamza Hassan</title>
        <meta name="description" content="AI Projects by Hamza Hassan" />
        <link rel="canonical" href="/projects" />
      </Helmet>
      <main className="min-h-screen">
      <ProjectsGrid />
      </main>
    </>
  );
}
