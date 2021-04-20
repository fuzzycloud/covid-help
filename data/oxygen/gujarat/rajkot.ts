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
      details:
        'You may get oxygen cylinder from below numbers.',
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
            mobileNo: '+91-82003 29881',
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
          {
            name: 'PravinBhai',
            mobileNo: '+91-93741 27904',
          },
          {
            name: 'RajeshBhai',
            mobileNo: '+91-98982 20202',
          },
          {
            name: 'Paresh Unadkat',
            mobileNo: '+91-99257 41088',
          },
          {
            name: 'Nirav Udeshi',
            mobileNo: '+91-98980 94032',
          },
          {
            name: 'AshifBhai',
            mobileNo: '+91-99042 55795',
          },
          {
            name: 'Sagar Shah',
            mobileNo: '+91-74055 55955',
          },
      ],
    },
    {
      name: 'Radical Transforming Healthcare',
      details:
        'You may get fully oxygen machine from below numbers.(for Rent/Sale)',
      contacts: [
        {
          name: 'Admin',
          mobileNo: '+91-75739 30303, +91-83474 43034',
        },
      ],
    }
]
export const oxygen_gujarat_rajkot_data: Info[] = slimInfoToInfo(data, address);