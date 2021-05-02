import React from 'react';
import { InferGetStaticPropsType } from 'next';
import { getFirebaseApp } from '../components/config';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return <div>SOme test</div>;
}

const Home = ({ config }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const firebaseApp = getFirebaseApp(config);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Search Services" {...a11yProps(0)} />
          <Tab label="Add Services" {...a11yProps(1)} />
          <Tab label="Contact Us" {...a11yProps(2)} />
        </Tabs>
      </AppBar> */}
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
};

export const getStaticProps = async () => {
  const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
    databaseURL: process.env.DATABASE_URL,
  };
  return {
    props: {
      config,
    },
  };
};

export default Home;
