import { styled } from '@mui/material/styles';
import { Container, Paper } from '@mui/material';

export const PageContainer = styled(Container)(({ theme }) => ({
  minHeight: 'calc(100svh - 64px)',
  paddingTop: theme.spacing(20),
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 4px 20px rgba(128, 0, 255, 0.2)',
}));
