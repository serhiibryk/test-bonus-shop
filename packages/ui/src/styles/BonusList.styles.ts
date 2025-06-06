import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageWrapper = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(12.5)} ${theme.spacing(3)}`,
}));

export const TopRow = styled(Stack)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const BalanceBox = styled(Box)({});

export const BalanceText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export const BonusTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));
