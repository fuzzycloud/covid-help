import {
    Info,
    SlimAddress,
    SlimInfo,
    slimInfoToInfo,
  } from '../../../types/info';
  
  const address: SlimAddress = {
    city: 'Nagpur',
    state: 'Maharashtra',
    country: 'India',
  };
  
  const data: SlimInfo[] = [
    {
      name: 'Ambulance Service',
      details:
        'In case of Emergency',
      contacts: [
        {
          name: 'Abhishek Rana',
          mobileNo: '+91-9890889911',
        },
  
        {
          name: 'New Era',
          mobileNo: '+91-7721988001',
        },
        {
            name: 'Shahid',
            mobileNo: '+91-9326477719',
          },
    
          {
            name: 'Prashant',
            mobileNo: '+91-9850311168',
          },
          {
            name: 'D.K.Sudip',
            mobileNo: '+91-9112066994',
          },
    
          {
            name: 'Sagar Sharma',
            mobileNo: '+91-9766364606/+91-8669173286',
          },
          {
            name: 'Mr.Patil',
            mobileNo: '+91-9021830562',
          },
    
          {
            name: 'Vijay Dhadse',
            mobileNo: '+91-9923800111/+91-9423605091',
          },
          {
            name: 'Life First Service',
            mobileNo: '+91-7888008575/+91-9511607824',
          },
          
      ],
    },
  ];
  
  export const ambulance_maharashtra_nagpur_data: Info[] = slimInfoToInfo(
    data,
    address
  );
  