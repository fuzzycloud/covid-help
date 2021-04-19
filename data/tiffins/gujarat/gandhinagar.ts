
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
            name: ' admin ',
            mobileNo: ' +91-8141743241',
          },
          {
            name: ' admin ',
            mobileNo: ' +91-9157637877',
          },
        ],
      },
]
export const tiffin_gujarat_gandhinagar_data: Info[] = slimInfoToInfo(
  data,
  address
);