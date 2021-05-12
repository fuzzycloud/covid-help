import React, { useState } from 'react';
import {Columns} from "react-bulma-components";
import {ServiceFilter} from "../components/filters/service_filter";
import {StateFilter} from "../components/filters/state_filter";
import {DistrictFilter} from "../components/filters/district_filter";

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

const Index = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  return (
    <div>
      <Columns>
        <Columns.Column>
          <ServiceFilter selectedService={selectedService} setSelectedService={setSelectedService} />
        </Columns.Column>
          <Columns.Column>
              <StateFilter selectedState={selectedState} setSelectedState={setSelectedState} resetDistrict={() => setSelectedDistrict('') } />
          </Columns.Column>
          <Columns.Column>
              {selectedService && selectedState && <DistrictFilter district={selectedDistrict} state={selectedState} setSelectedDistrict={setSelectedDistrict} />}
          </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column>
          {selectedDistrict && selectedState && selectedService && (
            <ServiceList
              service={selectedService}
              state={selectedState}
              district={selectedDistrict}
            />
          )}
        </Columns.Column>
      </Columns>
    </div>
  );
}


export default Index;
