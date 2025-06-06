'use client';

import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { Button, Typography } from '@mui/material';

import { useUser } from '../../../shared/contexts/UserContext';
import { BrandTypeEnum } from '../../../shared/types/common';
import { bonuses as allBonusesData } from '../../../shared/data/bonuses';
import { IBonus } from '../../../shared/types/Bonus';
import {
  PageWrapper,
  TopRow,
  BalanceBox,
  BalanceText,
  BonusTitle,
} from '../styles/BonusList.styles';
import LoginRequiredMessage from './LoginRequiredMessage'; 
import BonusCard from './BonusCard';

interface BonusListProps {
  brand: BrandTypeEnum;
}

const BonusList: FC<BonusListProps> = ({ brand }) => {
  const { user } = useUser();
  const router = useRouter();
  const { i18n } = useTranslation();

  const lang = i18n.language;
  const dir = i18n.dir();

  const bonuses = useMemo<IBonus[]>(() => {
    return allBonusesData.filter((b) => b.brand === brand);
  }, [brand]);

  const handleDepositClick = () => {
    router.push(`/${lang}/deposit`);
  };

  if (!user) {
    return <LoginRequiredMessage direction={dir} />;
  }

  return (
    <PageWrapper sx={{ direction: dir }}>
      <TopRow direction="row" justifyContent="space-between" alignItems="center">
        <BalanceBox>
          <BalanceText variant="h6">
            💰 Current Balance: {user.currentBalance.toFixed(2)}
          </BalanceText>
          <Typography variant="body2">
            Deposits made: {user.depositCount}
          </Typography>
        </BalanceBox>

        <Button onClick={handleDepositClick} variant="outlined">
          Deposit
        </Button>
      </TopRow>

      <BonusTitle variant="h4">🎁 Available Bonuses</BonusTitle>

      {bonuses.map((bonus) => (
        <BonusCard
          key={bonus.id}
          bonus={bonus}
          user={user}
          brand={brand}
          lang={lang}
        />
      ))}
    </PageWrapper>
  );
};

export default BonusList;
