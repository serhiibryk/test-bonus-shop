import { FC } from 'react';

import { LangParams } from '@repo/shared/types/common';

interface MainPageProps {
  params: LangParams;
}

const Main: FC<MainPageProps> = async () => {
  return (
    <div>Page</div>
  );
};

export default Main;
