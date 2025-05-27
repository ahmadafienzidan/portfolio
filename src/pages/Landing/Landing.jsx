import Hero from "../../components/Hero";
import About from "../../components/About";
import Achievements from "../../components/Achievements";

function Landing() {
  return (
    <>
      <div className="sticky top-0">
        <Hero />
      </div>
      <div className="relative z-0">
        <About />
        <Achievements />
      </div>
    </>
  );
}

export default Landing;
