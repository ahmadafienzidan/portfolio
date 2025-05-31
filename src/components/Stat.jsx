import AnimatedCounter from "./AnimatedCounter";

function Stat() {
  return (
    <>
      <div className="mt-16 px-8 sm:px-10 md:px-14 lg:px-16 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg bg-default-50 dark:bg-default-100">
              <h4 className="text-3xl font-bold text-primary mb-2">
                <AnimatedCounter to={3} suffix="+" />
              </h4>
              <p className="text-default-500 text-sm uppercase tracking-wide">Years Experience</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-default-50 dark:bg-default-100">
              <h4 className="text-3xl font-bold text-secondary mb-2">
                <AnimatedCounter to={20} suffix="+" />
              </h4>
              <p className="text-default-500 text-sm uppercase tracking-wide">Projects</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-default-50 dark:bg-default-100">
              <h4 className="text-3xl font-bold text-success mb-2">
                <AnimatedCounter to={5} suffix="+" />
              </h4>
              <p className="text-default-500 text-sm uppercase tracking-wide">Awards</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-default-50 dark:bg-default-100">
              <h4 className="text-3xl font-bold text-warning mb-2">
                <AnimatedCounter to={100} suffix="%" />
              </h4>
              <p className="text-default-500 text-sm uppercase tracking-wide">Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stat;
