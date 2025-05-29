import { Button, Image } from "@heroui/react";

const experiences = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Logo_INKA_-_Industri_Kereta_Api_Indonesia.svg/2560px-Logo_INKA_-_Industri_Kereta_Api_Indonesia.svg.png",
    company: "PT Industri Kereta Api",
    position: "Research & Development Intern",
  },
  {
    image: "./img/Braja.png",
    company: "PT Braja Elektrik Motor",
    position: "Electrical Engineer, Technical Support Engineer, Research Assistant",
  },
  {
    image: "https://fmlx.b-cdn.net/wp-content/uploads/2018/01/final-logo-1024x124.png",
    company: "Formulatrix Indonesia",
    position: "Software Engineer Intern",
  },
];

function WorkExperiences() {
  return (
    <section className="flex flex-col items-center my-8 justify-center px-8 sm:px-10 md:px-14 lg:px-16">
      <h2 className="text-3xl md:text-4xl font-light text-center mb-2">Work Experiences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  max-w-5xl w-full">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-6  min-h-[180px]s">
            <div className="w-full h-20 flex items-center justify-center  p-4">
              <img src={exp.image} alt={exp.company} className="max-w-full max-h-full object-contain" radius="none" />
            </div>

            <div className="text-center flex-1 flex flex-col justify-center">
              <h3 className="text-base font-semibold ">{exp.company}</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">{exp.position}</p>
            </div>
          </div>
        ))}
      </div>

      <Button className="bg-limelight hover:bg-bluesoft hover:text-white text-bluedark border-0 rounded-2xl px-8 py-3 text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg">See More</Button>
    </section>
  );
}

export default WorkExperiences;
