"use client";

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import MainLayout from './MainLayout';

const PageContent: FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>{t("title")}</MainLayout>
  );
};

export default PageContent;
