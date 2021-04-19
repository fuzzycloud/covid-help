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
      name: 'Beds Availability',
      details:
        'Beds Availability helpline numbers in Rajkot.',
      contacts: [
        {
          name: 'admin',
          mobileNo: '+91-94998 01383',
        },
        {
            name: 'admin',
            mobileNo: '+91-94998 06486',
          },
          {
            name: 'admin',
            mobileNo: '+91-94998 01338',
          },
          {
            name: 'admin',
            mobileNo: '+91-94998 04038',
          },
          {
            name: 'admin',
            mobileNo: '+91-94998 06828',
          },
       
      ],
    },
    {
        name: 'Param Covid Hospital',
        details:
          'You may get bed in this hospital.',
        contacts: [
          {
            name: 'Divyesh',
            mobileNo: '+91-9909971120',
          },
         
         
        ],
      },
      {
        name: 'Param Patriya Hotel',
        details:
          'You may get bed here.',
        contacts: [
          {
            name: 'admin',
            mobileNo: '+91-9664665691',
          },
         
         
        ],
      },
      {
        name: 'Shree Giriraj Hospital Vaccination',
        details:
          'You may get bed here.',
        contacts: [
          {
            name: 'Hemant',
            mobileNo: '+91-76000758',
          },
         
         
        ],
      },
      {
        name: 'Olympus hospital',
        details:
          'You may get bed here.',
        contacts: [
          {
            name: 'Dhiren',
            mobileNo: '+91-8460805226',
          },
         
         
        ],
      },
      {
        name: 'Star Synergy Hospital',
        details:
          'You may get bed here.',
        contacts: [
          {
            name: 'admin',
            mobileNo: '+91-9512140091',
          },
         
         
        ],
      },
      {
        name: 'Star Covid Care Center',
        details:
          'You may get bed here.',
        contacts: [
          {
            name: 'Admin',
            mobileNo: '+91-6351437778',
          },
         
         
        ],
      },
      {
        name: 'Salus Covid Hospital',
        details:
          'You may get bed here.',
        contacts: [
          {
            name: 'Admin',
            mobileNo: '+91-9696796964',
          },
         
         
        ],
      },
      {
        name: 'Surbhi Covid hospital ',
        details:
          'Chance to get Admission.... A new 60 Bed Hospital has started "Surbhi Covid hospital " opposite H.J.Dosji trust hospital ,Malavia Nagar, gondal road , rajkot.',
        contacts: [
          {
            name: 'Admin',
            mobileNo: '+91-8156010182 ,02812361008',
          },
         
         
        ],
      },
]
export const beds_gujarat_rajkot_data: Info[] = slimInfoToInfo(data, address);