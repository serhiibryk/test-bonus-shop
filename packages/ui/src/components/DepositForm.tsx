'use client';

import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { Box, Button, TextField, Typography } from '@mui/material';

import { useUser } from '../../../shared/contexts/UserContext';

const DepositForm: FC = () => {
  const { user, updateUser } = useUser();
  const { i18n } = useTranslation();
  const router = useRouter();

  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  if (!user) return <Typography>Please log in to make a deposit.</Typography>;

  const handleDeposit = () => {
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      setError('Please enter a valid amount.');
      setSuccess(false);
      return;
    }

    const updatedUser = {
      ...user,
      depositCount: user.depositCount + 1,
      currentBalance: parseFloat((user.currentBalance + numericAmount).toFixed(2)),
    };

    updateUser(updatedUser);
    setSuccess(true);
    setError('');
    setAmount('');

    setTimeout(() => setSuccess(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);

    if (error) setError('');
    if (success) setSuccess(false);
  };

  const handleBack = () => {
    router.push(`/${i18n.language}`);
  };

  return (
    <Box sx={{ padding: '100px 15px', maxWidth: 400, margin: '0 auto' }}>
      <Typography variant="h5" mb={2}>💸 Make a Deposit</Typography>

      <TextField
        fullWidth
        type="number"
        label="Deposit Amount"
        value={amount}
        onChange={handleInputChange}
        error={!!error}
        helperText={error}
        sx={{ marginBottom: 2 }}
        inputProps={{ min: 0, step: 0.01 }}
      />

      <Box display="flex" gap={2}>
        <Button
          variant="contained"
          onClick={handleDeposit}
          disabled={amount.trim() === ''}
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
    </Box>
  );
};

export default DepositForm;
