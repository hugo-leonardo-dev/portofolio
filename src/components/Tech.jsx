import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motions";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What i know</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-10 mt-20">
          {technologies.map((technology) => (
            <div
              className="w-28 h-28 relative group flex justify-center items-center"
              key={technology.name}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-full h-full object-contain"
              />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium whitespace-nowrap">
                {technology.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
