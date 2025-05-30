import { createTheme } from '@mui/material/styles';

const cosmoswinTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#7C3AED',
    },
    secondary: {
      main: '#06B6D4',
    },
    background: {
      default: '#f5f5ff',
      paper: '#ffffff',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Orbitron", sans-serif',
  },
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

export default cosmoswinTheme;
