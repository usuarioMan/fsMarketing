/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "legal-blue": "#042e56",
        "legal-blue-500": "#0B74D5",
        "legal-blue-600": "#095FAE",
      },
    },
  },
  plugins: [],
};
