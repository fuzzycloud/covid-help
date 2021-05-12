import React from 'react';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { slimServiceRoutes } from '../../data/routes';
import useSWR from 'swr';
import { SlimAddress } from '../../types/info';

const Home = ({ service }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data, error } = useSWR<SlimAddress[]>(`/api/services/${service}`);
  if (error) {
    return <div>Failed to load data</div>;
  }
  if (!data) {
    return null;
  }
  // return <CitySelection baseUrl={`${service}`} addresses={data} />;
  return null;
};
export const getStaticProps = async ({ params }) => {
  const service: string = params.service;
  return {
    props: {
      service,
    },
    revalidate: 4 * 60 * 60, //In sec
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const routes = await slimServiceRoutes();
  const paths = routes.map((x) => ({
    params: {
      service: x.title.toLowerCase(),
    },
  }));
  return { paths, fallback: false };
};

export default Home;
