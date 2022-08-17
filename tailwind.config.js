module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: {
        DEFAULT: "var(--black)",
      },
      white: {
        DEFAULT: "var(--white)",
      },
      secondary: {
        DEFAULT: "var(--secondary)",
      },
      error: {
        DEFAULT: "var(--error)",
      },
      success: {
        DEFAULT: "var(--success)",
      },
    },
    extend: {
      fontFamily: {
        "main-regular": ['"countach"', "regular"],
      },
      screens: {
        c1: "1366px",
        c2: "1440px",
        c3: "1536px",
        c4: "1600px",
        c5: "1920px",
        c6: "2560px",
        c7: "3440px",
        MacAir13: { raw: "(width: 1440px) and (max-height: 750px)" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
