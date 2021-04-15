import React, { useState } from 'react';
import { InferGetStaticPropsType } from 'next';
import { tiffin_service_data } from '../../data/tiffin_service';
import { infoToSlimAddresses } from '../../types/info';
import CitySelection from '../../components/citySelection';
import { drs_service_data } from '../../data/drs_service';

const Home = ({
  addresses,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <CitySelection baseUrl={'drs'} addresses={addresses} />;
};

export const getStaticProps = async () => {
  return {
    props: {
      addresses: infoToSlimAddresses(drs_service_data),
    },
  };
};

export default Home;
