import useSWR from 'swr';
import { Form, Notification, Progress } from 'react-bulma-components';
import { UseBulmaFormReturn } from '../../useBulmaForm';
import { FormInput } from '../types';
import React from 'react';
type CountrySelectProps = {
  bulmaForm: Omit<UseBulmaFormReturn<FormInput>, 'ref'>;
  selectedCountry: string;
};
export const CountrySelect: React.FC<CountrySelectProps> = (props) => {
  const { bulmaForm, selectedCountry } = props;

  const data = ['India'];

  const {
    formState: { errors },
    register,
    setValue,
  } = bulmaForm;

  if (!data) {
    return <Progress color="primary" />;
  }
  const { Field, Select } = Form;
  const { onChange, ...rest } = {
    ...register('address.country', { required: 'Country is Required' }),
  };
  return (
    <Field>
      <Select value={selectedCountry} onChange={onChange} {...rest}>
        <option value={''}>Select Country</option>
        {data.map((x) => (
          <option key={x} value={x}>
            {x}
          </option>
        ))}
      </Select>
      {errors.address?.country && (
        <Notification color={'danger'}>
          {errors.address.country.message}
        </Notification>
      )}
    </Field>
  );
};
