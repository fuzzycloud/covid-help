
  import {
    Info,
    SlimAddress,
    SlimInfo,
    slimInfoToInfo,
  } from '../../../types/info';
  
  const address: SlimAddress = {
    city: 'Gandhinagar',
    state: 'Gujarat',
    country: 'India',
  };
  
  const data: SlimInfo[] = [
    {
        name: ' Shikshapatri Foundation',
        details:
          'We are available for food delivery.Please register your address and contact number on below number before one day. ',
        
        contacts: [
          {
            name: ' Admin ',
            mobileNo: ' +91-9499499490',
          },
        ],
      },
      {
        name: 'Radhe Radhe Parivar',
        details:
          'We are available for food delivery.Please register your address and contact number on below number.Interested people can join or donate. ',
        
        contacts: [
          {
            name: ' Admin ',
            mobileNo: ' +91-8141743241',
          },
          {
            name: ' Admin ',
            mobileNo: ' +91-9157637877',
          },
        ],
      },
      {
        name: 'Bansari',
        details:
          'We are available for food delivery.Please just send your Medical details and Address on this WhatsApp and we will help you. ',
        
        contacts: [
          {
            name: ' Admin ',
            mobileNo: ' +91-9904142834',
          },
          {
            name: ' Admin ',
            mobileNo: ' +91-9624796807',
          },
        ],
      },
]
export const tiffin_gujarat_gandhinagar_data: Info[] = slimInfoToInfo(
  data,
  address
);