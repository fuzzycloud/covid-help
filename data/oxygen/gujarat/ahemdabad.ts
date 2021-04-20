import {
    Info,
    SlimAddress,
    SlimInfo,
    slimInfoToInfo,
  } from '../../../types/info';
  
  const address: SlimAddress = {
    city: 'Ahmedabad',
    state: 'Gujarat',
    country: 'India',
  };
  
  const data: SlimInfo[] = [
    {
      name: 'Ahmedabad / Covid Assist',
      details:
        'Oxygen and Refill',
      contacts: [
        {
          name: 'Sejal',
          mobileNo: '+91-9375784857',
        },
        {
            name: 'Bhuyangdev Area',
            mobileNo: '+91-9904018227',
          },
          {
            name: 'Dipen Shah',
            mobileNo: '+91-9825203234',
          },
          {
            name: 'Utpal Shah',
            mobileNo: '+91-9879141117',
          },
          {
            name: 'PranavBhai',
            mobileNo: '+91-9925246680',
          },
          {
            name: 'Aakash Patel',
            mobileNo: '+91-9099902220',
          },
          {
            name: 'Everest Gas',
            mobileNo: '+91-9327437497',
          },
          {
            name: 'Jay',
            mobileNo: '+91-6355718524',
          },
          {
            name: 'Jay',
            mobileNo: '+91-7383472754',
          },
          {
            name: 'Ketan',
            mobileNo: '+91-6353382380',
          },
          {
            name: 'Satish',
            mobileNo: '+91-6355414456',
          },
          {
            name: 'Jay Gayatri',
            mobileNo: '+91-9737276902',
          },
          {
            name: 'QE Healthcare',
            mobileNo: '+91-8128135201',
          },
          {
            name: 'Sunil Patel',
            mobileNo: '+91-9313808905',
          },
          {
            name: 'Abc Surgical & Medical co.',
            mobileNo: '+91-9727273189',
          },
          {
            name: 'Piyush Bopaliya',
            mobileNo: '+91-9349393693',
          },
          {
            name: 'Dipak Shah',
            mobileNo: '+91-9925246679',
          },
          {
            name: 'Tushar Patel',
            mobileNo: '+91-9825333200',
          },
          {
            name: 'Paras Shah',
            mobileNo: '+91-9898006737',
          },
          {
            name: 'Abhi Jain',
            mobileNo: '+91-9408506794',
          },
          {
            name: 'Tata Health',
            mobileNo: '+91-7406928123',
          },

      ],
    },
    
]
export const oxygen_gujarat_ahemdabad_data: Info[] = slimInfoToInfo(data, address);