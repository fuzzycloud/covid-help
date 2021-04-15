import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {CircularProgress} from "@material-ui/core";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/tiffins');
  });
  return <div><CircularProgress /></div>;
};

export default Home;
