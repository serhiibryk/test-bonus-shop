'use client';

import { FC, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AppBar, Box, Button, Toolbar, Typography, Select, MenuItem, SelectChangeEvent } from '@mui/material';

import { useUser } from '../../../shared/contexts/UserContext';
import { BrandTypeEnum } from '../../../shared/types/common';
import { getCookie, setCookie } from '../../../shared/utils/cookies';

interface HeaderProps {
  brand: BrandTypeEnum;
}

const Header: FC <HeaderProps> = ({ brand }) => {
  const { user, logout } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const [lang, setLang] = useState('en');

  useEffect(() => {
    const cookieLang = getCookie('lang');
    const currentLang = pathname.split('/')[1];

    if (cookieLang && cookieLang !== currentLang) {
      const restOfPath = pathname.split('/').slice(2).join('/') || '';
      router.replace(`/${cookieLang}/${restOfPath}`);
    }

    setLang(cookieLang || currentLang || 'en');
  }, [pathname]);

  const handleLanguageChange = (event: SelectChangeEvent) => {
    const newLang = event.target.value;
    setLang(newLang);
    setCookie('lang', newLang);

    const restOfPath = pathname.split('/').slice(2).join('/') || '';
    router.push(`/${newLang}/${restOfPath}`);
  };

  const brandForShow = brand === BrandTypeEnum.betfinal ? 'Betfinal' : 'Cosmoswin';

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 4 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

          {user && (
            <>
              <Typography variant="h6" color="primary">{brandForShow}</Typography>
              <Typography variant="body1">👤 {user.username}</Typography>
            </>
          )}

          <Select
            value={lang}
            onChange={handleLanguageChange}
            size="small"
            color="primary"
          >
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="ar">AR</MenuItem>
          </Select>
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
