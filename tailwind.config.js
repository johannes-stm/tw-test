/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        "wm-black": "#201e1e",
        "wm-brown": "#b07141",
        "wm-beige": "#f7ede2",
        "wm-darkbrown": "#50211d",
        "wm-blue": "#00CED1",
        "wm-lightgray": "#4b5563",
        "wm-darkgray": "#1f2937",
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1026px', 
        xl: '1280px',
        '2xl': '1300px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1026px',
          xl: '1280px',
          '2xl': '1300px',
        },
      },
      scale: {
        '103': '1.03',
      },
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
  },
  plugins: [],
}

