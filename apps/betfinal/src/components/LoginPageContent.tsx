'use client';

import { Container, Paper } from '@mui/material';

import LoginForm from '@repo/ui/src/components/LoginForm';

const BetfinalLogin = () => (
  <Container maxWidth="sm" sx={{ mt: 10 }}>
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: 0,
        bgcolor: 'black',
        color: 'gold',
        border: '1px solid gold',
      }}
    >
      <LoginForm
        title="Welcome to Betfinal"
        buttonStyles={{
          bgcolor: 'gold',
          color: 'black',
          borderRadius: 0,
          '&:hover': { bgcolor: '#d4af37' },
        }}
        textFieldStyles={{
          input: { color: 'gold' },
          label: { color: 'gold' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'gold' },
            '&:hover fieldset': { borderColor: 'gold' },
          },
        }}
      />
    </Paper>
  </Container>
);

export default BetfinalLogin;
