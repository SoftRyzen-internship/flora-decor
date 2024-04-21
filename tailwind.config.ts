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
      xl: '1400px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1399.97px' },
      notXL: { max: '1399.98px' },
    },

    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          sm: '20px',
          md: '42px',
          xl: '40px',
        },
      },

      fontFamily: {
        geologica: ['var(--font-geologica)'],
        mulish: ['var(--font-mulish)'],
      },

      colors: {
        main: '#224722',
        bgMain: '#FAF9F9',
        bgSecond: '#E7EDDD',
        description: '#527252',
        footerMain: '#FFF',
        footerSecond: '#BECAAA',
        subtitle: '#508050',
        inputRequired: '#87B487',
        placeholder: '#96A19A',
        button: '#FF9729',
        buttonIcon: '#FF752A',
        error: '#F00',
        btnHover: '#FFAD58',
        btnSecondHover: '#D8E3C4',
        btnSecondActive: '#BAC8A2',
        disabledBtn: '#C1C0C0',
        secondDisabledBtn: '#797979',
        backdropCol: 'rgba(48, 48, 54, 0.25)',
        activeLink: '#D5DDC9',
        border: '#8EA58E',
        subtitleMdCol: '#407040',
        footerColor: '#ABB999',
      },

      fontSize: {
        titleSm: [
          '38px',
          {
            lineHeight: '1.1',
            fontWeight: '600',
          },
        ],

        titleMd: [
          '50px',
          {
            lineHeight: '1.1',
            fontWeight: '600',
          },
        ],

        titleContactXl: [
          '35px',
          {
            lineHeight: '1.2',
            fontWeight: '600',
            letterSpacing: '-0.7px',
          },
        ],

        heroTitleSm: [
          '50px',
          {
            lineHeight: '0.9',
            fontWeight: '600',
          },
        ],

        heroTitleMd: [
          '70px',
          {
            lineHeight: '0.9',
            fontWeight: '600',
          },
        ],

        heroTitleXl: [
          '90px',
          {
            lineHeight: '0.9',
            fontWeight: '600',
          },
        ],

        subtitleMd: [
          '16px',
          {
            lineHeight: '1.4',
            fontWeight: '500',
            letterSpacing: '-0.32px',
          },
        ],
        heroButton: [
          '16px',
          {
            lineHeight: '1.5',
            fontWeight: '800',
            letterSpacing: '0.64',
          },
        ],
        subtitleXs: [
          '14px',
          {
            lineHeight: '1.4',
            fontWeight: '500',
            letterSpacing: '-0.28px',
          },
        ],

        titleAboutMd: [
          '25px',
          {
            lineHeight: '1.2',
            fontWeight: '600',
            letterSpacing: '-0.5px',
          },
        ],
        descriptionFontSize: [
          '18px',
          {
            lineHeight: '1.3',
            fontWeight: '500',
          },
        ],
        descriptionDesktop: [
          '24px',
          {
            lineHeight: '1.3',
            fontWeight: '500',
          },
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
