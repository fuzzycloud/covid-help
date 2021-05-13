import { Tabs } from 'react-bulma-components';
import React from 'react';

export type FormTabs = 'Detail' | 'Address' | 'Contacts';

type FormTabsProps = {
  selectedTab: FormTabs;
  setSelectedTab: (i: FormTabs) => void;
};

export const FormTabs: React.FC<FormTabsProps> = (props) => {
  const { selectedTab, setSelectedTab } = props;
  return (
    <Tabs type={'toggle-rounded'} fullwidth align={'center'}>
      <Tabs.Tab
        onClick={() => setSelectedTab('Detail')}
        active={selectedTab === 'Detail'}
      >
        Service Information
      </Tabs.Tab>
      <Tabs.Tab
        onClick={() => setSelectedTab('Address')}
        active={selectedTab === 'Address'}
      >
        Address
      </Tabs.Tab>
      <Tabs.Tab
        onClick={() => setSelectedTab('Contacts')}
        active={selectedTab === 'Contacts'}
      >
        Contacts
      </Tabs.Tab>
    </Tabs>
  );
};
