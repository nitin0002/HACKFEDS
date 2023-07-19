/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        poppins : "poppins",
        RussoOne : "Russo One",
        Orbitron : "Orbitron",
      },
    
    letterSpacing: {
      widest: ".15em",
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
    },
    backdropBlur: {
      xs: '2px',
      s: '3px',
    },
    
    backgroundImage: {
      cardbg: "url('/cardbg.jpg')",
    },
    textUnderlineOffset: {
      10: '10px',
      15: '15px',
      20: '20px',
    },
    fontSize: {
      '3.5xl': '2.0rem',
    },
    colors: {
      'blue-added': '#0C162C',
    },
  },
},
  plugins: [],
}