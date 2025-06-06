import { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface BonusCardProps {
  title: string;
  description?: string;
}

const BonusCard: FC<BonusCardProps> = ({ title, description }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default BonusCard;
