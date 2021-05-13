import useSWR from 'swr';
import { Form, Notification, Progress } from 'react-bulma-components';
import { UseBulmaFormReturn } from '../../useBulmaForm';
import { FormInput } from '../types';
import React from 'react';
type StateSelectProps = {
  bulmaForm: Omit<UseBulmaFormReturn<FormInput>, 'ref'>;
  selectedState: string;
};
export const StateSelect: React.FC<StateSelectProps> = (props) => {
  const { bulmaForm, selectedState } = props;

  const { data, error } = useSWR<string[]>('/api/states');

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
    ...register('address.state', { required: 'State is Required' }),
  };
  return (
    <Field>
      <Select
        value={selectedState}
        onChange={(event) => {
          onChange(event);
          setValue('address.district', '', { shouldValidate: true });
        }}
        {...rest}
      >
        <option value={''}>Select State</option>
        {data.map((x) => (
          <option key={x} value={x}>
            {x}
          </option>
        ))}
      </Select>
      {errors.address?.state && (
        <Notification color={'danger'}>
          {errors.address.state.message}
        </Notification>
      )}
    </Field>
  );
};
