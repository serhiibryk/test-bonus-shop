'use client';

import { FC, useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { bonuses } from '../../../shared/data/bonuses';
import { useUser } from '../../../shared/contexts/UserContext';
import { BrandTypeEnum } from '../../../shared/types/common';
import { IBonus } from '../../../shared/types/Bonus';
import { checkEligibilityReason } from '../../../shared/utils/bonusEligibility';

interface BonusPageProps {
  brand: BrandTypeEnum;
}

const BonusList: FC<BonusPageProps> = ({ brand }) => {
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
    <Box sx={{ padding: "100px 15px", direction: dir }}>
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
            <CardContent sx={{padding: '16px 40px'}}>
              <Typography variant="h6">
                {bonus.name[lang]}
              </Typography>
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
