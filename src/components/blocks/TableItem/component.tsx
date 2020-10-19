import React from 'react';
import { ItemProps } from './types';

import { LinkWithInformation, ItemTable, DivItem } from './styles';

const TableItem = ({ item, config, urlTitle }: ItemProps) => (
  <LinkWithInformation to={`/${urlTitle}/${item.id}`}>
    {config.map((info) => (
      <DivItem widthOfItems={config.length === 3}>
        <ItemTable>{item[info]}</ItemTable>
      </DivItem>
    ))}
  </LinkWithInformation>
);

export default TableItem;
