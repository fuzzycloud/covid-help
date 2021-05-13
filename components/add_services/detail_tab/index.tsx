import { Form, Notification } from 'react-bulma-components';
import React from 'react';
import { FormTabs } from '../form_tabs';
import { UseBulmaFormReturn } from '../../useBulmaForm';
import { FormInput } from '../types';
import { ServiceSelect } from './service_select';

type DetailTabProps = {
  selectedTab: FormTabs;
  bulmaForm: Omit<UseBulmaFormReturn<FormInput>, 'ref'>;
};
export const DetailTab: React.FC<DetailTabProps> = (props) => {
  const { selectedTab, bulmaForm } = props;
  const {
    formState: { errors },
    register,
  } = bulmaForm;
  const { Field, Input, Textarea, Label } = Form;
  return (
    <div className={selectedTab !== 'Detail' ? 'is-hidden' : ''}>
      <Field>
        <Label>Name</Label>
        <Input {...register('name', { required: 'Name is required' })} />
        {errors.name && (
          <Notification color={'danger'}>{errors.name.message}</Notification>
        )}
      </Field>
      <Field>
        <Label>Detail</Label>
        <Textarea {...register('details')} />
      </Field>
      <ServiceSelect bulmaForm={bulmaForm} />
    </div>
  );
};
