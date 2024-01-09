import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      sky: "#b8f8fb"
    },
    extend: {
      fontFamily: {
        ko: 'Montserrat, Pretendard',
        en: 'Montserrat, Raleway',
      }
    },
  },
  plugins: [],
}
export default config
