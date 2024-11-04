import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        chango: ['Chango', 'sans-serif'],
        plexmono: ['IBM Plex Mono', 'monospace'],
        sourcesans: ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
