'use client';

import { FC, useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { filterBonuses } from '../../../shared/utils/bonusFilter';
import { useUser } from '../../../shared/contexts/UserContext';
import { BrandTypeEnum } from '../../../shared/types/common';
import { bonuses } from '../../../shared/data/bonuses';
import { IBonus } from '../../../shared/types/Bonus';

interface BonusPageProps {
  brand: BrandTypeEnum;
}

const BonusList: FC<BonusPageProps> = ({ brand }) => {
  const { user } = useUser();
  const { i18n } = useTranslation();

  const lang = i18n.language;
  const dir = i18n.dir();
  
  const [eligibleBonuses, setEligibleBonuses] = useState<IBonus[]>([]);

  useEffect(() => {
    if (user) {
      const filtered = filterBonuses(bonuses, user, brand);
      setEligibleBonuses(filtered);
    }
  }, [user, brand]);

  if (!user) {
    return <Typography>Please log in to view your bonuses.</Typography>;
  }

  return (
    <Box sx={{ padding: "100px 15px", direction: dir }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        🎁 Available Bonuses
      </Typography>

      {eligibleBonuses.length === 0 ? (
        <Typography>No bonuses available for you right now.</Typography>
      ) : (
        eligibleBonuses.map((bonus) => (
          <Card key={bonus.id} sx={{ marginBottom: 2, borderRadius: brand === 'betfinal' ? 0 : 8 }}>
            <CardContent>
              <Typography variant="h6">
                {bonus.name[lang]}
              </Typography>
              {bonus.description?.[lang] && (
                <Typography variant="body2">
                  {bonus.description[lang]}
                </Typography>
              )}
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};

export default BonusList;
