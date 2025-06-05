'use client';

import { FC, useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

import { filterBonuses } from '../../../shared/utils/bonusFilter';
import { useUser } from '../../../shared/contexts/UserContext';
import { BrandTypeEnum } from '../../../shared/types/common';
import { bonuses } from '../../../shared/data/bonuses';
import { IBonus } from '../../../shared/types/Bonus';

interface BonusListProps {
  brand: BrandTypeEnum;
  locale: string;
}

const BonusList: FC<BonusListProps> = ({ brand, locale }) => {
  const { user } = useUser();
  
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
    <Box sx={{ padding: 4 }}>
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
                {bonus.name[locale]}
              </Typography>
              {bonus.description?.[locale] && (
                <Typography variant="body2">
                  {bonus.description[locale]}
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
