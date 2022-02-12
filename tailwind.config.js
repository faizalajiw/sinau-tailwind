module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        "toko-dongker": "#242A45",
        "toko-red": "#FA5959",
        "toko-blue": "#0B4DCC",
        "toko-grey": "#9194A2",
        "toko-white": "#F7F7F7",
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
