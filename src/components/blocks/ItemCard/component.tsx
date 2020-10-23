import React from 'react';
import moment from 'moment';
import Loading from 'components/blocks/Loading/index';
import format from 'constants/format';
import { ItemCardProps, ConfigProps } from './types'; 

import {
  HeaderInfo,
  DivWithInfo,
  ImgCharacter,
  ImageAndListOfInfo,
  ListNameAndListOfInfo,
  Name,
  DetailedInfo,
} from './styles';

const ItemCard = ({ item, subData, config, loading, headerName }: ItemCardProps) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <HeaderInfo presenceOfImage={item.image}>
          <ImageAndListOfInfo>
            {item.image && <ImgCharacter src={item.image} alt={item.name} />}
            {subData && (
              <>
                <ListNameAndListOfInfo>{headerName}</ListNameAndListOfInfo>
                <ListNameAndListOfInfo>{subData}</ListNameAndListOfInfo>
              </>
            )}
          </ImageAndListOfInfo>
          <DivWithInfo divWithImage={item.image}>
            <Name>{item.name}</Name>
            {config.map(({ title, key, time }: ConfigProps) => (
              <DetailedInfo>
                {title}:{time ? moment(item[key]).format(format) : item[key]}
              </DetailedInfo>
            ))}
          </DivWithInfo>
        </HeaderInfo>
      )}
    </>
  );
};

export default ItemCard;
