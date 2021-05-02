import React from 'react';
import { InferGetStaticPropsType } from 'next';
import { infoByParams, infoToPath } from '../../../../types/info';
import { slimServiceRoutes } from '../../../../data/routes';
export const ServiceList = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (data) {
    return <div>Some Info</div>;
  }
  return null;
};

export const getStaticProps = async ({ params }) => {
  const data = await infoByParams(params);
  return {
    props: {
      data
    },
    revalidate: 4 * 60 * 60, //In sec
  };
};

export const getStaticPaths = async () => {
  const routes = await slimServiceRoutes();
  const pathData = await Promise.all(routes.map(x => infoToPath(x.title.toLowerCase()))) ;
  const paths = pathData.flat();
  return { paths, fallback: false };
};

export default ServiceList;
