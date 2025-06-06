'use client';

import { FC } from 'react';
import { Typography, Chip } from '@mui/material';

import { IBonus } from '../../../shared/types/Bonus';
import { IUser } from '../../../shared/types/User';
import { BrandTypeEnum } from '../../../shared/types/common';
import { checkEligibilityReason } from '../../../shared/utils/bonusEligibility';
import { StyledBonusCard, StyledCardContent, DescriptionText } from '../styles/BonusCard.styles';

interface BonusCardProps {
  bonus: IBonus;
  user: IUser;
  brand: BrandTypeEnum;
  lang: string;
}

const BonusCard: FC<BonusCardProps> = ({ bonus, user, brand, lang }) => {
  const reason = checkEligibilityReason(bonus, user);
  const isEligible = !reason;

  return (
    <StyledBonusCard
      isEligible={isEligible}
      isBetfinal={brand === BrandTypeEnum.betfinal}
    >
      <StyledCardContent>
        <Typography variant="h6">{bonus.name[lang]}</Typography>

        {bonus.description?.[lang] && (
          <DescriptionText variant="body2">
            {bonus.description[lang]}
          </DescriptionText>
        )}

        {isEligible ? (
          <Chip label="✅ Eligible" color="success" />
        ) : (
          <Chip label={`❌ ${reason}`} color="warning" />
        )}
      </StyledCardContent>
    </StyledBonusCard>
  );
};

export default BonusCard;
