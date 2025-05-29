import { Divider } from "@heroui/react";

function About() {
  return (
    <section className="flex flex-col mt-8 md:flex-row items-center justify-between gap-8 px-8 sm:px-10 md:px-14 lg:px-16 ">
      <div className="basis-1/2 w-full flex flex-col gap-4">
        <div className="grid grid-rows-2 grid-cols-2 gap-4">
          <div className="col-span-1 relative bg-limelight rounded-3xl aspect-square">
            <span className="absolute bottom-6 left-6 text-3xl font-light ">About Me</span>
            <div className="absolute top-4 right-4 w-10 h-10 bg-bluesoft rounded-full"></div>
            <div className="absolute top-10 right-10 w-6 h-6 bg-purplesoft rounded-full"></div>
          </div>
          <img src="./img/project2.jpg" alt="Work" className="rounded-3xl aspect-square object-cover shadow-lg border-4 border-white/50" />
          <img src="./img/project.jpg" alt="Project" className="col-span-2 rounded-3xl h-48 w-full object-cover shadow-lg border-4 border-white/50" />
        </div>
      </div>

      <div className="basis-1/2 flex flex-col gap-6 ackdrop-blur-sm rounded-3xl p-8  transition-all duration-300">
        <h1 className="text-2xl font-semibold text-gray-800 ">I'm Ahmad 'Afien Zidan, an Electrical Engineer turned Software Developer</h1>
        <Divider />
        <p className="font-light text-gray-600 leading-relaxed">
          With a strong passion for EV technology and digital solutions. Starting from designing wiring schematics for electric buses to building award-winning electric motorcycles, I now apply the same engineering mindset to the world of
          web development using React, Node.js, and MongoDB.
        </p>
        <p className="font-light text-gray-600 leading-relaxed">I believe in merging hardware and software to create real-world impact building things that move people, literally and digitally.</p>
        <Divider />
      </div>
    </section>
  );
}

export default About;
