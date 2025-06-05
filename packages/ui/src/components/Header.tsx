'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AppBar, Box, Button, Toolbar, Typography, Select, MenuItem } from '@mui/material';

import { useUser } from '../../../shared/contexts/UserContext';

const Header = () => {
  const { user, logout } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const currentLang = pathname.split('/')[1];
    setLang(currentLang || 'en');
  }, [pathname]);

  const handleLanguageChange = (event: any) => {
    const newLang = event.target.value;
    const restOfPath = pathname.split('/').slice(2).join('/') || '';
    router.push(`/${newLang}/${restOfPath}`);
  };

  const brand = pathname.includes('betfinal') ? 'Betfinal' : 'Cosmoswin';

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 4 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Select value={lang} onChange={handleLanguageChange} size="small">
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="ar">AR</MenuItem>
          </Select>

          {user && (
            <>
              <Typography variant="h6">{brand}</Typography>
              <Typography variant="body1">👤 {user.username}</Typography>
            </>
          )}
        </Box>

        {user && (
          <Button onClick={logout} color="error" variant="outlined">
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
