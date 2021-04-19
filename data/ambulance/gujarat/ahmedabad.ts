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
    name: 'Free Ambulance Service',
    details:
      'Private Ambulance Service during Curfew timings Only Ahmadabad city. NOTE - The patient must have doctor confirmation in advance.',
    contacts: [
      {
        name: 'Ravi vyas',
        mobileNo: '+91-9624668228',
      },

      {
        name: 'Krisha travels',
        mobileNo: '+91-8980825506',
      },
    ],
  },
];

export const ambulance_gujarat_ahmedabad_data: Info[] = slimInfoToInfo(
  data,
  address
);
