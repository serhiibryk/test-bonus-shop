'use client';

import { FC, useCallback, useMemo, useState } from 'react';
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

const LoginForm: FC<LoginFormProps> = ({
  buttonStyles = {},
  textFieldStyles = {},
  wrapperStyles = {},
  title = 'Login',
}) => {
  const { login } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const lang = useMemo(() => pathname.split('/')[1] || 'en', [pathname]);

  const handleUsernameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (error) setError('');
  }, [error]);

  const handleLogin = useCallback(() => {
    const trimmed = username.trim();
    if (!trimmed.length) {
      setError('Please enter your username');
      return;
    }

    const success = login(trimmed);

    if (success) {
      router.push(`/${lang}/`);
    } else {
      setError('User not found');
    }
  }, [username, login, router, lang]);

  return (
    <LoginWrapper sx={wrapperStyles}>
      <Title variant="h4">{title}</Title>

      <StyledTextField
        fullWidth
        label="Username"
        variant="outlined"
        value={username}
        onChange={handleUsernameChange}
        sx={textFieldStyles}
      />

      <StyledButton
        fullWidth
        variant="contained"
        onClick={handleLogin}
        sx={buttonStyles}
        disabled={!username.trim()}
      >
        Login
      </StyledButton>

      {error && <ErrorText>{error}</ErrorText>}
    </LoginWrapper>
  );
};

export default LoginForm;
