import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    darkGrey: string;
    background: string;
    lightGrey: string;
  }
}

export const theme = extendTheme({
  typography: {
    allVariants: {
      fontFamily: 'sans-serif',
      textTransform: 'none',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '17px',
    },
    button: {
      textTransform: 'none',
    },
  },
  colorSchemes: {
    light: {
      palette: {
        common: {
          black: '#000',
          white: '#fff',
          lightGrey: '#474747',
          darkGrey: '#555',
          background: '#f5f6fe',
        },
        primary: {
          main: '#4285F4',
        },
        secondary: {
          main: '#27C59A',
        },
      },
    },
  },
});

export type Theme = typeof theme;
