import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motions";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full group">
      <motion.div
        variants={fadeIn("up", "spring", 0.3 * index, 0.75)}
        className="w-full p-[2px] rounded-[20px] shadow-card group-hover:shadow-glow transition-all duration-300"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="glassmorphism rounded-[20px] py-6 px-8 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden"
        >
          {/* Subtle neon accent inside card */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-neon-purple rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
          
          <img src={icon} alt={title} className="w-16 h-16 object-contain z-10 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]" />
          
          <h3 className="text-white text-[20px] font-bold text-center z-10 tracking-wider">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[32px] tracking-wide"
      >
        Fullstack Developer with hands-on experience building scalable web
        applications across diverse industries — from fintech and SaaS platforms
        to IoT and fleet management systems. JavaScript-focused, with a strong
        command of React.js, Node.js, Next.js, AdonisJS, and PostgreSQL,
        complemented by solid experience in C#, PHP, and cloud services like
        AWS.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
