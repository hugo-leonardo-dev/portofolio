import { SectionWrapper }  from "../hoc";
import { technologies } from "../constants";
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motions';
import { styles } from '../styles';



const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What i know</p>
      <h2 className={styles.sectionHeadText}>Technologies.</h2>
      <div className="flex flex-row flex-wrap justify-center items-center gap-10 mt-20">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <img src={technology.icon} />
        </div>
      ))}
    </div>
    </motion.div> 

    </>
  )
}

export default SectionWrapper(Tech, "")