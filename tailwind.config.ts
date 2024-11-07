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
        'primary-blue': '#0304fcff',
        'pink': '#fcc6e7ff',
        'orange': '#f87046ff',
        'light-blue': '#9bbdffff',
        'blush': '#fbeaebff',
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
