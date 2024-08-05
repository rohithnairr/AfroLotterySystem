module.exports = {
  content: [
    './node_modules/flowbite-react/lib/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',       // Include files in the app directory
    './pages/**/*.{js,ts,jsx,tsx}',     // Include files in the pages directory
    './components/**/*.{js,ts,jsx,tsx}' // Include files in the components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};