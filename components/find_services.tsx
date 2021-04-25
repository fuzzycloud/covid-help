import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState } from 'react';
import useSWR from 'swr';
import { CircularProgress, TextField } from '@material-ui/core';

export type ServiceData = {
  title: string;
  route: string;
}

type ServiceSelectionProps = {
  setSelectedService: (item : string) => void
}
const ServiceSelection = ({setSelectedService} : ServiceSelectionProps) => {
  const { data, error } = useSWR<ServiceData[]>(`/api/services`);
  if (error) {
    return <p>Failed to fetch data</p>;
  }
  if (!data) {
    return <CircularProgress />
  }
  return (
  <Autocomplete id={'service-selection'} onChange={(event, value) => setSelectedService(value)}  options={data.map(x => x.title)} renderInput={(params) => (
    <TextField {...params} label="Select Service" variant="outlined" />
  )}/>)
}

type StateSelectionProps = {
  setStateSelection : (item: string) => void
}

const StateSelection = ({setStateSelection} : StateSelectionProps) => {
  const { data , error } = useSWR<string[]>('/api/states');
  if (error) {
    return <p>Failed to fetch data</p>;
  }
  if (!data) {
    return <CircularProgress />
  }
  return (
    <Autocomplete id={'state-selection'} onChange={(event, value) => setStateSelection(value)}  options={data} renderInput={(params) => (
      <TextField {...params} label="Select Service" variant="outlined" />
    )}/>)
}

type DistrictSelectionProps = {
  setSelectedDistrict: (item: string) => void
  selectedState : string
}

const DistrictSelection = ({ selectedState, setSelectedDistrict} : DistrictSelectionProps) => {
  const { data , error } = useSWR<string[]>(`/api/states/${selectedState}`);
  if (error) {
    return <p>Failed to fetch data</p>;
  }
  if (!data) {
    return <CircularProgress />
  }

  return <Autocomplete id={'district-selection'} onChange={(event, value) => setSelectedDistrict(value)}  options={data} renderInput={(params) => (
    <TextField {...params} label="Select District" variant="outlined" />
  )}/>
}

type ListOfInfoProps = {
  selectedService: string;
  selectedState : string;
  selectedDistrict : string;
}

const ListOfInfo = ({selectedDistrict, selectedService, selectedState} : ListOfInfoProps) => {
  return <div>
    {`${selectedService}-${selectedState}-${selectedDistrict}`}
  </div>
}

export const FindServices = () => {

  const [selectedService, setSelectedService] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');


  return <div>
    <ServiceSelection setSelectedService={setSelectedService} />
    {selectedService && <StateSelection setStateSelection={setSelectedState} />}
    {selectedState && <DistrictSelection setSelectedDistrict={setSelectedDistrict} selectedState={selectedState} />}
    {selectedDistrict && <ListOfInfo selectedService={selectedService} selectedState={selectedState} selectedDistrict={selectedDistrict} />}
  </div>
}
