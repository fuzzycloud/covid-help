import React from 'react';
import { InferGetStaticPropsType } from 'next';
import { infoToSlimAddresses } from '../../types/info';
import CitySelection from '../../components/citySelection';
import { aaya_service_data } from '../../data/aaya_service';

const Home = ({
  addresses,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <CitySelection baseUrl={'aaya'} addresses={addresses} />;
};

export const getStaticProps = async () => {
  return {
    props: {
      addresses: infoToSlimAddresses(aaya_service_data),
    },
  };
};

export default Home;
