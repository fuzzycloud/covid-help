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
      name: 'Jito Bhavnagar',
      details:
        'Oxygen bank started from 16/04/2021.Each family residing in Bhavnagar will be given 10 liters (15 cubic meters, 2 bottles of oxygen free of charge (Rs. 1000 / - on refundable deposit).The bottle requires a patients Aadhaar card and a doctors prescription.Time 10Am to 7Pm. take bottle from Dada Saheb Jain derasar,kala nala, Bhavnagar.',
      contacts: [
        {
          name: 'admin',
          mobileNo: '+91-9376871873 , 0278-2425322',
        },
      ],
    },
]
export const oxygen_gujarat_bhavnagar_data: Info[] = slimInfoToInfo(data, address);