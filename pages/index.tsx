import React, { useState } from 'react';
import { Filter } from '../components/temp/filter';

type ServiceListProps = {
  service: string;
  state: string;
  district: string;
};
const ServiceList: React.FC<ServiceListProps> = (props) => {
  const { district, state, service } = props;
  return (
    <div>
      <p>
        {district}_{state}_{service}
      </p>
    </div>
  );
};

export default function Index() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  return (
    <div>
      <div className="columns">
        <div className="column">
          <Filter
            setSelectedDistrict={setSelectedDistrict}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
            setSelectedService={setSelectedService}
          />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          {selectedDistrict && selectedState && selectedService && (
            <ServiceList
              service={selectedService}
              state={selectedState}
              district={selectedDistrict}
            />
          )}
        </div>
      </div>
    </div>
  );
}
