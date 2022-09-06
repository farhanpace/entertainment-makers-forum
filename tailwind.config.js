/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        emYellow: "#FCC411",
        emTeal: "#10BFE2",
        emGreen: "#59BB54",
        emOrange: "#F48C22",
        emGreenish: "#2CAF99",
        emPink: "#EF5176",
        emPurple: "#7561AA",
        emRed: "#EA2126",
        emViolet: "#BA569E",
      },
      lineHeight: {
        '6rem' : '6rem',
      },
      maxWidth: {
        'xxs' : '238px',
      },
    },
  },
  plugins: [],
}