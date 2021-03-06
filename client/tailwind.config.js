module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        purp: "#b5A9FF",
        accent: {
          100: "#B5A9FF",
          200: "#BBB4E5",
        },
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        display: ["Metropolis", "Oswald"],
        mono: ["ui-monospace", "SFMono-Regular"],
      },
    },
  },
  plugins: [],
};
