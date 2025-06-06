'use client';

import { FC, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { Box } from '@mui/material';

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
import LoginRequiredMessage from './LoginRequiredMessage';

interface DepositFormProps {
  brand: BrandTypeEnum;
}

const DepositForm: FC<DepositFormProps> = ({ brand }) => {
  const { user, updateUser } = useUser();
  const { i18n, t } = useTranslation();
  const router = useRouter();

  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const isBetfinal = useMemo(() => brand === BrandTypeEnum.betfinal, [brand]);
  const redirectBase = `/${i18n.language}`;

  const handleBack = useCallback(() => {
    router.push(redirectBase);
  }, [router, redirectBase]);

  const handleAmountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAmount(e.target.value);
      if (error) setError('');
      if (success) setSuccess(false);
    },
    [error, success]
  );

  const handleDeposit = useCallback(() => {
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      setError('Please enter a valid amount.');
      setSuccess(false);
      return;
    }

    if (user) {
      updateUser({
        ...user,
        depositCount: user.depositCount + 1,
        currentBalance: parseFloat((user.currentBalance + numericAmount).toFixed(2)),
      });
    }

    setSuccess(true);
    setError('');
    setAmount('');

    setTimeout(() => setSuccess(false), 10000);
  }, [amount, user, updateUser]);

  if (!user) return <LoginRequiredMessage message="Please log in to make a deposit." />;

  return (
    <PageWrapper>
      <StyledContainer maxWidth="sm">
        <StyledPaper isBetfinal={isBetfinal}>
          <Title variant="h5">💸 {t('Make a Deposit')}</Title>

          <StyledTextField
            fullWidth
            type="number"
            label={t('Deposit Amount')}
            value={amount}
            isBetfinal={isBetfinal}
            onChange={handleAmountChange}
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
              {t('Deposit')}
            </DepositButton>

            <BackButton variant="outlined" color="secondary" onClick={handleBack}>
              {t('Back to Home')}
            </BackButton>
          </Box>

          {success && <SuccessText>{t('Deposit successful! 🎉')}</SuccessText>}
        </StyledPaper>
      </StyledContainer>
    </PageWrapper>
  );
};

export default DepositForm;
