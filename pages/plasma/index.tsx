import React, { useState } from 'react';
import { InferGetStaticPropsType } from 'next';
import { tiffin_service_data } from '../../data/tiffin_service';
import { infoToSlimAddresses } from '../../types/info';
import CitySelection from '../../components/citySelection';
import { plasma_service_data } from '../../data/plasma_service';

const Home = ({
  addresses,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <CitySelection baseUrl={'plasma'} addresses={addresses} />;
};

export const getStaticProps = async () => {
  return {
    props: {
      addresses: infoToSlimAddresses(plasma_service_data),
    },
  };
};

export default Home;
