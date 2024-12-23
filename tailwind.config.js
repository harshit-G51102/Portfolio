/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glow: 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(56, 189, 248, 0.5)' },
          '50%': { textShadow: '0 0 40px rgba(56, 189, 248, 1)' },
          '0%, 100%': {
            filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.5))',
          },
          '50%': {
            filter: 'drop-shadow(0 0 40px rgba(56, 189, 248, 1))',
          },
        },
      },
    },
  },
  plugins: [],
};
