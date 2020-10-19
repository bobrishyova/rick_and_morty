import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from 'components/blocks/ItemCard/index';
import { LocationInfoProps } from './types';

const LocationInfo = ({ location, getFetchLocation, loading }: LocationInfoProps) => {
  const { id } = useParams<any>();

  useEffect(() => {
    getFetchLocation({ id });
  }, [getFetchLocation, id]);

  const renderResidents = useMemo(() => {
    if (Array.isArray(location.residents)) {
      return location.residents.map((character: any) => (
        <div key={character.id}>{character.name}</div>
      ));
    }
    return <div>{location.name}</div>;
  }, [location.residents]);

  return (
    <ItemCard
      headerName="Residents:"
      loading={loading}
      item={location}
      renderSubData={renderResidents}
      config={[
        {
          key: 'type',
          title: 'Type',
        },
      ]}
    />
  );
};

export default LocationInfo;
