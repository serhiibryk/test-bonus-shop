'use client';

import { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

import { filterBonuses } from '@repo/shared/utils/bonusFilter';
import { bonuses } from '@repo/shared/data/bonuses';
import { useUser } from '@repo/shared/contexts/UserContext';
import { IBonus } from '@repo/shared/types/Bonus';

const BonusShopPage = () => {
  const { user } = useUser();
  
  const [eligibleBonuses, setEligibleBonuses] = useState<IBonus[]>([]);

  useEffect(() => {
    if (user) {
      const filtered = filterBonuses(bonuses, user, 'cosmoswin');
      setEligibleBonuses(filtered);
    }
  }, [user]);

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
          <Card key={bonus.id} sx={{ marginBottom: 2, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6">
                {bonus.name.en}
              </Typography>
              {bonus.description?.en && (
                <Typography variant="body2">
                  {bonus.description.en}
                </Typography>
              )}
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};

export default BonusShopPage;
