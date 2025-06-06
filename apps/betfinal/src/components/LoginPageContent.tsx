'use client';

import LoginForm from '@repo/ui/src/components/LoginForm';

import {
  PageWrapper,
  StyledContainer,
  StyledPaper,
} from '../styles/LoginPageContent.styles';

const LoginPageContent = () => (
  <PageWrapper>
    <StyledContainer maxWidth="sm">
      <StyledPaper elevation={0}>
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
      </StyledPaper>
    </StyledContainer>
  </PageWrapper>
);

export default LoginPageContent;
