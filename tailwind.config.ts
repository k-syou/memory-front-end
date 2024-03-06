import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: { min: "1440px", max: "1920px" },
      lg: { min: "1020px", max: "1439px" },
      md: { min: "768px", max: "1019px" },
      sm: { max: "767px" },
    },
    container: {
      center: true,
      screens: {
        xl: { min: "1440px", max: "1920px" },
        lg: { min: "1020px", max: "1439px" },
        md: { min: "768px", max: "1019px" },
        sm: { min: "360px", max: "767px" },
      },
    },
    fontSize: {
      h1: [
        "64px",
        {
          fontWeight: 300,
          lineHeight: "128px",
        },
      ],
      h2: [
        "48px",
        {
          fontWeight: 300,
          lineHeight: "80px",
        },
      ],
      h3: [
        "40px",
        {
          fontWeight: 400,
          lineHeight: "56px",
        },
      ],
      h4: [
        "32px",
        {
          fontWeight: 400,
          lineHeight: "40px",
        },
      ],
      h5: [
        "24px",
        {
          fontWeight: 400,
          lineHeight: "36px",
        },
      ],
      h6: [
        "20px",
        {
          fontWeight: 400,
          lineHeight: "30px",
        },
      ],
      s1: [
        "16px",
        {
          fontWeight: 500,
          lineHeight: "24px",
        },
      ],
      s2: [
        "14px",
        {
          fontWeight: 500,
          lineHeight: "22px",
        },
      ],
      b1: [
        "16px",
        {
          fontWeight: 400,
          lineHeight: "24px",
        },
      ],
      b2: [
        "15px",
        {
          fontWeight: 400,
          lineHeight: "24px",
        },
      ],
      btn: [
        "14px",
        {
          fontWeight: 500,
          lineHeight: "22px",
        },
      ],
      caption: [
        "12px",
        {
          fontWeight: 400,
          lineHeight: "16px",
        },
      ],
      overline: [
        "10px",
        {
          fontWeight: 400,
          lineHeight: "16px",
        },
      ],
    },
    colors: {
      // basic colors
      black: "#000",
      gray900: "#3d3d3d",
      gray700: "#6f6f6f",
      gray600: "#939393",
      gray500: "#afafaf",
      gray400: "#c8c8c8",
      gray300: "#efefef",
      gray200: "#f5f5f5",
      gray100: "#f9f9f9",
      white: "#fff",
      // play colors
      lavender: "#584C82",
      "dark-turquoise": "#202e37",
      "wood-brown": "#72573d",
      // actor colors
      "min-purple": "#e4cbf7",
      "jin-blue": "#bfd9fe",
      "kwon-sky": "#c1ebf6",
      "gyu-gray": "#d8d8d8",
      "jing-yellow": "#fdebb3",
      "jyeong-black": "#8b8b8b",
      "hoon-brown": "#e4cdc0",
      "som-white": "#fff",
      "sha-pink": "#febedf",
      "do-orange": "#fcceaf",
      "noo-green": "#b9e9c9",
      "ko-red": "#fda8a0",
    },
    extend: {
      fontFamily: {
        ko: "Pretendard, sans-serif",
        en: "Montserrat, sans-serif",
      },
    },
  },
  plugins: [],
  mode: "jit",
};
export default config;
