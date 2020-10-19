import React from 'react';
import Layout from 'components/blocks/Layout/index';

const Characters = ({ getFetchCharacters, characters, charactersInfo, loading }: any) => {
  return (
    <Layout
      tableRequest={getFetchCharacters}
      titleName="Characters"
      arrayOfHeaders={['Name', 'Status', 'Species', 'Gender']}
      tableData={characters}
      tableItemConfig={['name', 'status', 'species', 'gender']}
      tableUrlTitle="character"
      tableInfo={charactersInfo}
      loading={loading}
    />
  );
};

export default Characters;
