/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cdark: '#070600',
        cgray: '#F7F7FF',
        cred: '#EA526F',
        cpurple: '#8C52FF',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
