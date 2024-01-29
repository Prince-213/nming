const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts,./node_modules/flowbite/**/*.js}",
  ],

  plugins: [require("flowbite/plugin")],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: "#FFF5F2",
          100: "#FFF1EE",
          200: "#FFE4DE",
          300: "#FFD5CC",
          400: "#FFBCAD",
          500: "#FE795D",
          600: "#EF562F",
          700: "#EB4F27",
          800: "#CC4522",
          900: "#A5371B",
        },
      },

      backgroundImage: {
        'engineer': "url('./src/lib/assets/WP/Picture1.jpg')",
        'engine': "url('./src/lib/assets/pexels-mike-bird-190574.jpg')",
        'site': "url('./src/lib/assets/pexels-pixabay-33192.jpg')",
        'plan': "url('./src/lib/assets/WP/Picture3.jpg')",
      }
    },
  },
};

module.exports = config;
