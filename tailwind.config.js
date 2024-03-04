/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "lm-bg":"#CCE0C2",
          "lm-lightbutton": "#B1CBA7"
        },
        fontFamily: {
          sans: ['Jost', 'sans-serif'],
        },
        fontSize: {
          "h1":"text-3xl",
          "h2":"text-xl",
          "h3":"text-lg",
          "p":"text-base",
        },
  
    },
    plugins: [],
  }
  }