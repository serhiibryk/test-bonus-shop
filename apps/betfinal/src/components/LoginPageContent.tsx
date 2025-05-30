'use client';

import {
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@repo/shared/contexts/UserContext';

const LoginPageContent = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const { login } = useUser();
  const router = useRouter();

  const handleLogin = () => {
    const success = login(username.trim());
    if (success) {
      router.push('/main');
    } else {
      setError('User not found');
    }
  };

  return (
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
        <Typography variant="h4" mb={3}>
          Welcome to Betfinal
        </Typography>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            mb: 2,
            input: { color: 'gold' },
            label: { color: 'gold' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'gold' },
              '&:hover fieldset': { borderColor: 'gold' },
            },
          }}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: 'gold',
            color: 'black',
            borderRadius: 0,
            '&:hover': { bgcolor: '#d4af37' },
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
        {error && (
          <Typography color="error" mt={2}>
            {error}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default LoginPageContent;
