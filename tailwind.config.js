/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        neon: "0 0 8px theme('colors.purple.400') , 0 0 20px theme('colors.purple.900')",
      },
      fontSize: {
        '2xs': '.65rem',
        'xsm': '.875rem',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'mono': ['Inconsolata', 'monospace'],
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors:{
        'cgreen':'#039379'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        // Add as many as you need
      }

    },
  },
  plugins: [],
}

