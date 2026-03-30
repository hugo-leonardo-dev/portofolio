import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motions";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="glassmorphism p-5 rounded-2xl sm:w-[360px] w-full border border-transparent hover:border-neon-cyan/50 hover:shadow-glow transition-colors transition-shadow duration-300 group cursor-pointer"
      >
        <div onClick={() => window.open(source_code_link, "_blank")} className="w-full h-full">
          <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px] group-hover:text-neon-cyan transition-colors duration-300">
              {name}
            </h3>
            <p className="mt-2 text-secondary text-[14px] leading-relaxed">
              {description}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 relative z-10">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[13px] font-medium tracking-wide ${tag.color} drop-shadow-md`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My works</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[32px] tracking-wide"
        >
          Following is a curated collection of projects I have built as
          a full-stack web developer, showcasing my commitment to technical
          excellence, modern design, and robust architecture. Each project features a brief
          description, highlighting the challenges faced and the technologies
          used, along with links to raw code and live demos.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
