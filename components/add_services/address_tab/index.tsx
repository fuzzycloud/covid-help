import React from 'react';
import { FormTabs } from '../form_tabs';
import { UseBulmaFormReturn } from '../../useBulmaForm';
import { FormInput } from '../types';
import { Form, Notification } from 'react-bulma-components';
import { StateSelect } from './state_select';
import { DistrictSelect } from './district_select';
import { CountrySelect } from './country_select';
type AddressTabProps = {
  selectedTab: FormTabs;
  bulmaForm: Omit<UseBulmaFormReturn<FormInput>, 'ref'>;
};
export const AddressTab: React.FC<AddressTabProps> = (props) => {
  const { selectedTab, bulmaForm } = props;
  const {
    register,
    watch,
    formState: { errors },
  } = bulmaForm;
  const selectedState = watch('address.state');
  const selectedDistrict = watch('address.district');
  const selectedCountry = watch('address.country');
  const { Field, Label, Input } = Form;
  return (
    <div className={selectedTab !== 'Address' ? 'is-hidden' : ''}>
      <Field>
        <Label>Address Line 1</Label>
        <Input {...register('address.address_line')} />
      </Field>
      <Field>
        <Label>Address Line 2</Label>
        <Input {...register('address.address_line2')} />
      </Field>
      <StateSelect selectedState={selectedState} bulmaForm={bulmaForm} />
      {selectedState && (
        <DistrictSelect
          selectedState={selectedState}
          bulmaForm={bulmaForm}
          selectedDistrict={selectedDistrict}
        />
      )}
      <CountrySelect bulmaForm={bulmaForm} selectedCountry={selectedCountry} />
    </div>
  );
};
