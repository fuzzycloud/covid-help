import React from 'react';
import { InferGetStaticPropsType } from 'next';
import { infoToSlimAddresses } from '../../types/info';
import CitySelection from '../../components/citySelection';
import { home_isolation_service_data } from '../../data/home_isolation_service';

const Home = ({
  addresses,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <CitySelection baseUrl={'home-isolation'} addresses={addresses} />;
};

export const getStaticProps = async () => {
  return {
    props: {
      addresses: infoToSlimAddresses(home_isolation_service_data),
    },
  };
};

export default Home;
