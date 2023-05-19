/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mainFont: "Josefin Sans",
      },
      colors: {
        lightTypeColor: "#393A4B",
        lightTextColor: "#494C6B",
        lightPlaceColor: "#9495A5",
        lightBordColor: "#D1D5DB",
        allColor: "#3A7CFD",
        darkBoxColor: "#25273D",
        darkBackColor: "#171823",
        darkPlaceColor: "#767992",
        darkBordColor: "#393A4B",
        shadowColor: "#C2C3D6",
      },
    },
  },
  plugins: [],
};
