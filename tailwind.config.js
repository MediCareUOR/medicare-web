/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      x1: "#163A5F",
      x2: "#1D566E",
      x3: "#21ABA5",
      x4: "#C7F9E4",
      x5: "#CDDFF2",
      y1: "#52B57E",
      green: "#13AA0E",
      white: "#fff",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    backgroundImage: {
      contact: "url('/images/contactpic.png')",
    },
  },
  plugins: [],
};
