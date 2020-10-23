import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import ItemCard from 'components/blocks/ItemCard/index';
import { Character, IdProps } from 'types/interfaces';
import { СharacterInfoProps, EpisodeItem } from './types';

const СharacterInfo = ({ character, getFetchCharacter, loading }: СharacterInfoProps) => {
  const { id } = useParams<IdProps>();

  useEffect(() => {
    getFetchCharacter({ id });
  }, [getFetchCharacter, id]);

  const renderEpisodes = useMemo(() => {
    if (Array.isArray(character.episodes)) {
      return character.episodes.map((episode: EpisodeItem) => (
        <div key={episode.id}>{episode.episode}</div>
      ));
    }
    if (isEmpty(character)) {
      return '';
    }
    return <div>{character.episodes.episode}</div>;
  }, [character]);

  return (
    <ItemCard
      loading={loading}
      item={character}
      subData={renderEpisodes}
      headerName="Episodes:"
      config={[
        {
          key: 'status',
          title: 'Status',
        },
        {
          key: 'species',
          title: 'Species',
        },
        {
          key: 'gender',
          title: 'Gender',
        },
        {
          key: 'created',
          title: 'Created',
          time: true,
        },
      ]}
    />
  );
};

export default СharacterInfo;
