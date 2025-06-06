import { Box, Container, Paper, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageWrapper = styled(Box)({
  minHeight: 'calc(100svh - 64px)',
});

export const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(20),
}));

export const StyledPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isBetfinal',
})<{ isBetfinal: boolean }>(({ theme, isBetfinal }) => ({
  padding: theme.spacing(4),
  borderRadius: isBetfinal ? 0 : theme.shape.borderRadius,
  backgroundColor: isBetfinal ? 'black' : theme.palette.background.paper,
  color: isBetfinal ? 'gold' : 'inherit',
  border: isBetfinal ? '1px solid gold' : undefined,
  boxShadow: isBetfinal ? 'none' : '0 4px 20px rgba(128,0,255,0.2)',
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'isBetfinal',
})<{ isBetfinal: boolean }>(({ theme, isBetfinal }) => ({
  marginBottom: theme.spacing(2),
  ...(isBetfinal && {
    '& input': {
      color: 'gold',
    },
    '& label': {
      color: 'gold',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'gold' },
      '&:hover fieldset': { borderColor: 'gold' },
    },
  }),
}));

export const DepositButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isBetfinal',
})<{ isBetfinal: boolean }>(({ theme, isBetfinal }) => ({
  flex: 1,
  ...(isBetfinal
    ? {
        backgroundColor: 'gold',
        color: 'black',
        borderRadius: 0,
        '&:hover': { backgroundColor: '#d4af37' },
        '&.Mui-disabled': {
          backgroundColor: 'rgba(255, 215, 0, 0.5)',
          color: 'black',
          opacity: 1,
        },
      }
    : {
        background: 'linear-gradient(to right, purple, cyan)',
        borderRadius: theme.shape.borderRadius,
      }),
}));

export const BackButton = styled(Button)(() => ({
  flex: 1,
}));

export const SuccessText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.success.main,
}));
