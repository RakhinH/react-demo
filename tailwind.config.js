/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-1": "bounce 0.21s infinite",
        "bounce-2": "bounce 0.22s infinite",
        "bounce-3": "bounce 0.23s infinite",
      }
    },
  },
  plugins: [],
}