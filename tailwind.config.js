/** @type {import('tailwindcss').Config} */
export default {
      content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
      container: {
        center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      },
      },
      colors: {
        primary: "#0F1E35",
        sec: "#d33f49",
      },
      screens: {
        "max-3xl": {
          max: "1535px"
        },
        "max-2xl": {
          max: "1279px"
        },
        "max-xl": {
          max: "1150px"
        },
        "max-lg": {
          max: "1023px"
        },
        "max-md": {
          max: "767px"
        },
        "max-sm": {
          max: "639px"
        },
        "max-xs": {
          max: "450px"
        },
        "max-xxs": {
          max: "340px"
        },
      },
    },
  },

  plugins: [],
}