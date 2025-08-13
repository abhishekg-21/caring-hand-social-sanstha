import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#7AC143",
          dark: "#242424",
          gray: "#6B7280",
          cream: "#FEFAF2",
          red: "#D84C4C",
        },
      },
      maxWidth: { page: "1120px" },
      boxShadow: { card: "0 8px 24px rgba(0,0,0,.08)" },
    },
  },
  plugins: [],
};
export default config;
