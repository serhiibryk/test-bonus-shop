'use client';

import LoginForm from '@repo/ui/src/components/LoginForm';

import { PageContainer, StyledPaper } from '../styles/LoginPageContent.styles';

const LoginPageContent = () => (
  <PageContainer maxWidth="sm">
    <StyledPaper elevation={3}>
      <LoginForm
        title="Welcome to Cosmoswin"
        buttonStyles={{
          background: 'linear-gradient(to right, purple, cyan)',
          borderRadius: 4,
        }}
      />
    </StyledPaper>
  </PageContainer>
);

export default LoginPageContent;
