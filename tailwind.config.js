/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
      },
      keyframes: {
        scaleUpDown: {
          '0%, 100%': { transform: 'scale(1)' }, // Original size
          '50%': { transform: 'scale(1.1)' },   // Slightly bigger
        },
      },
      animation: {
        scaleUpDown: 'scaleUpDown 2s infinite', // 2s duration, infinite repeat
      },
    },

  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        'html': {
          fontSize: '14px', // Default for small screens
        },
        '@screen lg': {
          'html': {
            fontSize: '16px', // Larger screens (e.g., 16px = 1rem)
          },
        },
      });
    },
  ],
}

