
  import {
    Info,
    SlimAddress,
    SlimInfo,
    slimInfoToInfo,
  } from '../../../types/info';
  
  const address: SlimAddress = {
    city: 'Mehsana',
    state: 'Gujarat',
    country: 'India',
  };
  
  const data: SlimInfo[] = [
    {
        name: ' Seva sankalp ',
        details:
          'Tiffin service for mahesana home quarantine patient. Regular charge 50Rs. & Token charge for economically weaker class 10Rs. Register your phone number with address and corona positive report before one day.Time: Morning 8 to 10. ',
        
        contacts: [
          {
            name: ' yashodharbhai',
            mobileNo: ' +91-9974063733',
          },
          {
            name: ' Nitinbhai',
            mobileNo: ' +91-9408515335',
          },
          {
            name: ' Dipakbhai',
            mobileNo: ' +91-9426070618',
          },
        ],
      },
]
export const tiffin_gujarat_mehsana_data: Info[] = slimInfoToInfo(
  data,
  address
);