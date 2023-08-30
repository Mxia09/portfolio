/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {lacquer: ['Lacquer', 'sans-serif'],}
    },
  },
  plugins: [require("daisyui", 'flowbite/plugin')],
  daisyui: {
    themes: ["black"],
  },
}

