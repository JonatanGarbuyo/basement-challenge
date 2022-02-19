module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        "100%": "100%",
      },
      borderWidth: {
        1: "1px",
      },
      inset: {
        "-2": "-2px",
        2: "2px",
      },
      spacing: {
        "4px": "4px",
        "24px": "24px",
        "440px": "440px",
        "577px": "577px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
