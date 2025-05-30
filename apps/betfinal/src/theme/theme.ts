import { createTheme } from '@mui/material/styles';

const betfinalTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFD700',
    },
    background: {
      default: '#ffffff',
      paper: '#f9f9f9',
    },
    text: {
      primary: '#000000',
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: '"Tajawal", sans-serif',
  },
  direction: 'ltr',
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

export default betfinalTheme;
