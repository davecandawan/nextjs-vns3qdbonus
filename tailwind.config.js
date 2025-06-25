/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  corePlugins: {
    preflight: true,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        custom: {
          green: '#2afe4e',
        },
        primary: {
          DEFAULT: '#0a0a0a',
          light: '#333333',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#f16500',
          light: '#ff8c42',
          dark: '#b84d00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Add other plugins here if needed
  ],
}
