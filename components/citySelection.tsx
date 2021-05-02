import * as _ from 'lodash';
import React, { useState } from 'react';
import States from './states';
import Cities from './cities';
import { SlimAddress } from '../types/info';
type InfoProps = {
  baseUrl: string;
  addresses: SlimAddress[];
};
const CitySelection = ({ baseUrl, addresses }: InfoProps) => {
  const states = _.chain(addresses)
    .map((x) => x.state)
    .uniq()
    .value();
  const [state, setState] = useState<string>('');
  // Hard coded for now
  const [country] = useState<string>('India');
  const [cities, setCities] = useState<string[]>([]);

  return (
    <div>
      <States
        states={states}
        setState={setState}
        setCities={setCities}
        addresses={addresses}
      />
      <Cities
        baseUrl={baseUrl}
        cities={cities}
        state={state}
        country={country}
      />
    </div>
  );
};

export default CitySelection;
