import React from 'react';
import { InferGetStaticPropsType } from 'next';
import { infoByParams, infoToPath } from '../../../../types/info';
import InfoView from '../../../../components/info';
import { home_isolation_service_data } from '../../../../data/home_isolation_service';
export const ServiceList = ({
  data,
  params,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(params);
  if (data) {
    return <InfoView data={data} />;
  }
  return null;
};

export const getStaticProps = async ({ params }) => {
  const data = infoByParams(params, home_isolation_service_data);
  return {
    props: {
      data,
      params,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = infoToPath(home_isolation_service_data);
  return { paths, fallback: false };
};

export default ServiceList;
