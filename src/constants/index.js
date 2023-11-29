import {
    frontend,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    php,
    csharp,
    bootstrap,
    mysql,
    elite,
    prefeitura,
    portfolio,
    whatsweb
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React.JS",
      icon: reactjs,
    },
    {
      name: "Node.JS",
      icon: nodejs,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "csharp",
      icon: csharp,
    },

    {
      name: "mysql",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "PHP Developer - Intern",
      company_name: "City Health Department of Natal",
      icon: prefeitura,
      iconBg: "#383E56",
      date: "September 2021 - February 2022",
      points: [
        "Developing and maintaining the digital attendance system of the department using PHP and other related technologies.",
        "Actively collaborated within a team, participating in planning meetings and technical discussions to optimize the system. ",
        "Implementing responsive design.",
        "Engaged directly with end-users to comprehend their needs and suggestions, aiming to enhance system usability.",
      ],
    },
    {
      title: ".NET Developer",
      company_name: "ELITE Consultores",
      icon: elite,
      iconBg: "#E6DEDD",
      date: "July 2022 - October 2022",
      points: [
        "Developing and maintaining web applications using C# and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {

    },
  ];
  
  const projects = [
    {
      name: "My Portfolio",
      description: 
      "A dynamic and visually appealing FullStack developer portfolio. It offers seamless navigation, organized displays of projects and skills, and a fusion of modern design and cutting-edge technology.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/hugo-leonardo-dev/portoflio",
    },
    {
      name: "WhatsWeb",
      description: 
      "This application employs React to create a dynamic web chat. It features real-time updates, modular components for a clean structure, user authentication for security, and supports basic message formatting.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
      ],
      image: whatsweb,
      source_code_link: "https://github.com/hugo-leonardo-dev/whatsweb",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };