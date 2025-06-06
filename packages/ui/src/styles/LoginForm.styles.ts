import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LoginWrapper = styled(Box)(() => ({
  width: '100%',
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
}));

export const ErrorText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.error.main,
}));
