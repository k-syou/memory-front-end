import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "3lg": { max: "1920px" },



        
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },
    },
    fontSize: {
      "4xl": ["96px", "128px"],
      "3xl": ["64px", "80px"],
      "2xl": ["48px", "56px"],
      xl: ["32px", "40px"],
      lg: ["24px", "32px"],
      md: ["20px", "24px"],
      base: ["16px", "16px"],
      sm: ["14px", "16px"],
      xs: ["12px", "16px"],
      "2xs": ["10px", "16px"],
    },
    colors: {
      // Test
      black: "#000",
      "dark-gray" : "#666",
      "medium-gray" : "#999",
      "light-gray" : "#dedede",
      gray: "#f3f3f3",
      white: "#fff",
      "milky-white": "#fafafa"
    },
    extend: {
      fontFamily: {
        ko: 'Montserrat, Pretendard, sans-serif',
        en: 'Montserrat, sans-serif',
      },
    },
  },
  plugins: [],
};
export default config;
