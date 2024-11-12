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

      'red': '#982525',
      'green': '#25984b',
      'yellow': '#d2ed1f',

      'summerblue': '#0d1f2d',
      'summerbluelight': '#193d5e',
      'winterlight': '#e5f2fe',
      'wintergray': '#b0c3d5',
      'wintedark': '#183b62',
      'winterlightblue': '#4dbbff',


      
    },
    extend: {
      gridTemplateAreas: {
        'rootLayout': [
          'logo header header',
          'sidebar main aside',
          'sidebar footer footer',

        ],

        'mobileLayout': [
          'logo',
          'header',
          'main',
          'footer',

        ],
      },
      gridTemplateColumns: {
        'rootLayout': 'auto 1fr auto',
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
        // footer icons
        'iconMenu' : "url('/icons/footer/menu.svg')",
        'iconMenuActive' : "url('/icons/footer/menu_active.svg')",
        'iconEvents' : "url('/icons/footer/events.svg')",
        'iconEventsActive' : "url('/icons/footer/events_active.svg')",
        'iconHome' : "url('/icons/footer/home.svg')",
        'iconHomeActive' : "url('/icons/footer/home_active.svg')",
        'iconPodium' : "url('/icons/footer/podium.svg')",
        'iconPodiumActive' : "url('/icons/footer/podium_active.svg')",
        'iconUser' : "url('/icons/footer/user.svg')",
        'iconUserActive' : "url('/icons/footer/user_active.svg')",

        // header icons
        'iconSearch' : "url('/icons/header/search.svg')",
        'iconSearchActive' : "url('/icons/header/search_active.svg')",
        'iconMail' : "url('/icons/header/mail.svg')",
        'iconMailActive' : "url('/icons/header/mail_active.svg')",

        // buttons
        'iconMore' : "url('/icons/buttons/more.svg')",
        'iconStream' : "url('/icons/buttons/stream.svg')",

        //
        'loading' : "url('/layout/loading.svg')",

        //
        'winterCamp' : "url('/img/banners/winter-camp/bg.svg')",










      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ]};
export default config;
