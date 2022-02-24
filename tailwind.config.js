const plugin = require("tailwindcss/plugin");

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
  plugins: [
    plugin(function ({addUtilities}) {
      // Add your custom styles here
      addUtilities({
        ".shadowText-w": {
          "text-shadow": "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
        },
        ".backgroundGradient": {
          background: "linear-gradient(360deg, #1D1D1D 0%, rgba(21, 21, 21, 0) 100%)",
        },
      });
    }),
  ],
};
