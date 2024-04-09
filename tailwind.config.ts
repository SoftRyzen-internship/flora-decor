// import type { Config } from 'tailwindcss';

// const config: Config = {
//   content: [
//     './app/**/*.{ts, tsx, mdx}',
//     './layout/**/*.{ts, tsx, mdx}',
//     './sections/**/*.{ts, tsx, mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     screen: {
//       sm: '480px',
//       md: '768px',
//       xl: '1280px',

//       smOnly: { max: '767.98px' },
//       mdOnly: { min: '768px', max: '1279.98px' },
//       notXL: { max: '1279.98px' },
//     },

//     extend: {
//       container: {
//         center: true,
//         padding: {
//           DEFAULT: '20px',
//           sm: '20px',
//           md: '42px',
//           xl: '60px',
//         },
//       },

//       fontFamily: {
//         geologica: ['var(--font-geologica)'],
//       },

//       colors: {
//         main: '#224722',
//       },

//       fontSize: {
//         titleSm: [
//           '38px',
//           {
//             lineHeight: '1.1',
//             fontWeight: '600',
//           },
//         ],
//         titleContactSm: [
//           '20px',
//           {
//             lineHeight: '1.2',
//             fontWeight: '600',
//             letterSpacing: '-0.4px',
//           },
//         ],
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './layout/**/*.{ts,tsx,mdx}',
    './sections/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
    },

    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          sm: '20px',
          md: '42px',
          xl: '60px',
        },
      },
      fontFamily: {
        geologica: ['var(--font-geologica)'],
        mulish: ['var(--font-mulish)'],
      },
      colors: {
        accent: '#0838C1',
        accentHover: '#062B93',
        accentPressed: '#041C62',
        customBackground: '#F3F6FB',
        strokeCol: '#AAB8DD',
        text01: '#001D44',
        text02: '#445066',
        text03: '#AFB4BE',
        errorCol: '#D40000',
        inactive: '#E6E6E6',
        inactiveText: '#999999',
        swiperBtn: '#C8D4F3',
        swiperBtnHover: '#ABBEED',
        swiperBtnPress: '#819DE4',
        inputBg: '#E7ECF9',
        inputBorder: '#AAB8DD',
        imgBg: '#84A0E6',
        inputDefaultBg: '#F6F7F9',
        backdropCol: 'rgba(0, 0, 0, 0.50)',
      },
      boxShadow: {
        custom: ' 0px 0px 24px 0px rgba(2, 12, 41, 0.10)',
      },
      borderWidth: {
        inputBorderW: '3px',
      },
      fontSize: {
        xs: [
          '14px',
          {
            lineHeight: '1.3',
            fontWeight: '400',
          },
        ],
        sm: [
          '16px',
          {
            lineHeight: '1.3',
            fontWeight: '400',
          },
        ],
        base: [
          '18px',
          {
            lineHeight: '1.5',
            fontWeight: '700',
          },
        ],
        lg: [
          '20px',
          {
            lineHeight: '1.3',
            fontWeight: '500',
          },
        ],
        xl: [
          '22px',
          {
            lineHeight: '1.15',
            fontWeight: '500',
          },
        ],
        '2xl': [
          '24px',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        '3xl': [
          '28px',
          {
            lineHeight: '1',
            fontWeight: '600',
          },
        ],
        '4xl': [
          '40px',
          {
            lineHeight: '1',
            fontWeight: '700',
          },
        ],
        '5xl': [
          '48px',
          {
            lineHeight: '1',
            fontWeight: '600',
          },
        ],
        '6xl': [
          '78px',
          {
            lineHeight: '1',
            fontWeight: '700',
          },
        ],
      },
      padding: {
        'py-15': '60px 0 60px 0',
        'py-25': '100px 0 100px 0',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
