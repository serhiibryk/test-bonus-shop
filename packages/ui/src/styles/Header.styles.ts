import { AppBar, Box, Select, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  minHeight: theme.spacing(8),
  borderBottom: `1px solid ${theme.palette.primary.main}`,
}));

export const LeftSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const RightSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const BrandName = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const Username = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const LanguageSelect = styled(Select<string>)(({ theme }) => ({
  minWidth: theme.spacing(10),
}));
