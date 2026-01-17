import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Atlassian Blue Palette
        blue: {
          50: '#E9F2FF',  // Lightest background
          100: '#CCE0FF',
          200: '#85B8FF',
          600: '#0C66E4', // Brand Primary (Action color)
          700: '#0055CC', // Hover state
          900: '#091E42', // Darkest header
        },
        // Atlassian Neutrals (Text & Backgrounds)
        slate: {
          50: '#F7F8F9',  // Page Background
          100: '#F1F2F4', // Card Background / Hover
          200: '#DCDFE4', // Borders
          300: '#B3B9C4',
          500: '#626F86', // Secondary Text
          600: '#44546F', // Body Text
          700: '#2C3E5D',
          800: '#172B4D', // Primary Text (Headings)
          900: '#091E42', // Super Dark
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Noto Sans"', 'Ubuntu', '"Droid Sans"', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;