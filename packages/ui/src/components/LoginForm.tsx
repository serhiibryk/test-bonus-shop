'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import { useUser } from '../../../shared/contexts/UserContext';
import { BrandTypeEnum } from '../../../shared/types/common';

import {
  LoginWrapper,
  Title,
  StyledTextField,
  StyledButton,
  ErrorText,
} from '../styles/LoginForm.styles';

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
    <LoginWrapper sx={wrapperStyles}>
      <Title variant="h4">{title}</Title>

      <StyledTextField
        fullWidth
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={textFieldStyles}
      />

      <StyledButton
        fullWidth
        variant="contained"
        onClick={handleLogin}
        sx={buttonStyles}
      >
        Login
      </StyledButton>

      {error && <ErrorText>{error}</ErrorText>}
    </LoginWrapper>
  );
};

export default LoginForm;
