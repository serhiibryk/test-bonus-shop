"use client";

import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, Typography } from '@mui/material';

import { IBonus } from '@repo/shared/types/Bonus';

interface BonusCardProps {
  bonus: IBonus;
}

const BonusCard: FC<BonusCardProps> = ({ bonus }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{bonus.name[lang]}</Typography>
        {bonus.description?.[lang] && (
          <Typography variant="body2">{bonus.description[lang]}</Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default BonusCard;
