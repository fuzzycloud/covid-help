import {
  Info,
  SlimAddress,
  SlimInfo,
  slimInfoToInfo,
} from '../../../types/info';

const address: SlimAddress = {
  city: 'Ahmedabad',
  state: 'Gujarat',
  country: 'India',
};

const data: SlimInfo[] = [
  {
    name: 'Shivam Hospital',
    details:
      'Provide Covid-19 Home Care Services. As per government approved guideline.  ',
    contacts: [
      {
        name: 'admin',
        mobileNo: ' +91-9925047695',
      },
    ],
  },
];

export const home_isolation_gujarat_ahmedabad_data: Info[] = slimInfoToInfo(
  data,
  address
);
