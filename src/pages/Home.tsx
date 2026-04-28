import HeroSection from '../components/sections/HeroSection';
import ExpertiseSection from '../components/sections/ExpertiseSection';
import TechStackSection from '../components/sections/TechStackSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import ProjectsGrid from '../components/sections/ProjectsGrid';

const Home = () => {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      <ExpertiseSection />
      <TechStackSection />
      <ProjectsGrid />
      <TestimonialSection />
    </div>
  );
};

export default Home;