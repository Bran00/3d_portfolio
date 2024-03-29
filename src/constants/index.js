import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  metaverse,
  repoWars,
  costs,
  threejs,
} from "../assets"

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
]

const services = [
  {
    title: "FullStack Developer",
    icon: web,
  },
]

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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
]

const experiences = [
  {
    title: "FullStack Developer",
    company_name: "Forja",
    icon: web,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developed and maintained high-performance web and mobile applications using React.",
      "Implemented scalable servers and APIs in Node.js, focusing on efficiency and security.",
      "Designed custom Golang and Node solutions for complex backend issues.",
      " Collaborated within agile teams, following continuous development and delivery practices using Scrum and Kanban.",
    ],
  },
]

const testimonials = [
  {
    testimonial:
      "As a FullStack Developer, Brando is an exceptional professional with a sharp eye for detail and a deep understanding of user experience. He consistently delivers high-quality work that is both aesthetically pleasing and functional.",
    name: "Walison Teodoro",
    designation: "Front End Developer",
    company: "Hostfully",
    image:
      "https://media.licdn.com/dms/image/D4D03AQHJGNxuMCLTPg/profile-displayphoto-shrink_200_200/0/1674062637924?e=1685577600&v=beta&t=4VRftxdWhPMjpFvyqrDMEAdriVQQqyNOKVwcX7wPmx8",
  },
  {
    testimonial:
      "As a person, Brando is dedicated to learning and improving his skills. As a developer he ensures the quality of his work, with attention to details.",
    name: "Gustavo Willemann",
    designation: "Front End Developer",
    company: "Bohr.io",
    image: "https://avatars.githubusercontent.com/u/78227014?v=4",
  },
]

const projects = [
  {
    name: "Metaverse NextJS",
    description:
      "A future site build with support of NextJS for a better experience to client",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "next",
        color: "pink-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://github.com/Bran00/MetaVerse",
  },
  {
    name: "Repo Wars",
    description:
      "A game from quantity of stars of several developers and users from Github to avaliate your knowledges of repositories in GitHub.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-icons",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: repoWars,
    source_code_link: "https://github.com/Bran00/repo-wars-bran",
  },
  {
    name: "Costs",
    description:
      "Build for your company manager the costs of a project. It has functionalities that will go your staff to elaborate the better way.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: costs,
    source_code_link: "https://github.com/Bran00/costs",
  },
]

export { services, technologies, experiences, testimonials, projects }
