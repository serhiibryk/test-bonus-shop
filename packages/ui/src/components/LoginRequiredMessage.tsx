'use client';

import { FC } from 'react';
import { Typography } from '@mui/material';

import { PageWrapper } from '../styles/BonusList.styles';

interface LoginRequiredMessageProps {
  direction?: 'ltr' | 'rtl';
  message?: string;
}

const LoginRequiredMessage: FC<LoginRequiredMessageProps> = ({
  direction = 'ltr',
  message = 'Please log in to view your bonuses.',
}) => (
  <PageWrapper sx={{ direction }}>
    <Typography variant="h6" color="text.secondary">
      {message}
    </Typography>
  </PageWrapper>
);

export default LoginRequiredMessage;
