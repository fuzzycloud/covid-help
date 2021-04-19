import {
  Info,
  SlimAddress,
  SlimInfo,
  slimInfoToInfo,
} from '../../../types/info';

const address: SlimAddress = {
  city: 'Rajkot',
  state: 'Gujarat',
  country: 'India',
};

const data: SlimInfo[] = [
  {
    name: '',
    details: 'You may get oxygen cylinder from below numbers.',
    contacts: [
      {
        name: 'Gunubhai Delawala',
        mobileNo: '+91-98240 40889',
      },
      {
        name: 'Hitesh Kunjadiya',
        mobileNo: '+91-94274 34465',
      },
      {
        name: 'Sadbhavna Trust Nishant Khagram',
        mobileNo: '+91-87587 70770',
      },
      {
        name: 'Kishor Hapaliya',
        mobileNo: '+91-98255 07171',
      },
      {
        name: 'Shravan Virani',
        mobileNo: '+91-98245 05706',
      },
      {
        name: 'Sanjay Hirani Kranti',
        mobileNo: '+91-98250 77454',
      },
      {
        name: 'Ajitsinh Dodiya Freedom Yuva Group',
        mobileNo: '+91-8200329881',
      },
      {
        name: 'Nilesh Harsoda',
        mobileNo: '+91-98985 75606',
      },
      {
        name: 'Vibhash Sheth Kanaiya Mitra mandal',
        mobileNo: '+91-81409 01234',
      },
      {
        name: 'Milan Kothari',
        mobileNo: '+91-98242 94531',
      },
      {
        name: 'Ashish Joshi',
        mobileNo: '+91-94269 00500',
      },
    ],
  },
];
export const oxygen_gujarat_rajkot_data: Info[] = slimInfoToInfo(data, address);
