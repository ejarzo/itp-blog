import Typography from 'typography';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Inconsolata',
      styles: ['400', '700'],
    },
    {
      name: 'Source Serif Pro',
      styles: ['400', '700'],
    },
  ],
  baseLineHeight: 1.666,
  baseFontSize: '18px',
  bodyFontFamily: ['Source Serif Pro', 'serif'],
  headerFontFamily: ['Inconsolata', 'monospace'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    ...styles,
    small: {
      fontFamily: 'Inconsolata',
    },
    a: {
      fontFamily: 'Inconsolata',
    },
    'p a': {
      fontFamily: 'inherit',
    },
  }),
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
