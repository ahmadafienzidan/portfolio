import { motion } from "framer-motion";
import { Divider } from "@heroui/react";
import { LinkedinOutlined, GithubOutlined, GitlabOutlined } from "@ant-design/icons";
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";

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

export const floatingVariants = {
  animate: (custom) => ({
    y: [0, -custom.amplitude, 0],
    transition: {
      duration: custom.duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: custom.delay,
    },
  }),
};

function Hero() {
  return (
    <motion.main initial="hidden" animate="show" variants={containerVariants} className=" rounded-2xl left-0 w-full flex flex-col md:flex-row items-center justify-between gap-6 px-8 sm:px-10 md:px-14 lg:px-16 py-10">
      <motion.section variants={itemVariants} className="basis-1/2" id="hero-left">
        <motion.div className="flex gap-6 mb-4">
          {[
            { Icon: LinkedinOutlined, label: "LinkedIn", site: "https://www.linkedin.com/in/ahmad-afien-zidan/" },
            { Icon: GithubOutlined, label: "GitHub", site: "https://github.com/ahmadafienzidan" },
            { Icon: GitlabOutlined, label: "GitLab", site: "https://gitlab.com/ahmadafienzidan" },
          ].map(({ Icon, label, site }, i) => (
            <motion.div key={i} {...iconHover} className=" shadow-sm rounded-full px-4 bg-pinksoft/20 ">
              <Link to={site} target="_blank">
                <Icon className=" text-md  mr-4 transition-colors duration-300" />
                <span className=" text-sm font-medium  hover:text-bluesoft transition-colors duration-300">{label}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.h1 className="text-2xl mt-4 mb-4 font-medium" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          Hello Everyone I'am <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Afien</span>
        </motion.h1>
        <motion.h1 className="text-6xl mt-4 mb-4 font-light" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          SOFTWARE DEVELOPER & ELECTRICAL ENGINEER
        </motion.h1>
        <Divider />
        <p className="font-light max-w-full my-4 text-gray-700">A Software Engineer with unique background in EV electrical systems and a Bachelor's degree in Electrical Engineering. Hardware or Software? I Engineer Solutions!</p>

        <div className="flex">
          <motion.div {...hoverSpring} className="mr-4">
            <a href="./files/CV.pdf" target="_blank">
              <Button isLoading={false} className="border bg-limelight border-limelight text-bluedark hover:bg-bluesoft hover:border-bluesoft hover:text-white rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300">
                Download CV
              </Button>
            </a>
          </motion.div>

          <motion.div {...hoverSpring}>
            <Button isLoading={false} className="border border-bluesoft text-bluedark hover:bg-cyanlight bg-transparent rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300">
              Hire Me
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="basis-1/2 flex justify-center self-end relative h-full" id="hero-center">
        <motion.div variants={floatingVariants} custom={{ amplitude: 8, duration: 3, delay: 0 }} animate="animate" className="absolute top-0 right-6 transform backdrop-blur-lg rounded-xl px-5 py-3 text-sm shadow-lg bg-white/30">
          <p className="text-xl font-medium ">Ahmad 'Afien Zidan</p>
          <p className="text-xs ">Electrical Engineer | Software Developer | EV Enthusiast</p>
        </motion.div>

        <motion.div variants={floatingVariants} custom={{ amplitude: 6, duration: 2.5, delay: 0 }} animate="animate" className="absolute bottom-2 left-6 transform  backdrop-blur-md rounded-full px-5 py-3 text-sm shadow-lg ">
          <p className="text-xs font-medium">3+ years in EV | 1+ years in Software Dev</p>
        </motion.div>

        <img src="./img/Hero.png" alt="Hero" className=" object-cover rounded-3xl w-full h-auto max-w-md md:max-w-lg lg:max-w-xl" />
      </motion.section>
    </motion.main>
  );
}

export default Hero;
