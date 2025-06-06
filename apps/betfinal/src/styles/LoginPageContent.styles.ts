import { Box, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageWrapper = styled(Box)({
  minHeight: 'calc(100svh - 64px)',
});

export const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(20),
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: 0,
  backgroundColor: 'black',
  color: 'gold',
  border: '1px solid gold',
}));
