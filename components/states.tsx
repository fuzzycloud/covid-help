import * as _ from 'lodash';
import React from 'react';
import { SlimAddress } from '../types/info';

type StateProps = {
  states: string[];
  setState: (s: string) => void;
  setCities: (c: string[]) => void;
  addresses: SlimAddress[];
};

const States = ({ states, setState, setCities, addresses }: StateProps) => {
return null;
  // return (
  //   <Autocomplete
  //     id="state-selection"
  //     options={states}
  //     style={{ width: 300 }}
  //     onChange={(event: any, newValue: string | null) => {
  //       if (newValue) {
  //         setState(newValue);
  //         setCities(
  //           _.chain(addresses)
  //             .filter((x) => x.state.toLowerCase() === newValue.toLowerCase())
  //             .map((x) => x.city)
  //             .uniq()
  //             .value()
  //         );
  //       }
  //     }}
  //     renderInput={(params) => (
  //       <TextField {...params} label="Select State" variant="outlined" />
  //     )}
  //   />
  // );
};

export default States;
