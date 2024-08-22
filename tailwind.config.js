/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // xl: { max: "3000px" },
      // // => @media (max-width: 1300px) { ... }

      // lg: { max: "1023px" },
      // // => @media (max-width: 1023px) { ... }

      // md: { max: "900px" },
      // // => @media (max-width: 767px) { ... }

      // sm: { max: "500px" },
      // // => @media (max-width: 639px) { ... }

      //create event screen
      'sm-screen': '640px',
      // => @media (min-width: 640px) { ... }

      'md-screen': '768px',
      // => @media (min-width: 768px) { ... }

      'lg-screen': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl-screen': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl-screen': '1536px',
      // => @media (min-width: 1536px) { ... }

    },
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        inter:["Inter", "sans-serif"]
      },
      backgroundImage:{
        "comming_soon":"url('src/assets/Saly-2.jpg')"
      }
    },
  },
  plugins: [],
}

