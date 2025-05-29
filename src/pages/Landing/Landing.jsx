import Hero from "../../components/Hero";
import About from "../../components/About";
import Achievements from "../../components/Achievements";
import TechStack from "../../components/TechStack";
import Footer from "../../components/Footer";
import WorkExperiences from "../../components/WorkExperiences";

function Landing() {
  return (
    <>
      <div className="softgradient">
        <Hero />
        <About />
      </div>
      <WorkExperiences />
    </>
  );
}

export default Landing;
