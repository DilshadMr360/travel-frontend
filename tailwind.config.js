/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-screen': {'raw': '(min-width: 1366px) and (max-width: 1366px) and (min-height: 768px) and (max-height: 768px)'},
      },
    },
  },
  plugins: [],
}

