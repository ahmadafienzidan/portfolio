import { motion } from "framer-motion";
import Line from "./common/Line";
import { Linkedin, Github, Gitlab } from "./icons/HeroIcons";
import { Button } from "@heroui/react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};
const itemVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const hoverSpring = {
  whileHover: { scale: 1.05, y: -3 },
  transition: { type: "spring", stiffness: 300 },
};
const iconHover = {
  whileHover: { scale: 1.2, rotate: 10 },
  whileTap: { scale: 0.9 },
  transition: { type: "spring", stiffness: 300 },
};

export default function Hero() {
  return (
    <motion.main initial="hidden" animate="show" variants={containerVariants} className="left-0 w-full flex flex-col md:flex-row items-center justify-between gap-6 px-8 sm:px-10 md:px-14 lg:px-16 py-10 bg-white">
      <motion.section variants={itemVariants} className="basis-3/10" id="hero-left">
        <motion.div className="flex gap-4 mb-4" whileHover={{ scale: 1.05 }}>
          {[Linkedin, Github, Gitlab].map((Icon, i) => (
            <motion.div key={i} {...iconHover}>
              <Icon className="hover:text-[#B6B09F] transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        <motion.h1 className="text-4xl mt-4 mb-4 font-light" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          SOFTWARE DEVELOPER
        </motion.h1>
        <motion.h1 className="text-4xl mt-4 mb-4 font-light" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          & ELECTRICAL ENGINEER
        </motion.h1>
        <Line />
        <p className="font-light max-w-full my-4">A Software Engineer with unique background in EV electrical systems and a Bachelor's degree in Electrical Engineering. Hardware or Software? I Engineer Solutions!</p>

        <div className="flex">
          <motion.div {...hoverSpring} className="mr-4">
            <Button isLoading={false} className="border bg-[#EAE4D5] border-gray-300 text-gray-800 hover:bg-[#B6B09F] hover:text-white rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300">
              Download CV
            </Button>
          </motion.div>

          <motion.div {...hoverSpring}>
            <Button isLoading={false} className="border border-gray-300 text-gray-800 hover:bg-gray-100 bg-transparent rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300">
              Hire Me
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="basis-4/10 flex justify-center self-end relative h-full" id="hero-center">
        {["top-6 right-6", "bottom-6 left-6"].map((pos, idx) => (
          <div key={idx} className={`absolute ${pos} z-10 animate-pulse`}>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 w-fit">
              <span className="w-4 h-4 rounded-full bg-white/60" />
              <span className="w-4 h-4 rounded-full bg-white/70" />
              <span className="w-4 h-4 rounded-full bg-white/80 col-start-2 row-start-2" />
            </div>
          </div>
        ))}

        <div className="absolute top-1/5 right-6 transform -translate-y-1/2 bg-white/40 backdrop-blur-md rounded-xl px-5 py-3 text-sm text-dark shadow-lg">
          <p className="text-xl font-medium">Ahmad 'Afien Zidan</p>
          <p className="text-xs text-gray-600">Electrical Engineer | Software Developer | EV Enthusiast</p>
        </div>

        <div className="absolute bottom-2 right-6 transform -translate-y-1/2 bg-white/40 backdrop-blur-md rounded-full px-5 py-3 text-sm text-dark shadow-lg border border-gray-300">
          <p className="text-xs text-[#222222]">3+ years in EV | 1+ years in Software Dev</p>
        </div>

        <img src="./img/Hero.jpg" alt="Hero" className="object-cover rounded-3xl w-full h-auto max-w-md md:max-w-lg lg:max-w-xl" />
      </motion.section>

      <section className="basis-3/10 flex self-end flex-col gap-4 h-full" id="hero-right">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-500 font-medium">Latest Engineering Projects</p>
          <Line width="w-1/2" />
          <h1 className="text-xl font-semibold text-gray-800">Formulatrix Indonesia</h1>
          <h3 className="text-medium font-normal text-gray-800">Assist Develop Internal Apps with React</h3>
          <p className="text-sm text-gray-600">Using React, Redux and styling with SCSS</p>
          <Button isLoading={false} className="mt-2 rounded-full shadow-sm bg-[#EAE4D5] text-[#222222] hover:bg-[#B6B09F] font-medium flex items-center justify-center">
            Get to Know All Projects
          </Button>
        </div>

        <div className="relative flex-1">
          <img src="./img/Hero-Projects.jpg" alt="Projects" className="object-cover rounded-3xl h-full w-full" />

          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-white/40 text-xs text-white/90 font-medium px-3 py-1 rounded-full backdrop-blur-sm">EV Testing</span>
            <span className="bg-white/40 text-xs text-white/90 font-medium px-3 py-1 rounded-full backdrop-blur-sm">Control System</span>
          </div>

          <div className="absolute bottom-4 left-4 bg-white/40 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md">
            <p className="text-sm font-semibold text-white/90">2 yrs Lab Experience</p>
            <p className="text-xs text-[#222222]">Tested EV systems & wrote custom firmware</p>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
