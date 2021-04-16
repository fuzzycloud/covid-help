import React from 'react';
import { InferGetStaticPropsType } from 'next';
import { infoToSlimAddresses } from '../../types/info';
import CitySelection from '../../components/citySelection';
import { beds_service_data } from '../../data/beds_service';

const Home = ({
  addresses,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <CitySelection baseUrl={'beds'} addresses={addresses} />;
};

export const getStaticProps = async () => {
  return {
    props: {
      addresses: infoToSlimAddresses(beds_service_data),
    },
  };
};

export default Home;
