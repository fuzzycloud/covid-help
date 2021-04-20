import React, { useState } from 'react';
import useSWR from 'swr';
import CitySelection from '../../components/citySelection';
import { SlimAddress } from '../../types/info';
import { CircularProgress } from '@material-ui/core';

const Home = () => {
  const { data, error } = useSWR<SlimAddress[]>('/api/tiffins');
  if (error) {
    return <div>Faild to load data</div>;
  }
  if (!data) {
    return <CircularProgress />;
  }
  return <CitySelection baseUrl={'tiffins'} addresses={data} />;
};

// export const getStaticProps = async () => {
//   return {
//     props: {
//       addresses: infoToSlimAddresses(tiffin_service_data),
//     },
//   };
// };

export default Home;
