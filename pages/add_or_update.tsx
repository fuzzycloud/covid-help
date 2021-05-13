import React, { useState } from 'react';
import { Button, Form, Notification, Tabs } from 'react-bulma-components';
import { useBulmaForm, UseBulmaFormReturn } from '../components/useBulmaForm';
import { FormTabs } from '../components/add_services/form_tabs';
import { DetailTab } from '../components/add_services/detail_tab';
import { FormInput } from '../components/add_services/types';
import { AddressTab } from '../components/add_services/address_tab';
import { ContactsTab } from '../components/add_services/contacts_tab';

const Add_or_update = () => {
  const bulmaForm: Omit<
    UseBulmaFormReturn<FormInput>,
    'ref'
  > = useBulmaForm<FormInput>({
    mode: 'all',
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = bulmaForm;

  const [selectedTab, setSelectedTab] = useState<FormTabs>('Detail');
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <DetailTab selectedTab={selectedTab} bulmaForm={bulmaForm} />
      <AddressTab selectedTab={selectedTab} bulmaForm={bulmaForm} />
      <ContactsTab selectedTab={selectedTab} bulmaForm={bulmaForm} />
      <Button disabled={!isValid} color={'primary'} type={'submit'}>
        Submit
      </Button>
    </form>
  );
};

export default Add_or_update;
