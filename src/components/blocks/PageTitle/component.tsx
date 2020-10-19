import React from 'react';
import { TitleName } from './types';

import Title from './styles';

const PageTitle = ({ titleName }: TitleName) => {
  return (
    <Title>
      <p>{titleName}</p>
    </Title>
  );
};

export default PageTitle;
