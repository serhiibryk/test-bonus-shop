'use client';

import {
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { useUser } from '@repo/shared/contexts/UserContext';

const LoginPageContent = () => {
  const { login } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const success = login(username.trim());
    if (success) {
      const lang = pathname.split('/')[1] || 'en';
      router.push(`/${lang}/`);
    } else {
      setError('User not found');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 4,
          bgcolor: 'background.paper',
          boxShadow: '0 4px 20px rgba(128,0,255,0.2)',
        }}
      >
        <Typography variant="h4" mb={3} color="purple">
          Welcome to Cosmoswin
        </Typography>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{
            background: 'linear-gradient(to right, purple, cyan)',
            borderRadius: 4,
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
