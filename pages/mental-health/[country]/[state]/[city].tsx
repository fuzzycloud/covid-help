import React from 'react';
import { InferGetStaticPropsType } from 'next';
import { infoByParams, infoToPath } from '../../../../types/info';
import InfoView from '../../../../components/info';
import { aaya_service_data } from '../../../../data/aaya_service';
import { mental_health_service_data } from '../../../../data/mental_health_service';
export const ServiceList = ({
  data,
  params,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (data) {
    return <InfoView data={data} />;
  }
  return null;
};

export const getStaticProps = async ({ params }) => {
  const data = infoByParams(params, mental_health_service_data);
  return {
    props: {
      data,
      params,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = infoToPath(mental_health_service_data);
  return { paths, fallback: false };
};

export default ServiceList;
