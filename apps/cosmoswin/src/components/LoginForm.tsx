'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useUser } from '@repo/shared/contexts/UserContext';

const LoginForm = () => {
  const { login } = useUser();
  const router = useRouter();
  
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const success = login(username.trim());
    if (success) {
      router.push('/main');
    } else {
      setError('User not found');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        placeholder="Enter your username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginForm;
