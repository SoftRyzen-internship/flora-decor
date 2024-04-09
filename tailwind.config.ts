import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts, tsx, mdx}',
    './layout/**/*.{ts, tsx, mdx}',
    './sections/**/*.{ts, tsx, mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screen: {
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
        mulish: ['var(--font-geologica)'],
      },

      colors: {
        main: '#224722',
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
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
