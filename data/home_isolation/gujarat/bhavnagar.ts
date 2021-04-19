import {
  Info,
  SlimAddress,
  SlimInfo,
  slimInfoToInfo,
} from '../../../types/info';

const address: SlimAddress = {
  city: 'Bhavnagar',
  state: 'Gujarat',
  country: 'India',
};

const data: SlimInfo[] = [
  {
    name: 'puls + Multi specialty Hospital',
    details:
      'Provide Covid-19 Home Care Services. As per government approved guideline.  ',

    contacts: [
      {
        name: 'emergency Number',
        mobileNo: ' +91-6359599292',
      },
    ],
  },
  {
    name: 'Suchak Medical Center & Hospital',
    details:
      'Provide Covid-19 Home Care Services. As per government approved guideline. ',

    contacts: [
      {
        name: 'admin',
        mobileNo: ' +91-8758561616 ,+91-8758991616',
      },
      {
        name: 'appointment Number',
        mobileNo: ' 02782422555',
      },
    ],
  },
  {
    name: 'Samarpan Hospital-ICU',
    details:
      'Provide Covid-19 Home Care Services. As per government approved guideline.  ',

    contacts: [
      {
        name: 'admin',
        mobileNo: ' 02782429666 , +91-9825108108',
      },
    ],
  },
  {
    name: 'Punit Medical & surgical nursing Home',
    details:
      'Provide Covid-19 Home Care Services. As per government approved guideline.  ',
    contacts: [
      {
        name: 'admin',
        mobileNo: ' +91-9898068540 , +91-9712697273',
      },
    ],
  },
];

export const home_isolation_gujarat_bhavnagar_data: Info[] = slimInfoToInfo(
  data,
  address
);
