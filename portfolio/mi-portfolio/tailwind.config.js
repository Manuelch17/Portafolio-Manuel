/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js", "./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        acid: "#C8FF00",
        "acid-dim": "#A8D900",

        ink: "#0A0A0F",
        "ink-2": "#111118",
        "ink-3": "#1A1A24",
        "ink-4": "#22222E",

        silver: "#E8E8F0",
        muted: "#7A7A8C",

        paper: "#F6F7EF",
        "paper-2": "#ECEFE3",
        "paper-3": "#DFE4D4",

        graphite: "#111318",
        "graphite-2": "#242832",
        "graphite-muted": "#5E6472",

        mist: "#FFFFFF",
        line: "#D7DCCA",
      },
    },
  },

  plugins: [],
};
