import { useRouter } from 'next/router';
import React from 'react';
import { Button } from '@material-ui/core';
import { slimServiceRoutes } from '../data/routes';
import { InferGetStaticPropsType } from 'next';

const Home = ({data} : InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  return (
    <div>
      {data.map((item, index) => (
        <div key={`${item.title}_${index}`}>
          <Button
            style={{ paddingBottom: '5px' }}
            variant="contained"
            color="primary"
            onClick={() => router.push(item.route)}
          >
            {item.title}
          </Button>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await  slimServiceRoutes();
  return {
    props : {
      data
    },
    revalidate: 4 * 60 * 60, //In sec
  }
}
export default Home;
