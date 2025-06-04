"use client";

import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <>
      <div>{t("title")} Layout</div>
      
      {children}
    </>
  );
};

export default MainLayout;
