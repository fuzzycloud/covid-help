import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/tiffins');
  });
  return <div>Home</div>;
};

export default Home;
