import Hero from "../../components/Hero";
import About from "../../components/About";

function Landing() {
  return (
    <>
      <div className="sticky top-0">
        <Hero />
      </div>
      <About />
    </>
  );
}

export default Landing;
