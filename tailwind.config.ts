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

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXL: { max: '1279.98px' },
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
      },

      fontSize: {
        titleSm: [
          '38px',
          {
            lineHeight: '1.1',
            fontWeight: '600',
          },
        ],

        titleContactSm: [
          '20px',
          {
            lineHeight: '1.2',
            fontWeight: '600',
            letterSpacing: '-0.4px',
          },
        ],

        titleMd: [
          '50px',
          {
            lineHeight: '1.1',
            fontWeight: '600',
          },
        ],

        titleContactMd: [
          '30px',
          {
            lineHeight: '1.2',
            fontWeight: '600',
            letterSpacing: '-0.6px',
          },
        ],

        titleXl: [
          '60px',
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

        subtitleSm: [
          '14px',
          {
            lineHeight: '1.4',
            fontWeight: '500',
            letterSpacing: '-0.28px',
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
            letterSpacing: '0.64px',
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
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
