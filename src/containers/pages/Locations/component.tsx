import React from 'react';
import Layout from 'components/blocks/Layout';

const Locations = ({ getFetchLocations, locations, locationsInfo, loading }: any) => {
  return (
    <Layout
      tableRequest={getFetchLocations}
      titleName="Locations"
      arrayOfHeaders={['Name', 'Dimension', 'Type']}
      tableData={locations}
      tableItemConfig={['name', 'dimension', 'type']}
      tableUrlTitle="location"
      tableInfo={locationsInfo}
      loading={loading}
    />
  );
};

export default Locations;
