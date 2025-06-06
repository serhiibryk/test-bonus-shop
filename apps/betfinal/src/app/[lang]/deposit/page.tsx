import { FC } from 'react';

import DepositForm from '@repo/ui/src/components/DepositForm';
import { BrandTypeEnum } from '@repo/shared/types/common';

const DepositPage: FC = () => (<DepositForm brand={BrandTypeEnum.betfinal}/>);

export default DepositPage;