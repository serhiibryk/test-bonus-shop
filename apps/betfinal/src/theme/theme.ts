import { createTheme } from '@mui/material/styles';

const betfinalTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFD700',
    },
    background: {
      default: '#0a0a0a',
      paper: '#e8b534',
    },
    text: {
      primary: '#ffffff',
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
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#0a0a0a',
          color: '#FFD700',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#1a1a1a',
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#222',
          },
        },
      },
    },
  },
});

export default betfinalTheme;
