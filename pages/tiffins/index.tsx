import React from 'react';
import useSWR from 'swr';
import CitySelection from '../../components/citySelection';
import { SlimAddress } from '../../types/info';
import { CircularProgress } from '@material-ui/core';

const Home = () => {
  const { data, error } = useSWR<SlimAddress[]>('/api/services/tiffins');
  if (error) {
    return <div>Failed to load data</div>;
  }
  if (!data) {
    return <CircularProgress />;
  }
  return <CitySelection baseUrl={'tiffins'} addresses={data} />;
};

export default Home;
