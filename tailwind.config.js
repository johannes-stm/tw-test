/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors:{
        "wm-black": "#201e1e",
        "wm-brown": "#b07141",
        "wm-beige": "#e7dfc8",
        "wm-darkbrown": "#50211d",
        "wm-blue": "#00CED1",
      }
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
    container: {
      center:true,
    }
  },
  plugins: [],
}
