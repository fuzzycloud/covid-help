import useSWR from 'swr';
import { Form, Notification, Progress } from 'react-bulma-components';
import { UseBulmaFormReturn } from '../../useBulmaForm';
import { FormInput } from '../types';
import React from 'react';

type DistrictSelectProps = {
  selectedState: string;
  selectedDistrict: string;
  bulmaForm: Omit<UseBulmaFormReturn<FormInput>, 'ref'>;
};
export const DistrictSelect: React.FC<DistrictSelectProps> = (props) => {
  const { bulmaForm, selectedState, selectedDistrict } = props;

  const { data, error } = useSWR<string[]>(`/api/states/${selectedState}`);

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
    ...register('address.district', { required: 'District is Required' }),
  };

  return (
    <Field>
      <Select
        value={selectedDistrict}
        onChange={async (event) => {
          onChange(event);
          setValue('address.district', event.target.value, {
            shouldValidate: true,
          });
        }}
        {...rest}
      >
        <option value={''}>Select District</option>
        {data.map((x) => (
          <option key={x} value={x}>
            {x}
          </option>
        ))}
      </Select>
      {errors.address?.district && (
        <Notification color={'danger'}>
          {errors.address.district.message}
        </Notification>
      )}
    </Field>
  );
};
