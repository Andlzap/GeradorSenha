/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        slideLeftRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideRightLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        appearFromDepth: {
          '0%': { transform: 'scale(0.5) translateZ(-50px)', opacity: 0 },
          '100%': { transform: 'scale(1) translateZ(0)', opacity: 1 },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
        slideLeftRight: 'slideLeftRight 0.3s ease-out',
        slideRightLeft: 'slideRightLeft 0.3s ease-out',
        appearFromDepth: 'appearFromDepth 0.5s ease-out',
      },
    },
  },
  plugins: [],
}

