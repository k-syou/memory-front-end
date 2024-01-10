import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      "4xl": "96px",
      "3xl": "64px",
      "2xl": "48px",
      xl: "32px",
      lg: "24px",
      md: "20px",
      base: "16px",
      sm: "14px",
      xs: "12px",
      "2xs": "10px",
    },
    colors: {
      // Test
      black: "#000",
      gray: "#e5e5e5",
      white: "#fafafa",
    },
    extend: {
      fontFamily: {
        // layout 에서 가져올때
        ko: ['var(--font-pretendard)', 'sans-serif'],
        // pretendard: ['var(--font-pretendard)', 'sans-serif'],
        en: ['var(--font-montserrat)', 'sans-serif'],
        // montserrat: ['var(--font-montserrat)', 'sans-serif'],
        // global.css 에서 가져올 때
        // raleway: 'Raleway, sans-serif',
        // ko: 'Montserrat, Pretendard, sans-serif',
        // en: 'Montserrat, Raleway, sans-serif',
      }
    },
  },
  plugins: [],
}
export default config
