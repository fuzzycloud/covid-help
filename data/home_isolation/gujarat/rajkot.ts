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
      name: 'Om Clinics',
      details:
        'Provide Covid-19 Home Care Services.For more details please contact. ',
      contacts: [
        {
          name: 'Dr.Raj K.Vaya',
          mobileNo: ' +91-9428376860',
        },
      ],
    },
  ];
  
  export const home_isolation_gujarat_rajkot_data: Info[] = slimInfoToInfo(
    data,
    address
  );
  