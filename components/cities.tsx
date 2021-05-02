import React from 'react';
import { useRouter } from 'next/router';

type CitiesProps = {
  baseUrl: string;
  country: string;
  state: string;
  cities: string[];
};

const Cities = ({ cities, baseUrl, state, country }: CitiesProps) => {
  const router = useRouter();
  return null;
  // return (
  //   <List component="nav" aria-label="secondary mailbox folders">
  //     {cities.map((x, i) => (
  //       <ListItem
  //         key={`${x}_${i}`}
  //         button
  //         onClick={() => {
  //           router.push(
  //             `${baseUrl}/${country.toLowerCase()}/${state.toLowerCase()}/${x.toLowerCase()}`
  //           );
  //         }}
  //       >
  //         <ListItemText primary={x} />
  //       </ListItem>
  //     ))}
  //   </List>
  // );
};

export default Cities;
