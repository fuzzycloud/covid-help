
import React, { useState } from 'react';
import useSWR from 'swr';

import { IonSelect, IonSelectOption, IonSpinner } from '@ionic/react';

export type ServiceData = {
  title: string;
  route: string;
}

type ServiceSelectionProps = {
  setSelectedService: (item: string) => void
}
const ServiceSelection = ({ setSelectedService }: ServiceSelectionProps) => {
  const { data, error } = useSWR<ServiceData[]>(`/api/services`);
  if (error) {
    return <p>Failed to fetch data</p>;
  }
  if (!data) {
    return <IonSpinner />
  }
  return (
    <IonSelect id={'service-selection'} onIonChange={e => setSelectedService(e.detail.value)} >
      {/* {data.map(user => (
        <IonSelectOption key={user.title} value={user}>
          {user.title}
        </IonSelectOption>
      ))} */}
    </IonSelect>
  )
}

type StateSelectionProps = {
  setStateSelection: (item: string) => void
}

const StateSelection = ({ setStateSelection }: StateSelectionProps) => {
  const { data, error } = useSWR<string[]>('/api/states');
  if (error) {
    return <p>Failed to fetch data</p>;
  }
  if (!data) {
    return <IonSpinner />
  }
  return (
    <IonSelect id={'state-selection'} onIonChange={e => setStateSelection(e.detail.value)} >
      {/* {data.map(user => (
        <IonSelectOption key={user.title} value={user}>
          {user.title}
        </IonSelectOption>
      ))} */}
     
    </IonSelect>)
}

type DistrictSelectionProps = {
  setSelectedDistrict: (item: string) => void
  selectedState: string
}

const DistrictSelection = ({ selectedState, setSelectedDistrict }: DistrictSelectionProps) => {
  const { data, error } = useSWR<string[]>(`/api/states/${selectedState}`);
  if (error) {
    return <p>Failed to fetch data</p>;
  }
  if (!data) {
    return <IonSpinner />
  }

  return <IonSelect id={'district-selection'} onIonChange={e => setSelectedDistrict(e.detail.value)} />
}

type ListOfInfoProps = {
  selectedService: string;
  selectedState: string;
  selectedDistrict: string;
}

const ListOfInfo = ({ selectedDistrict, selectedService, selectedState }: ListOfInfoProps) => {
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
