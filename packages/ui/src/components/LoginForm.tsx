'use client';

import { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';

import { useUser } from '../../../shared/contexts/UserContext';
import { BrandTypeEnum } from '../../../shared/types/common';

interface LoginFormProps {
  buttonStyles?: object;
  textFieldStyles?: object;
  wrapperStyles?: object;
  title?: string;
  variant?: BrandTypeEnum;
}

const LoginForm = ({
  buttonStyles = {},
  textFieldStyles = {},
  wrapperStyles = {},
  title = 'Login',
}: LoginFormProps) => {
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
    <div style={wrapperStyles}>
      <Typography variant="h4" mb={3}>
        {title}
      </Typography>
      <TextField
        fullWidth
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ mb: 2, ...textFieldStyles }}
      />
      <Button fullWidth variant="contained" onClick={handleLogin} sx={buttonStyles}>
        Login
      </Button>
      {error && (
        <Typography color="error" mt={2}>
          {error}
        </Typography>
      )}
    </div>
  );
};

export default LoginForm;
