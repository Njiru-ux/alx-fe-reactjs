/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // Vite's entry file
    "./public/index.html",    // For CRA compatibility (won't break anything)
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}