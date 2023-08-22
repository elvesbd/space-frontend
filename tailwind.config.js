/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          0: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#868E96',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },

        red: {
          50: '#FFF5F5',
          100: '#FFE3E3',
          200: '#FFC9C9',
          300: '#FFA8A8',
          400: '#FF8787',
          500: '#FF6B6B',
          600: '#FA5252',
          700: '#F03E3E',
          800: '#E03131',
          900: '#C92A2A',
        },

        blue: {
          50: '#E7F5FF',
          100: '#D0EBFF',
          200: '#A5D8FF',
          300: '#74C0FC',
          400: '#4DABF7',
          500: '#339AF0',
          600: '#228BE6',
          700: '#1C7ED6',
          800: '#1971C2',
          900: '#1864AB',
        },

        green: {
          50: '#EBFBEE',
          100: '#D3F9D8',
          200: '#B2F2BB',
          300: '#8CE99A',
          400: '#69DB7C',
          500: '#51CF66',
          600: '#40C057',
          700: '#37B24D',
          800: '#2F9E44',
          900: '#2B8A3E',
        },

        lime: {
          50: '#F4FCE3',
          100: '#E9FAC8',
          200: '#D8F5A2',
          300: '#C0EB75',
          400: '#A9E34B',
          500: '#94D82D',
          600: '#82C91E',
          700: '#74B816',
          800: '#66A80F',
          900: '#5C940D',
        },

        yellow: {
          50: '#FFF9DB',
          100: '#FFF3BF',
          200: '#FFEC99',
          300: '#FFE066',
          400: '#FFD43B',
          500: '#FCC419',
          600: '#FAB005',
          700: '#F59F00',
          800: '#F08C00',
          900: '#E67700',
        },

        orange: {
          50: '#FFF4E6',
          100: '#FFE8CC',
          200: '#FFD8A8',
          300: '#FFC078',
          400: '#FFA94D',
          500: '#FF922B',
          600: '#FD7E14',
          700: '#F76707',
          800: '#E8590C',
          900: '#D9480F',
        },
      },
      keyframes: {
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        overLayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translateY(-50%, -48%) scale(0,96)' },
          to: { opacity: 1, transform: 'translateY(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        'slide-up-and-fade': 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-and-fade': 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'over-lay-show': 'overLayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'content-show': 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
