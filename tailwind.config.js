module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      maxHeight: {
        128: "32rem",
      },
      spacing: {
        "screen/2": "75vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
