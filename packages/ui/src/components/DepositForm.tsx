'use client';

import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';

import { useUser } from '../../../shared/contexts/UserContext';
import { BrandTypeEnum } from '../../../shared/types/common';

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
    <Box sx={{ minHeight: 'calc(100svh - 64px)' }}>
      <Container maxWidth="sm" sx={{ pt: 20 }}>
        <Paper
          elevation={isBetfinal ? 0 : 3}
          sx={{
            p: 4,
            borderRadius: isBetfinal ? 0 : 4,
            bgcolor: isBetfinal ? 'black' : 'background.paper',
            color: isBetfinal ? 'gold' : 'inherit',
            border: isBetfinal ? '1px solid gold' : undefined,
            boxShadow: isBetfinal ? undefined : '0 4px 20px rgba(128,0,255,0.2)',
          }}
        >
          <Typography variant="h5" mb={3}>
            💸 Make a Deposit
          </Typography>

          <TextField
            fullWidth
            type="number"
            label="Deposit Amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              if (error) setError('');
              if (success) setSuccess(false);
            }}
            error={!!error}
            helperText={error}
            sx={{
              mb: 2,
              ...(isBetfinal && {
                input: { color: 'gold' },
                label: { color: 'gold' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'gold' },
                  '&:hover fieldset': { borderColor: 'gold' },
                },
              }),
            }}
            inputProps={{ min: 0, step: 0.01 }}
          />

          <Box display="flex" gap={2}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleDeposit}
              disabled={amount.trim() === ''}
              sx={
                isBetfinal
                  ? {
                      bgcolor: 'gold',
                      color: 'black',
                      borderRadius: 0,
                      '&:hover': { bgcolor: '#d4af37' },
                      '&.Mui-disabled': {
                        bgcolor: 'rgba(255, 215, 0, 0.5)',
                        color: 'black',
                        opacity: 1,
                      },
                    }
                  : {
                      background: 'linear-gradient(to right, purple, cyan)',
                      borderRadius: 4,
                    }
              }
            >
              Deposit
            </Button>

            <Button variant="outlined" color="secondary" onClick={handleBack}>
              Back to Home
            </Button>
          </Box>

          {success && (
            <Typography color="success.main" mt={2}>
              Deposit successful! 🎉
            </Typography>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default DepositForm;
