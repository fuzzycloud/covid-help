import React from 'react';
import { InferGetStaticPropsType } from 'next';
import { infoByParams, infoToPath } from '../../../../types/info';
import InfoView from '../../../../components/info';
import { beds_service_data } from '../../../../data/beds_service';
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
  const data = infoByParams(params, beds_service_data);
  return {
    props: {
      data,
      params,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = infoToPath(beds_service_data);
  return { paths, fallback: false };
};

export default ServiceList;
