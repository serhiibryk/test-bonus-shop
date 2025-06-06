'use client';

import { FC, useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Chip, Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

import { checkEligibilityReason } from '../../../shared/utils/bonusEligibility';
import { useUser } from '../../../shared/contexts/UserContext';
import { BrandTypeEnum } from '../../../shared/types/common';
import { bonuses } from '../../../shared/data/bonuses';
import { IBonus } from '../../../shared/types/Bonus';

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
    <Box sx={{ padding: "100px 24px", direction: dir }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Box>
          <Typography variant="h6" mb={1}>
            💰 Current Balance: {user.currentBalance} €
          </Typography>
          <Typography variant="body2">
            Deposits made: {user.depositCount}
          </Typography>
        </Box>

        <Button
          onClick={() => router.push(`/${lang}/deposit`)}
          variant="outlined"
        >
          Deposit
        </Button>
      </Stack>

      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        🎁 Available Bonuses
      </Typography>

      {allBonuses.map((bonus) => {
        const reason = checkEligibilityReason(bonus, user);
        const isEligible = !reason;

        return (
          <Card
            key={bonus.id}
            sx={{
              marginBottom: 2,
              borderRadius: brand === BrandTypeEnum.betfinal ? 0 : 8,
              opacity: isEligible ? 1 : 0.6,
              border: isEligible ? '2px solid green' : '1px dashed gray',
            }}
          >
            <CardContent sx={{ padding: '16px 40px' }}>
              <Typography variant="h6">{bonus.name[lang]}</Typography>

              {bonus.description?.[lang] && (
                <Typography variant="body2" sx={{ marginBottom: 1 }}>
                  {bonus.description[lang]}
                </Typography>
              )}

              {isEligible ? (
                <Chip label="✅ Eligible" color="success" />
              ) : (
                <Chip label={`❌ ${reason}`} color="warning" />
              )}
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default BonusList;
