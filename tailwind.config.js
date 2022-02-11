module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          light: '#9990FF',
          base: '#6B4EFF',
        },
        sky: {
          dark: '#979C9E',
          lightest: '#F7F9FA',
        },
        ink: {
          dark: '#303437',
          darkest: '#090A0A',
        },
        green: {
          darkest: '#198155',
          base: '#23C16B',
          light: '#4CD471',
        },
        yellow: {
          darkest: '#A05E03',
          base: '#FFB323',
        },
      },
      animation: {
        'fade-in': 'fade-in 500ms',
        'fade-out': 'fade-out 500ms',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
    plugins: [],
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
}
