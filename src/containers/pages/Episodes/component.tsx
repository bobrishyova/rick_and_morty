import React from 'react';
import Layout from 'components/blocks/Layout/index';
// import { EpisodesProps } from './types';

const Episodes = ({ getFetchEpisodes, episodes, episodesInfo, loading }: any) => {
  return (
    <Layout
      tableRequest={getFetchEpisodes}
      titleName="Episodes"
      arrayOfHeaders={['Name', 'Air Date', 'Episode']}
      tableData={episodes}
      tableItemConfig={['name', 'air_date', 'episode']}
      tableUrlTitle="episode"
      tableInfo={episodesInfo}
      loading={loading}
    />
  );
};

export default Episodes;
