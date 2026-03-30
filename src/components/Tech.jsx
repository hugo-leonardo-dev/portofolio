import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motions";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I know</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-10 mt-20">
        {technologies.map((technology, index) => (
          <motion.div
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            className="w-28 h-28 relative group flex justify-center items-center cursor-pointer animate-float"
            style={{ animationDelay: `${index * 0.2}s` }}
            key={technology.name}
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-neon-cyan rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            
            {/* Icon Container */}
            <div className="glassmorphism w-full h-full rounded-2xl flex justify-center items-center p-4 border border-transparent group-hover:border-neon-cyan/50 group-hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all duration-300">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
              />
            </div>

            {/* Tooltip text */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neon-cyan text-sm font-semibold tracking-wide whitespace-nowrap bg-primary/80 px-3 py-1 rounded-full border border-neon-cyan/30 shadow-glow z-10">
              {technology.name}
            </span>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
