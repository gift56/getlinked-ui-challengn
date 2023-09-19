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
        footerBg: "#100B20",
        borderColor: "#ffffff2e",
      },
      backgroundImage: {
        btnlinear: "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
        bodybg: "url('/img/bodyBg.png')",
        herobg: "url('/img/heroBg.png')",
        // pricebg: "url('/img/priceBg.png')",
      },
      fontFamily: {
        clash: "'Clash Display', sans-serif",
        unica: "'Unica One', cursive",
      },
      screens: {
        phone: "400px",
        tab: "800px",
        monitor: "1380px",
        minlp: "1300px",
      },
    },
  },
  plugins: [],
};
export default config;
