'use client';

import { Container, Paper } from '@mui/material';

import LoginForm from '@repo/ui/src/components/LoginForm';

const CosmoswinLogin = () => (
  <Container maxWidth="sm" sx={{ minHeight:'calc(100svh - 64px)', pt: 20 }}>
    <Paper
      elevation={3}
      sx={{
        p: 4,
        borderRadius: 4,
        bgcolor: 'background.paper',
        boxShadow: '0 4px 20px rgba(128,0,255,0.2)',
      }}
    >
      <LoginForm
        title="Welcome to Cosmoswin"
        buttonStyles={{ background: 'linear-gradient(to right, purple, cyan)', borderRadius: 4 }}
      />
    </Paper>
  </Container>
);

export default CosmoswinLogin;
