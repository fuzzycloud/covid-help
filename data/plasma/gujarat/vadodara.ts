import {
    Info,
    SlimAddress,
    SlimInfo,
    slimInfoToInfo,
  } from '../../../types/info';
  
  const address: SlimAddress = {
    city: 'Vadodara',
    state: 'Gujarat',
    country: 'India',
  };
  
  const data: SlimInfo[] = [
    {
      name: '',
      details:
        'Ready for donate Plasma',
      contacts: [
        {
          name: 'Vivek Patel',
          mobileNo: '+91-9898117110',
        },
      ],
    },
    {
        name: 'Indu blood bank',
        details:
          'Plazma donation available at vadodara',
        contacts: [
          {
            name: 'Admin',
            mobileNo: '02652437676 / 02652411477',
          },
        ],
      },
      {
        name: 'Shri Jalaram blood bank',
        details:
          'Plazma donation available at vadodara',
        contacts: [
          {
            name: 'Admin',
            mobileNo: '02652363660 / 07947106596',
          },
        ],
      },
      {
        name: 'Ayush blood centre',
        details:
          'Plazma donation available at vadodara',
        contacts: [
          {
            name: 'Admin',
            mobileNo: '+91-9586510108 / 02652966877',
          },
        ],
      },
]
export const plasma_gujarat_vadodara_data: Info[] = slimInfoToInfo(data, address);