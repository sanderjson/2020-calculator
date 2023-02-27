const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {},
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus"]
  },

  plugins: [],
};

module.exports = config;


