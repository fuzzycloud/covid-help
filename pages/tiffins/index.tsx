import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  ListItem,
  List,
  Divider,
  TextField,
  ListItemText,
} from '@material-ui/core';
import { InferGetStaticPropsType } from 'next';
import Autocomplete from '@material-ui/lab/Autocomplete';
import * as _ from 'lodash';
import { useRouter } from 'next/router';
import { Address, tiffin_service_data } from '../../data/tiffin_service';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

const Home = ({
  addresses,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const states = _.chain(addresses)
    .map((x) => x.state)
    .uniq()
    .value();
  const [state, setState] = useState<string>('');
  const [cities, setCities] = useState<string[]>([]);
  const router = useRouter();
  return (
    <div>
      <Autocomplete
        id="state-selection"
        options={states}
        style={{ width: 300 }}
        onChange={(event: any, newValue: string | null) => {
          if (newValue) {
            setState(newValue);
            setCities(
              _.chain(addresses)
                .filter((x) => x.state.toLowerCase() === newValue.toLowerCase())
                .map((x) => x.city)
                .uniq()
                .value()
            );
          }
        }}
        renderInput={(params) => (
          <TextField {...params} label="Select State" variant="outlined" />
        )}
      />

      <Divider />

      <List component="nav" aria-label="secondary mailbox folders">
        {cities.map((x, i) => (
          <ListItem
            key={`${x}_${i}`}
            button
            onClick={() => {
              router.push(`tiffins/${state.toLowerCase()}/${x.toLowerCase()}`);
            }}
          >
            <ListItemText primary={x} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

type SlimAddress = Pick<Address, 'city' | 'state' | 'country'>;

export const getStaticProps = async () => {
  const addresses: SlimAddress[] = tiffin_service_data.map((x) => ({
    city: x.address.city,
    state: x.address.state,
    country: x.address.country,
  }));

  return {
    props: {
      addresses,
    },
  };
};

export default Home;
