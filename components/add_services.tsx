import firebase from "firebase/app";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from 'react';
import { ServiceData } from './find_services';
import useSWR from 'swr';
import { InferGetStaticPropsType } from 'next';
import { getFirebaseApp } from './config';

type AddFormProps = {
  user : firebase.User;
  app: firebase.app.App;
  services: string[];
  states: string[];
}

type Address = {
  address_line?: string;
  address_line2?: string;
  district: string;
  state: string;
  country: string;
};

type Contact = {
  name: string;
  mobileNo: string;
};

type FormInput = {
  name: string;
  service: string;
  details?: string;
  mobileNos: string []; // For better searching by number at the time of editing
  address: Address;
  contacts: Contact[];
}

const AddForm = ({user, app, services, states} : AddFormProps) => {
  const [districts, setDistricts] = useState<string[]>([]);
  const store = app.firestore();
  const { control, handleSubmit, formState, watch, register } = useForm<FormInput>();
  const onSubmit = (data: FormInput) => console.log(data);
  if (watch('address.state')) {
    fetch(`/api/states/${watch('address.state')}`).then(res => res.json().then(data => setDistricts(data)));
  }
  return <div>
    <form onSubmit={handleSubmit(onSubmit)}>
    </form>
  </div>
}




export const AddServices = ({ config } : InferGetStaticPropsType<typeof getStaticProps>) => {
  const app = getFirebaseApp(config);
  const auth = app.auth();
  const {data : services} = useSWR<ServiceData[]>('/api/services');
  const {data: states} = useSWR<string[]>('/api/states');
  const [user, setUser] = useState<firebase.User>(null);
  useEffect(() => {
    auth.onAuthStateChanged(user => setUser(user));
  } )

  return <div>
    {!user && <button className={'button is-primary'} onClick={async () => {
      const res = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      setUser(res.user);
    } } >Google Sign In</button>}
    {user && <AddForm services={services.map(x => x.title)} states={states}  user={user} app={app}/>}
  </div>
}


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
