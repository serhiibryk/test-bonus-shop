import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBonusCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'isEligible' && prop !== 'isBetfinal',
})<{
  isEligible: boolean;
  isBetfinal: boolean;
}>(({ theme, isEligible, isBetfinal }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: isBetfinal ? 0 : theme.shape.borderRadius,
  opacity: isEligible ? 1 : 0.6,
  border: isEligible
    ? `2px solid ${theme.palette.success.main}`
    : `1px dashed ${theme.palette.grey[400]}`,
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(5)}`,
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));
