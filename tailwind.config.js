/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-0": "#fff",
        "primary-buttons": "#00a991",
        gray: "#2a2a2a",
        "neutral-base": "#454545",
        darkslategray: "rgba(69, 69, 69, 0.09)",
        "neutral-base1": "#121212",
        "neutral-40": "#565656",
        "neutral-10": "#ccc",
        darkgray: "#ababab",
      },
      spacing: {},
      fontFamily: {
        "paragraph-large-regular": "'Hanken Grotesk'",
        "paragraph-large-medium": "Inter",
        impact: "Impact",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      lg: "18px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "11xl": "30px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
