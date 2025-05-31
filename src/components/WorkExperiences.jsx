import { Button } from "@heroui/react";
import { experiences } from "../const/options";

function WorkExperiences() {
  return (
    <section className="w-full max-w-6xl mx-auto  flex flex-col items-center py-8 justify-center px-8 sm:px-10 md:px-14 lg:px-16">
      <h2 className="text-3xl md:text-4xl font-light text-center mb-2">Work Experiences</h2>

      <div className="flex flex-wrap justify-between w-full mb-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-6 min-h-[180px] w-full sm:w-[48%] lg:w-[30%] ">
            <div className="w-full h-20 flex items-center justify-center p-4">
              <img src={exp.image} alt={exp.company} className="max-w-full max-h-full object-contain" radius="none" />
            </div>

            <div className="text-center flex-1 flex flex-col justify-center">
              <h3 className="text-base font-semibold">{exp.company}</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">{exp.position}</p>
            </div>
          </div>
        ))}
      </div>

      <Button className="bg-limelight hover:bg-bluesoft hover:text-white text-bluedark border-0 rounded-2xl px-8 py-3 text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg">See More What I've Done</Button>
    </section>
  );
}
export default WorkExperiences;
