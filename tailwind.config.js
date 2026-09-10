/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0D0D0F',
        panel: '#18181C',
        panel2: '#1F1F25',
        grey: {
          DEFAULT: '#9C9CA8',
          light: '#E4E3E8',
          dim: '#5B5B66',
        },
        pink: {
          DEFAULT: '#FF6FB0',
          soft: '#FFC8E4',
          deep: '#E84393',
        },
        turq: {
          DEFAULT: '#37E8CE',
          dim: '#1FA895',
        },
      },
      fontFamily: {
        display: ['"Unbounded"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
        pixel: ['"VT323"', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(6deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(14px) rotate(-4deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        popIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        marquee: 'marquee 22s linear infinite',
        blink: 'blink 1s step-start infinite',
        popIn: 'popIn 0.25s ease-out',
      },
    },
  },
  plugins: [],
}
