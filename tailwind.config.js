module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'theme-orange': '#ffa427',
        'theme-red': '#fd3607',
        'theme-brown': '#ab5f12',
        'theme-green': '#44950a',
      },
    },
  },
  plugins: [],
}
