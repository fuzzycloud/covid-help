import React from 'react';
import { AppBar, Box, Button, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { FindServices } from '../components/find_services';
import { AddServices } from '../components/add_services';
import { InferGetStaticPropsType } from 'next';
import { getFirebaseApp } from '../components/config';


interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Home = ({config} : InferGetStaticPropsType<typeof getStaticProps>) => {
  const classes = useStyles();
  const firebaseApp = getFirebaseApp(config);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {/* <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Search Services" {...a11yProps(0)} />
          <Tab label="Add Services" {...a11yProps(1)} />
          <Tab label="Contact Us" {...a11yProps(2)} />
        </Tabs>
      </AppBar> */}
      <TabPanel value={value} index={0}>
        <FindServices />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddServices  app={firebaseApp}/>
      </TabPanel>
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
  databaseURL: process.env.DATABASE_URL
}
  return {
    props: {
      config
    }
  }
}

export default Home;
