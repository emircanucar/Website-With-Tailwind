/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        yellowtail: ["Yellowtail", "sans-serif"],
      },
      colors: {
        "organick-1": "#274C5B",
        "organick-2": "#7EB693",
        "organick-3": "#EFD372",
        "organick-p": "#525C60",
      },
      backgroundImage: {
        'customer': "url('assets/img/bg/testimonial.jpg')",
      },
    },
  },
  plugins: [],
};
