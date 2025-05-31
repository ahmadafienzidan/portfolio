import { Divider } from "@heroui/react";
import { techStacks } from "../const/options";

const TechStack = () => {
  const leftSideData = techStacks.slice(0, 2);
  const rightSideData = techStacks.slice(2);

  return (
    <section className="w-full flex items-center justify-center my-8 relative">
      <div className="w-full flex items-center px-8 sm:px-10 md:px-14 lg:px-16">
        <div className="basis-1/3 relative h-96">
          {leftSideData[0].items.map((item, idx) => (
            <img key={`frontend-${idx}`} src={item.logo} alt={item.name} className={item.positionClasses} />
          ))}

          {leftSideData[1].items.map((item, idx) => (
            <img key={`backend-${idx}`} src={item.logo} alt={item.name} className={item.positionClasses} />
          ))}
        </div>
        <div className="basis-1/3 text-center px-4">
          <Divider orientation="vertical" />
          <h1 className="text-4xl font-light mb-4">TechStack</h1>
          <p className="leading-relaxed max-w-md mx-auto font-light text-gray-700">Technologies I work with across software development and automotive innovations</p>
        </div>

        <div className="basis-1/3 px-4 relative h-96">
          {rightSideData[0].items.map((item, idx) => (
            <img key={`ev-${idx}`} src={item.logo} alt={item.name} className={item.positionClasses} />
          ))}
          {rightSideData[1].items.map((item, idx) => (
            <img key={`devtools-${idx}`} src={item.logo} alt={item.name} className={item.positionClasses} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
