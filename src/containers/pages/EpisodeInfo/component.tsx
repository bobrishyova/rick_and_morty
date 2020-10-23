import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from 'components/blocks/ItemCard/index';
import { EpisodeInfoProps, ResidentItem } from './types';
import { IdProps } from 'types/interfaces';

const EpisodeInfo = ({ episode, getFetchEpisode, loading }: any) => {
  const { id } = useParams<IdProps>();

  useEffect(() => {
    getFetchEpisode({ id });
  }, [getFetchEpisode, id]);

  const renderCharacters = useMemo(() => {
    if (Array.isArray(episode.characters)) {
      return episode.characters.map((resident: ResidentItem) => (
        <div key={resident.id}>{resident.name}</div>
      ));
    }
    return <div>{episode.name}</div>;
  }, [episode]);

  return (
    <ItemCard
      headerName="Сharacters:"
      loading={loading}
      item={episode}
      subData={renderCharacters}
      config={[
        {
          key: 'air_date',
          title: 'Air Date',
        },
        {
          key: 'episode',
          title: 'Episode',
        },
      ]}
    />
  );
};

export default EpisodeInfo;
