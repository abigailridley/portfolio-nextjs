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
    title: "Personalised Stories",
    description:
      "The final team project in my Software course. App that generates personalised bed-time stories based on user input. Using Flask endpoints and mySQL database.",
    tags: ["Python", "Flask", "MySQL","HTML", "CSS", "Javascript", "Figma", "Scrum", "Unit Testing"],
    
    imageSrc: "/team-project.png", 
    imageAlt: "Personalised Stories Project",
    liveSite: "https://www.canva.com/design/DAF3cv-hsuA/1YprhPujlImuM4MN26SwdA/view?utm_content=DAF3cv-hsuA&utm_campaign=designshare&utm_medium=link&utm_source=editor", // View Presentation
    gitHubLink:"https://github.com/JessamineCodes/Team3_StorytimeApp"
  },
  
  {
    title: "Travel Blog Project",
    description:
      "A blog documenting my travel across the Americas. Using Google Maps API to show my journey and current location, with Mailchimp API for email subscription.",
    tags: ["React", "Google Maps API", "Mailchimp API", "CSS", "Responsive", "Bootstrap", "Dynamic Routing","Netlify"],
    
    imageSrc: "/travel-blog-project.png", 
    imageAlt: "Travel Blog Project",
    liveSite: "https://ridley.netlify.app/",
    gitHubLink:"https://github.com/abigailridley/travel-blog-project"
  },
 
  {
    title: "Weather App",
    description:
      "Weather App that shows the current weather and forecast for the next 5 days. Using the OpenWeather API and geolocation with timezone-accurate sunrise & sunset times.",
    tags: ["HTML", "CSS", "Javascript", "OpenWeather API", "Geolocation", "Timezone API", "Axios", "Netlify"],
    
    imageSrc: "/weather-project.png", 
    imageAlt: "Weather App Project",
    liveSite: "https://weather-app-5day-vanilla-javascript.netlify.app",
    gitHubLink:"https://github.com/abigailridley/Weather-App"
  },
  {
    title: "Chat App",
    description:
    "A retro style dummy chat app created as a birthday gift with deep fake celebrity audio messages.",
    tags: ["React","React Audio Player", "ElevenLabs", "CSS", "Netlify"],
    
    imageSrc:"/chat-app.png",
    imageAlt: "Chat App Project",
    liveSite: "https://instant-messenger.netlify.app/",
    gitHubLink:"https://github.com/abigailridley/y2k-chat"
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
  "Tailwind",
  "Framer Motion",
  "GitHub",
  "RESTful APIs",
  "Python",
  "OOP",
  "Flask",
  "MySQL",
  "AWS",
  "DevOps",
  "Scrum",
  "Mailchimp",
  "Figma",
  "Bootstrap",
  "Netlify",
  "Vercel",

  
] as const;

export const aboutData = [
  "just moved to Edinburgh from Brighton",
  "fluent in Spanish ish",
  "travelled the americas for 6 months this year",
  "recently shaved my hair off for charity",
  "hate christmas, love cats",

]