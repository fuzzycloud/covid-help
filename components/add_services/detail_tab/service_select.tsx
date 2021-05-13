import { UseBulmaFormReturn } from '../../useBulmaForm';
import { FormInput } from '../types';
import { Form, Notification, Progress } from 'react-bulma-components';
import useSWR from 'swr';
import { ServiceData } from '../../service_data';
import React from 'react';

type ServiceSelectProps = {
  bulmaForm: Omit<UseBulmaFormReturn<FormInput>, 'ref'>;
};
export const ServiceSelect: React.FC<ServiceSelectProps> = (props) => {
  const { bulmaForm } = props;
  const { data, error } = useSWR<ServiceData[]>('/api/services');

  const {
    formState: { errors },
    register,
    watch,
  } = bulmaForm;

  const selectedService = watch('service');

  const { Field, Select } = Form;

  if (!data) {
    return <Progress color="primary" />;
  }

  return (
    <Field>
      <Select
        value={selectedService}
        {...register('service', { required: 'Service is Required' })}
      >
        <option value={''}>Select Service</option>
        {data.map((x) => (
          <option key={x.title} value={x.title}>
            {x.title}
          </option>
        ))}
      </Select>
      {errors.service && (
        <Notification color={'danger'}>{errors.service.message}</Notification>
      )}
    </Field>
  );
};
