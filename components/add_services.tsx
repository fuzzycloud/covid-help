import firebase from "firebase/app";
import { Button, CircularProgress, Input, MenuItem, Select, TextField } from '@material-ui/core';
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from 'react';
import { ServiceData } from './find_services';
import useSWR from 'swr';

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
  const { control, handleSubmit, formState, watch } = useForm<FormInput>();
  const onSubmit = (data: FormInput) => console.log(data);
  if (watch('address.state')) {
    fetch(`/api/states/${watch('address.state')}`).then(res => res.json().then(data => setDistricts(data)));
  }
  return <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{ required: 'Field is required' }}
        render={({ field }) => <TextField
          {...field}
          style={{ margin: 8 }}
          placeholder="Name"
          fullWidth
          required
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }} />}
      />
      <Controller
        name="details"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField
          {...field}
          multiline
          rows={4}
          style={{ margin: 8 }}
          placeholder="Details"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }} />}
      />
      <Controller
        name="address.address_line"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField
          {...field}
          style={{ margin: 8 }}
          placeholder="Address Line 1"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }} />}
      />
      <Controller
        name="address.address_line2"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField
          {...field}
          style={{ margin: 8 }}
          placeholder="Address Line 2"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }} />}
      />

      <Controller
        name="service"
        control={control}
        defaultValue=""
        rules={{ required: 'Field is required' }}
        render={({ field }) => <Select
          {...field}
          fullWidth
        >
          {services.map(x => <MenuItem value={x}>{x}</MenuItem>)}
        </Select>}
      />

      <Controller
        name="address.state"
        control={control}
        defaultValue=""
        rules={{ required: 'Field is required' }}
        render={({ field }) => <Select
          {...field}
          fullWidth
        >
          {states.map(x => <MenuItem value={x}>{x}</MenuItem>)}
        </Select>}
      />

      <Controller
        name="address.district"
        control={control}
        defaultValue=""
        render={({ field }) => <Select
          {...field}
          fullWidth
        >
          {districts.map(x => <MenuItem value={x}>{x}</MenuItem>)}
        </Select>}
      />

      <Button disabled={formState.isValid} type="submit" color={'primary'} variant={'contained'} >Submit</Button>
    </form>
  </div>
}


type AddServicesProps = {
  app: firebase.app.App
}

export const AddServices = ({app} : AddServicesProps) => {
  const auth = app.auth();
  const {data : services} = useSWR<ServiceData[]>('/api/services');
  const {data: states} = useSWR<string[]>('/api/states');
  const [user, setUser] = useState<firebase.User>(null);
  useEffect(() => {
    auth.onAuthStateChanged(user => setUser(user));
  } )
  if(!services && !states) {
    return  <CircularProgress />
  }

  return <div>
    {!user && <Button variant={'outlined'} color={'primary'} onClick={async () => {
      const res = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      setUser(res.user);
    } } >Google Sign In</Button>}
    {user && <AddForm services={services.map(x => x.title)} states={states}  user={user} app={app}/>}
  </div>
}
