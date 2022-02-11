module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        "bangkit-dongker": "#242A45",
        "bangkit-red": "#FA5959",
        "bangkit-blue": "#0B4DCC",
        "bangkit-grey": "#9194A2",
        "bangkit-white": "#F7F7F7",
      },
    },
    fontFamily: {
      OpenSans: ["Open Sans", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
      'extra-bold': 800,
      black: 900,
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  plugins: [],
}
