import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D434FE",
        dark: "#150E28",
        purple1: "#903AFF",
      },
      backgroundImage: {
        btnlinear: "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
