import {
    Info,
    SlimAddress,
    SlimInfo,
    slimInfoToInfo,
  } from '../../../types/info';
  
  const address: SlimAddress = {
    city: 'Surat',
    state: 'Gujarat',
    country: 'India',
  };
  
  const data: SlimInfo[] = [
    {
      name: 'Sachin Ind.By the association',
      details:
        'Any person needs oxygen bottle at home or for arrangement of oxygen bottle we will help you without any charge',
      contacts: [
        {
          name: 'Admin',
          mobileNo: '+91-9824058898',
        },
      ],
    },
]
export const oxygen_gujarat_surat_data: Info[] = slimInfoToInfo(data, address);