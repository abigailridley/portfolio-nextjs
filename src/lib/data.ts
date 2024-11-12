

export const links = [
  { 
    name: "home",
    hash: "#home"
  },
  {
    name: "about",
    hash: "#about",
  },
  {
    name: "projects",
    hash: "#projects",
  },
  {
    name: "skills",
    hash: "#skills",
  },
  {
    name: "contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Weather App",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "/weather-project.png", 
  },
  {
    title: "Personalised Stories",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "/team-project.png", 
  },
  {
    title: "Travel Blog Project",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "/travel-project.png", 
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
"Framer Motion",
  "Tailwind",
  "GitHub",
  "RESTful APIs",
  "Python",
  "OOP",
  "Flask",
  "SQL",
  "AWS",
  "DevOps",
  "Scrum",
  "Mailchimp",
  "Figma",
  
] as const;