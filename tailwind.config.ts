import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',

      'linkblue': '#1d4a79',
      'blue': '#255d98', 
      'subblue': '#7cacd1',
      'lightblue': '#8fb8d8',

      'dark': '#151718',
      'gray': '#2b2c2d',
      'lightgray': '#555555',
      'light': '#f3f9fb',

      
    },
    extend: {
      gridTemplateAreas: {
        'rootLayout': [
          'logo header',
          'nav main',
          'nav footer',
        ],

        'subLayout': [
          'main aside',
        ],
        'mobileLayout': [
          'logo',
          'header',
          'main',
          'footer',

        ],
      },
      gridTemplateColumns: {
        'rootLayout': 'auto 1fr',
        'subLayout': '1fr auto',
        'mobileLayout': '1fr',

      },
      gridTemplateRows: {
        'rootLayout': 'auto 1fr auto',
        'subLayout': '1fr',
        'mobileLayout': 'auto auto 1fr 56px',

      },
      fontFamily: {
        'exo2': ['exo2'],
        'bebasLight': ['bebasLight'],
        'bebasRegular': ['bebasRegular'],
      },
      backgroundImage: {
        'iconMenu' : "url('/icons/footer/menu.svg')",
        'iconMenuActive' : "url('/icons/footer/menu_active.svg')",
        'iconEvents' : "url('/icons/footer/events.svg')",
        'iconEventsActive' : "url('/icons/footer/events_active.svg')",
        'iconHome' : "url('/icons/footer/home.svg')",
        'iconHomeActive' : "url('/icons/footer/home_active.svg')",
        'iconPodium' : "url('/icons/footer/podium.svg')",
        'iconPodiumActive' : "url('/icons/footer/podium_active.svg')",

        'iconUser' : "url('/icons/footer/user.svg')",







      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ]};
export default config;
