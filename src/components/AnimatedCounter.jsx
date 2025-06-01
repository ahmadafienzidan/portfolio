import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { animate, useMotionValue } from "framer-motion";

const AnimatedCounter = ({ from = 0, to = 100, duration = 1.5, suffix = "" }) => {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration,
        onUpdate: (latest) => setDisplay(Math.floor(latest)),
      });
      return controls.stop;
    }
  }, [count, to, duration, inView]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
