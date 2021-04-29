import React from "react";
// import { useRouter } from "next/router";
import {

  IonButton,

  IonSearchbar,

  IonContent,
} from "@ionic/react";
import {
  personCircle,
  search,
  helpCircle,
  star,
  create,
  ellipsisHorizontal,
  ellipsisVertical,
  time,
} from "ionicons/icons";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonRouterContext,
} from "@ionic/react";
import { InferGetStaticPropsType } from "next";
import { getFirebaseApp } from "../config";

// const router = useRouter();
const nav = document.querySelector('ion-nav');
function showDetail() {
  // const tech = techs.find(tech => tech.title === title);
  // router.push('recipe');
}
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
        <h2>
          <ion-text>{children}</ion-text>
        </h2>
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
const Home = ({ config }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const classes = useStyles();
  const firebaseApp = getFirebaseApp(config);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <IonPage>
        <ion-header>
          <ion-toolbar >
            <ion-buttons slot="start">
              <ion-menu-button></ion-menu-button>
            </ion-buttons>
            <ion-buttons slot="end">
              <IonButton routerLink="/login">Add Supplier</IonButton>
            </ion-buttons>

          </ion-toolbar>
        </ion-header>
        <IonContent
          scrollEvents={true}
          onIonScrollStart={() => { }}
          onIonScroll={() => { }}
          onIonScrollEnd={() => { }}
          id="main"
        >
          <IonSearchbar placeholder="Search here" color="success-tint" />
          <div style={{ padding: 5 }}>
            <ion-item>
              <ion-label>State</ion-label>
              <ion-select placeholder="Select State">
                <ion-select-option value="f">Gujarat</ion-select-option>
                <ion-select-option value="m">Uttar Pradesh</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-item>
              <ion-label>City</ion-label>
              <ion-select placeholder="Select City">
                <ion-select-option value="f">Bhavnagar</ion-select-option>
                <ion-select-option value="m">Surat</ion-select-option>
                <ion-select-option value="k">Rajkot</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-item>
              <ion-label>Choose your requirement</ion-label>
              <ion-select placeholder="Select">
                <ion-select-option value="f">Oxygen</ion-select-option>
                <ion-select-option value="m">Tiffin</ion-select-option>
                <ion-select-option value="n">Beds</ion-select-option>
                <ion-select-option value="o">Home  Isolation</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-item lines="none">
              <IonButton routerLink="/list" color="success" size="medium" fill="outline" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Apply</IonButton>
            </ion-item>
          </div>
        </IonContent>
      </IonPage>
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
