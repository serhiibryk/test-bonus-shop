'use client';

import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { Typography, Box } from '@mui/material';

import { useUser } from '../../../shared/contexts/UserContext';
import { BrandTypeEnum } from '../../../shared/types/common';
import {
  PageWrapper,
  StyledContainer,
  StyledPaper,
  Title,
  StyledTextField,
  DepositButton,
  BackButton,
  SuccessText,
} from '../styles/DepositForm.styles';

interface DepositFormProps {
  brand: BrandTypeEnum;
}

const DepositForm: FC<DepositFormProps> = ({ brand }) => {
  const { user, updateUser } = useUser();
  const { i18n } = useTranslation();
  const router = useRouter();

  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const isBetfinal = brand === BrandTypeEnum.betfinal;

  if (!user) return <Typography>Please log in to make a deposit.</Typography>;

  const handleDeposit = () => {
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      setError('Please enter a valid amount.');
      setSuccess(false);
      return;
    }

    updateUser({
      ...user,
      depositCount: user.depositCount + 1,
      currentBalance: parseFloat((user.currentBalance + numericAmount).toFixed(2)),
    });

    setSuccess(true);
    setError('');
    setAmount('');

    setTimeout(() => setSuccess(false), 10000);
  };

  const handleBack = () => {
    router.push(`/${i18n.language}`);
  };

  return (
    <PageWrapper>
      <StyledContainer maxWidth="sm">
        <StyledPaper isBetfinal={isBetfinal}>
          <Title variant="h5">💸 Make a Deposit</Title>

          <StyledTextField
            fullWidth
            type="number"
            label="Deposit Amount"
            value={amount}
            isBetfinal={isBetfinal}
            onChange={(e) => {
              setAmount(e.target.value);
              if (error) setError('');
              if (success) setSuccess(false);
            }}
            error={!!error}
            helperText={error}
            inputProps={{ min: 0, step: 0.01 }}
          />

          <Box display="flex" gap={2}>
            <DepositButton
              isBetfinal={isBetfinal}
              variant="contained"
              onClick={handleDeposit}
              disabled={amount.trim() === ''}
            >
              Deposit
            </DepositButton>

            <BackButton variant="outlined" color="secondary" onClick={handleBack}>
              Back to Home
            </BackButton>
          </Box>

          {success && <SuccessText>Deposit successful! 🎉</SuccessText>}
        </StyledPaper>
      </StyledContainer>
    </PageWrapper>
  );
};

export default DepositForm;
