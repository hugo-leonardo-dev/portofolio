import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      {/* Dynamic Background Effect */}
           <EarthCanvas />

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none z-20`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-neon-purple shadow-glow animate-pulse-slow" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-neon-purple to-transparent" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-neon-purple drop-shadow-lg">Hugo</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-lg`}>
            Building the web,<br className="sm:block hidden" />
            one line of code at a time.
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20 pointer-events-auto">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-neon-cyan/50 flex justify-center items-start p-2 hover:border-neon-cyan transition-colors duration-300 shadow-glow bg-primary/50 backdrop-blur-md">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-neon-cyan mb-1 shadow-[0_0_10px_#00f3ff]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
