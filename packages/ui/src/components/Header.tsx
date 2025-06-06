'use client';

import { FC, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button, MenuItem, SelectChangeEvent } from '@mui/material';

import { getCookie, setCookie } from '../../../shared/utils/cookies';
import { useUser } from '../../../shared/contexts/UserContext';
import { BrandTypeEnum } from '../../../shared/types/common';
import {
  StyledAppBar,
  StyledToolbar,
  LeftSection,
  RightSection,
  BrandName,
  Username,
  LanguageSelect,
} from '../styles/Header.styles';

interface HeaderProps {
  brand: BrandTypeEnum;
}

const Header: FC<HeaderProps> = ({ brand }) => {
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
  }, [pathname, router]);

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    const newLang = event.target.value;
    const restOfPath = pathname.split('/').slice(2).join('/') || '';

    setLang(newLang);
    setCookie('lang', newLang);
    router.push(`/${newLang}/${restOfPath}`);
  };

  const brandForShow = brand === BrandTypeEnum.betfinal ? 'Betfinal' : 'Cosmoswin';

  return (
    <StyledAppBar>
      <StyledToolbar>
        <LeftSection>
          {user && (
            <>
              <BrandName variant="h6">{brandForShow}</BrandName>
              <Username variant="body1">👤 {user.username}</Username>
            </>
          )}
        </LeftSection>

        <RightSection>
          <LanguageSelect value={lang} onChange={handleLanguageChange} size="small" color="primary">
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="ar">AR</MenuItem>
          </LanguageSelect>

          {user && (
            <Button onClick={logout} color="error" variant="outlined">
              Logout
            </Button>
          )}
        </RightSection>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
