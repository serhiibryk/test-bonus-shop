'use client';

import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { Button, Typography } from '@mui/material';

import { useUser } from '../../../shared/contexts/UserContext';
import { BrandTypeEnum } from '../../../shared/types/common';
import { bonuses } from '../../../shared/data/bonuses';
import { IBonus } from '../../../shared/types/Bonus';
import {
  PageWrapper,
  TopRow,
  BalanceBox,
  BalanceText,
  BonusTitle,
} from '../styles/BonusList.styles';
import BonusCard from './BonusCard';

interface BonusPageProps {
  brand: BrandTypeEnum;
}

const BonusList: FC<BonusPageProps> = ({ brand }) => {
  const router = useRouter();
  const { user } = useUser();
  const { i18n } = useTranslation();

  const lang = i18n.language;
  const dir = i18n.dir();

  const [allBonuses, setAllBonuses] = useState<IBonus[]>([]);

  useEffect(() => {
    const brandBonuses = bonuses.filter((b) => b.brand === brand);
    setAllBonuses(brandBonuses);
  }, [brand]);

  if (!user) {
    return <Typography>Please log in to view your bonuses.</Typography>;
  }

  return (
    <PageWrapper sx={{ direction: dir }}>
      <TopRow direction="row" justifyContent="space-between" alignItems="center">
        <BalanceBox>
          <BalanceText variant="h6">
            💰 Current Balance: {user.currentBalance} €
          </BalanceText>
          <Typography variant="body2">Deposits made: {user.depositCount}</Typography>
        </BalanceBox>

        <Button onClick={() => router.push(`/${lang}/deposit`)} variant="outlined">
          Deposit
        </Button>
      </TopRow>

      <BonusTitle variant="h4">🎁 Available Bonuses</BonusTitle>

      {allBonuses.map((bonus) => (
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
