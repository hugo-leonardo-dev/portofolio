import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motions";

const MailIcon = ({ size, color, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
    <path fill={color || "currentColor"} d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
  </svg>
);

const LinkedinIcon = ({ size, color, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
    <path fill={color || "currentColor"} d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GithubImage = ({ size, className }) => (
  <img src={github} alt="github" style={{ width: size, height: size }} className={className} />
);

const ContactCard = ({ index, icon: Icon, title, info, link, color }) => (
  <Tilt className="xs:w-[250px] w-full group">
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeIn("up", "spring", 0.3 * index, 0.75)}
      className="w-full p-[2px] rounded-[20px]  group-hover:shadow-glow transition-all duration-300 block relative"
    >
      <div className="glassmorphism rounded-[20px] py-6 px-4 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden">
        {/* Subtle glow accent inside card */}
        <div 
          className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-300 z-0"
          style={{ backgroundColor: color }}
        ></div>
        
        <div className="z-10 flex justify-center items-center h-16 w-16 mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
          <Icon size={48} color={color} className="object-contain" />
        </div>
        
        <h3 className="text-white text-[20px] font-bold text-center z-10 tracking-wider mb-2">
          {title}
        </h3>
        
        <p className="text-secondary text-[14px] text-center font-medium w-full break-all px-2 z-10">
          {info}
        </p>
      </div>
    </motion.a>
  </Tilt>
);

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Ready for the next project?</p>
        <h2 className={styles.sectionHeadText}>Let's Connect.</h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[32px] tracking-wide"
      >
        I am currently looking for new opportunities and my inbox is always open. 
        Whether you are a recruiter, have a project idea, or just want to say hi, 
        I will try my best to get back to you!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        <ContactCard
          index={0}
          icon={MailIcon}
          title="Email"
          info="hugoleonardopflorencio@gmail.com"
          link="mailto:hugoleonardopflorencio@gmail.com"
          color="#EA4335"
        />
        <ContactCard
          index={1}
          icon={LinkedinIcon}
          title="LinkedIn"
          info="Let's connect"
          link="https://www.linkedin.com/in/hugo-leonardo-dev"
          color="#0A66C2"
        />
        <ContactCard
          index={2}
          icon={GithubImage}
          title="GitHub"
          info="Check out my repos"
          link="https://github.com/hugo-leonardo-dev"
          color="#ffffff"
        />
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
