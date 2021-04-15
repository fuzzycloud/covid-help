import React, { useState } from 'react';
import { InferGetStaticPropsType } from 'next';
import { tiffin_service_data } from '../../data/tiffin_service';
import { infoToSlimAddresses } from '../../types/info';
import CitySelection from '../../components/citySelection';
import { ambulance_service_data } from '../../data/ambulance_service';

const Home = ({
  addresses,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <CitySelection baseUrl={'ambulance'} addresses={addresses} />;
};

export const getStaticProps = async () => {
  return {
    props: {
      addresses: infoToSlimAddresses(ambulance_service_data),
    },
  };
};

export default Home;
