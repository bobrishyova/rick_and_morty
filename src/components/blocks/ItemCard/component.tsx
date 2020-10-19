import React from 'react';
import moment from 'moment';
import Loading from 'components/blocks/Loading/index';
import format from 'constants/format';

import {
  HeaderInfo,
  DivWithInfo,
  ImgCharacter,
  ImageAndListOfInfo,
  ListNameAndListOfInfo,
  Name,
  DetailedInfo,
} from './styles';

const ItemCard = ({ item, renderSubData, config, loading, headerName }: any) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <HeaderInfo presenceOfImage={item.image}>
          <ImageAndListOfInfo>
            {item.image && <ImgCharacter src={item.image} alt={item.name} />}
            {renderSubData && (
              <>
                <ListNameAndListOfInfo>{headerName}</ListNameAndListOfInfo>
                <ListNameAndListOfInfo>{renderSubData}</ListNameAndListOfInfo>
              </>
            )}
          </ImageAndListOfInfo>
          <DivWithInfo divWithImage={item.image}>
            <Name>{item.name}</Name>
            {config.map(({ title, key, time }: any) => (
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
