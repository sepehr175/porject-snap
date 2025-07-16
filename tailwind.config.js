/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.html", "./src/**/*.html", "./public/**/*.html"],
  safelist: [
    'text-green_snap',
    'font-iran_Light',
    'font-iran_Bold',
    'bg-bg_dark1',
    'bg-bg_dark2',
    'text-text_nav',
    'h-70px',
    'h-90px',
    'w-170px'
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '840px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'iran_Bold': 'iran_Bold',
      'iran_Light': 'iran_Light',
    },
    extend: {
      fontSize: {
        clamp: "clamp(0.7rem, 1vw, 1rem)",
        clamp_intro: "clamp(1.5rem, 2vw, 2rem)",
        clamp_des: "clamp(1rem, 1.2vw, 2rem)",
        clamp_super_des: "clamp(0.9rem, 1vw, 2rem)",
      },
      colors: {
        green_snap: '#21aa58',
        text_nav: '#414141',
        bg_gray: '#f2f5f8',
        text_bg: '#404040',
        text_muted: '#eee',
        bg_muted: 'rgba(255,255,255,0.05)',
        bg_nav_res: 'rgba(0,0,0,0.5)',
        bg_dark1: '#242424',
        bg_dark2: '#000',
      },
      height: {
        '70px': '70px',
        '90px': '90px',
        '55px': '55px',
      },
      width: {
        '170px': '170px',
      }
    },
  },
  plugins: [],
}
