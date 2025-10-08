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
    title: "Wedding Website",
    description:
      "Built as a freelance web development project, this responsive wedding website features a dynamic RSVP system, allowing guests to submit and update responses via unique links. Developed with Next.js, TypeScript, Tailwind CSS, and Supabase, with integrated email notifications and Google Maps.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel", "Resend", "Google Maps API", "Dynamic Routing", "Form Validation", "Responsive Design", "UI/UX", "Email Automation", "Figma", "Canva"],
    
    imageSrc: "/vanrileywedding.png", 
    imageAlt: "Wedding Website Project",
    liveSite: "https://www.vanrileywedding.co.uk/", 
    gitHubLink:"https://github.com/abigailridley/vanriley-wedding-site"
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
    title: "Freelance Shopify Art Shop",
    description:
    "Built as a freelance web development project, this Shopify store showcases an independent artist’s work, featuring product setup, payment integration via PayPal, and custom branding and domain to create a polished, client-ready online shop.",
    tags: ["Shopify", "E-commerce", "Payment Integration", "Branding", "UI/UX", "Product Management", "Responsive Design", "Client Collaboration"],
    
    imageSrc:"/artshop.png",
    imageAlt: "Shopify Art Shop",
    liveSite: "https://www.artyemi.com/",
    gitHubLink:"https://www.artyemi.com/"

  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
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