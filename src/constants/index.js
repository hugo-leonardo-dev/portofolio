import {
  frontend,
  backend,
  automation,
  web,
  adonis,
  aws,
  next,
  postgress,
  reactjs,
  tailwind,
  nodejs,
  git,
  graphql,
  php,
  csharp,
  bootstrap,
  mysql,
  elite,
  prefeitura,
  comigo,
  corelab,
  portfolio,
  whatsweb,
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
    title: "Fullstack Developer",
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
  {
    title: "Automation",
    icon: automation,
  },
];

const technologies = [
  {
    name: "React.JS",
    icon: reactjs,
  },
  {
    name: "Node.JS",
    icon: nodejs,
  },
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "AdonisJS",
    icon: adonis,
  },
  {
    name: "AWS",
    icon: aws,
  },

  {
    name: "GraphQL",
    icon: graphql,
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
  {
    name: "PostgreSQL",
    icon: postgress,
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Corelab Software House",
    icon: corelab,
    iconBg: "#8d3cfd",
    date: "July 2024 – Present",
    points: [
      "Developed scalable applications using React.js, AdonisJS and PostgreSQL, adapting quickly to different business rules across multiple client projects.",
      "Built and maintained REST APIs and complex data models with AdonisJS and PostgreSQL, ensuring data integrity and high performance.",
      "Implemented features for payment intermediation, financial SaaS dashboards, and data visualization platforms using React.js and Angular.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Comigo Rastreamento",
    icon: comigo,
    iconBg: "#E6DEDD",
    date: "September 2024 – July 2025",
    points: [
      "Led the implementation of a vehicle insurance module with AI-based validation, automated policy uploads to AWS S3, and a file management system with a React interface.",
      "Built an interactive React dashboard using Zustand, Chart.js, and Flespi for real-time data visualization and real-time anomaly detection via WebSockets.",
      "Developed an internal REST API with Node.js, Express, GraphQL, and TypeScript, and automated data sync scripts between Flespi and the internal database, reducing support tickets significantly.",
      "Created an automated chatbot using N8N, Z-Pro, and ChatGPT for vehicle status queries and technical support, reducing operational workload.",
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
];

const testimonials = [{}];

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
