import React, { useState } from 'react';
import { InferGetStaticPropsType } from 'next';
import { tiffin_service_data } from '../../data/tiffin_service';
import { infoToSlimAddresses } from '../../types/info';
import CitySelection from '../../components/citySelection';
import { oxygen_service_data } from '../../data/oxygen_service';

const Home = ({
  addresses,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <CitySelection baseUrl={'oxygen'} addresses={addresses} />;
};

export const getStaticProps = async () => {
  return {
    props: {
      addresses: infoToSlimAddresses(oxygen_service_data),
    },
  };
};

export default Home;
