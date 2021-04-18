import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { serviceRoutes } from '../data/routes';

const Home = () => {
  const router = useRouter();
  return (
    <div>
      {serviceRoutes.map((item, index) => (
        <>
          <Button
            key={`${item.title}_${index}`}
            style={{ paddingBottom: '5px' }}
            variant="contained"
            color="primary"
            onClick={() => router.push(item.route)}
          >
            {item.title}
          </Button>
          <br />
          <br />
        </>
      ))}
    </div>
  );
};

export default Home;
