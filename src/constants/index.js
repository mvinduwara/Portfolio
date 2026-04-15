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
  tesla,
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
    title: "Web Application Development",
    icon: web,
  },
  {
    title: "FrontEnd Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Application Development",
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
    name: "TypeScript",
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
    title: "BSc (Hons) Computer Science",
    // company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "Reading for degree from the Birmingham City University.",
      "Studying at Java Institute (Sri Lanka).",
      "Building a strong foundation in Java, React and PHP.",
      "Developing backend systems, building CRUD systems, and integrating reporting tools.",
    ],
  },
  {
    title: "GCE Advanced Level",
    // company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2013/2022",
    points: [
      "Completed secondary education at Mahinda Rajapaksha College Homagama.",
    ],
  },
  {
    title: "Technology Stack & Tools",
    icon: shopify,
    iconBg: "#383E56",
    date: "Core Competencies",
    points: [
      "Programming Languages: Proficient in PHP, Java, Python, JavaScript, and TypeScript.",
      "Frontend Development: Building responsive UIs using ReactJS, HTML, CSS, SCSS, Bootstrap, and Tailwind.",
      "Database Systems: Designing and managing data with MySQL and PostgreSQL.",
      "Version Control: Managing codebases and collaborating using Git.",
    ],
  },
  {
    title: "About Me",
    icon: meta, 
    iconBg: "#383E56",
    date: "Profile",
    points: [
      "Name: Manilka Vinduwara",
      "Degree: BSc (Hons) Software Engineering",
      "Date of Birth: 2002/03/11 (Age: 24)",
      "Contact: 0712739342",
      "Email: dev.manilkavinduwara@gmail.com",
    ],
  },
];

const projects = [
  {
    name: "Eco Cycle",
    description:
      "A comprehensive Android application designed for efficient waste management and collection. It features dedicated interfaces for sellers to post pickup requests and drivers to discover and accept jobs, supported by real-time Firebase notifications.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "retrofit",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/mvinduwara/Smart-Waste-Management",
  },
  {
    name: "GT Automech ERP",
    description:
      "A comprehensive Enterprise Resource Planning (ERP) system tailored for automotive workshops. It streamlines garage operations with dedicated modules for inventory management, vehicle job cards, automated invoicing, and employee attendance tracking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/mvinduwara/GT-Automech-New",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
