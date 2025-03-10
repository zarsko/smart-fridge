/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#FFA000',
        danger: '#F44336',
        warning: '#FF9800',
        info: '#2196F3',
        light: '#F5F5F5',
        dark: '#212121',
      },
    },
  },
  plugins: [],
}; 