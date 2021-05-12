import React from 'react';
import { Button, Form, Notification, Tabs } from 'react-bulma-components';
import { useBulmaForm } from '../components/useBulmaForm';

type Address = {
  address_line?: string;
  address_line2?: string;
  district: string;
  state: string;
  country: string;
};

type FormInput = {
  name: string;
  details?: string;
  address: Address;
};

const Add_or_update = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useBulmaForm<FormInput>({
    mode: 'all',
  });

  const { Field, Input, Textarea, Label } = Form;
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Tabs type={'toggle-rounded'} fullwidth align={'center'}>
        <Tabs.Tab active>Service Information</Tabs.Tab>
        <Tabs.Tab>Address</Tabs.Tab>
        <Tabs.Tab>Contacts</Tabs.Tab>
      </Tabs>
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
      <Button disabled={!isValid} color={'primary'} type={'submit'}>
        Submit
      </Button>
    </form>
  );
};

export default Add_or_update;
