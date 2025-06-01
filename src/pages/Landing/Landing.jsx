import Hero from "../../components/Hero";
import About from "../../components/About";
import TechStack from "../../components/TechStack";
import WorkExperiences from "../../components/WorkExperiences";
import Achievements from "../../components/Achievements";
import Footer from "../../components/Footer";
import Stat from "../../components/Stat";

function Landing() {
  return (
    <>
      <main className="softgradient">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
          <Stat />
        </section>
        <section id="experience">
          <WorkExperiences />
        </section>
        <section id="skills" className="hidden md:block">
          <TechStack />
        </section>
        <section id="achievement">
          <Achievements />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default Landing;
