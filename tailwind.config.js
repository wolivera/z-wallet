module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        mobile: {
          min: "300px",
          max: "767px",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
