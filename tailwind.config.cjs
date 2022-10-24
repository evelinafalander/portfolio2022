/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "440px",
      md: "600px",
      lg: "768px",
      xl: "900px",
      xxl: "1240px",
    },

    extend: {
      cursor: {
        mincursor: "url(svg/cross.svg) 20 20, pointer",
        hovercursor: "url(svg/cross-fill.svg) 20 20, pointer",
      },

      colors: {
        grey: "#dcdcdc",
        green: "#CDFF7C",
        purple: "#654b96",
        orange: "#eb5a29",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
