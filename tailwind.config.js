/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors:{
        "wm-black": "#201e1e",
        "wm-brown": "#b07141",
        "wm-beige": "#e7dfc8 ",
        "wm-darkbrown": "#50211d",
        "wm-blue": "#00CED1",
      },
      container: {
        center: true, // Optional: Container wird zentriert
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1300px', // Breakpoint 1280px wird auf 1300px geändert
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
    container: {
      center:true,
    }
  },
  plugins: [],
}

