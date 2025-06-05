"use client";

import { useTranslation } from 'react-i18next';

import { BrandTypeEnum } from '@repo/shared/types/common';
import BonusList from '@repo/ui/src/components/BonusList';

export default function BetfinalBonusPage() {
  const { i18n } = useTranslation();

  return <BonusList brand={BrandTypeEnum.betfinal} locale={i18n.language} />;
}
