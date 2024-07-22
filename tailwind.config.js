/** @type {import('tailwindcss').Config} */
import theme from "./src/tailwind/theme"

//npx tailwindcss -i ./src/tailwind/input.css -o ./dist/output.css --watch

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: theme,
  },
  plugins: [],
}

