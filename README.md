To get Props in static pages 

```javascript
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

```
