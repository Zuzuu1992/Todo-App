/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   mobileBackDay: "../src/assets/images/bg-mobile-light.jpg",
      //   mobileBackNight: "./assets/images/bg-mobile-dark.jpg",
      //   desktopBackDay: "./assets/images/bg-desktop-light.jpg",
      //   desktopBackNight: "./assets/images/bg-desktop-dark.jpg",
      // },
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
        justColor: "#5B5E7E",
      },
      screens: {
        xs: "1px",
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
