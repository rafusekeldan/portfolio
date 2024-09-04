import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "UX Designer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Java Developer",
    company_name: "SiegeMC LLC",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - March 2023",
    points: [
      "Developing and maintaining game applications using Java and other related technologies.",
      "Collaborating with a team including designers, managers, and a few other developers to create game plugins.",
      "Implementing scalable design and code within the codebase to improve performance and maintainability.",
      "Gained experience in a team-oriented environment and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Rival Rust Servers",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2023 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Creating unique features and improvements to the web application within the codebase.",
      "Implementing scalable design and code within the codebase to improve performance and maintainability.",
      "Completed coding components and implementing new features.",
    ],
  },
  {
    title: "Full stack Developer & CEO",
    company_name: "Party Central LLC",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Creation and management of the entire business operations, including team management, finance, and customer service.",
      "Implementing scalable design and code within the codebase to improve performance and maintainability.",
      "Creating a front-end and back-end development of the entire website and application.",
      "Creating a full scaleable design for the entire website and application.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Template #1",
    description:
      "This project is not done yet.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/keldanrafuse",
  },
  {
    name: "Template #1",
    description:
      "This project is not done yet.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/keldanrafuse",
  },
  {
    name: "Template #1",
    description:
      "This project is not done yet.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/keldanrafuse",
  },
];

export { services, technologies, experiences, testimonials, projects };
