/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0a1f44", deep: "#06132b", mid: "#102a55" },
        medical: { DEFAULT: "#1466b8", bright: "#2b8fe0" },
        emerald: { DEFAULT: "#10806a", bright: "#16a085" },
        gold: { DEFAULT: "#c9a24b", soft: "#e2c987" },
        paper: { DEFAULT: "#f6f7f9", warm: "#eef1f4" },
        ink: "#0d1b2e",
        slate: { DEFAULT: "#5b6878" },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        sm: "0 2px 10px rgba(10,31,68,0.06)",
        md: "0 14px 40px rgba(10,31,68,0.10)",
        lg: "0 30px 70px rgba(10,31,68,0.18)",
      },
      maxWidth: { wrap: "1240px" },
    },
  },
  plugins: [],
};
