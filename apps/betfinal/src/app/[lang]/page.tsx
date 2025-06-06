import { FC } from 'react';

import { BrandTypeEnum } from '@repo/shared/types/common';
import BonusList from '@repo/ui/src/components/BonusList';

const MainPage: FC = () => (<BonusList brand={BrandTypeEnum.betfinal} />);

export default MainPage;
