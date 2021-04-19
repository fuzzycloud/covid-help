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
    name: 'Gurukrupa foundation - Kantaben kntilal Shah',
    details:
      'only for jain cast and available areas are naranpura, sola road, ghatlodiya , nirnaynagar , gota , bopal , cetelite',
    
    contacts: [
      {
        name: 'gurukrupa foundation',
        mobileNo: '+91-9558354715',
      },
      {
        name: 'gaurang mehta',
        mobileNo: '+91-9898424360',
      },
      {
        name: 'bhavesh jodhani',
        mobileNo: '+91-9824322334',
      },
      {
        name: 'manish doshi',
        mobileNo: '+91-9558046263',
      },
      {
        name: 'nilesh gandhi',
        mobileNo: '+91-8980816551',
      },
      {
        name: 'bimal chokjawala',
        mobileNo: '+91-9925033059',
      },
      {
        name: 'jatin khandhar',
        mobileNo: '+91-9825610655',
      },
      {
        name: 'sanjay shah',
        mobileNo: '+91-9825334559',
      },
      {
        name: 'pinkal shah',
        mobileNo: '+91-9825013563',
      },
      {
        name: 'nikunj shah',
        mobileNo: '+91-8320148554',
      },
    ],
  },
  {
    name: 'Hotel Skyland',
    details:
      'home food available only in 100 rupees free home delivery for quarantine people within 4 km',
    
    contacts: [
      {
        name: 'office',
        mobileNo: '+91-27172 30429',
      },
      {
        name: 'office',
        mobileNo: '+91-98250 19941',
      },
      {
        name: 'office',
        mobileNo: '+91-79845 54612',
      },
    ],
  },

  {
    name: 'Free tiffin service',
    details:
      'Free tiffin service .  Please register name and address up to 10pm so we can provide tiffin next day',
   
    contacts: [
      {
        name: 'Call here for register',
        mobileNo: '+91-8490891966',
      },
      {
        name: 'other info',
        mobileNo: '+91-9327031186',
      },
      {
        name: 'other info',
        mobileNo: '+91-9824058053',
      },
      {
        name: 'other info',
        mobileNo: '+91-9375954687',
      },
      {
        name: 'other info',
        mobileNo: '+91-9979882005',
      },
    ],
  },
  {
    name: ' Apoorvaa',
    details:
      'We are available for food delivery.Please register your address and contact number on below number.Interested people can join or donate. ',
    
    contacts: [
      {
        name: ' Shri Apurva Bhagat ',
        mobileNo: ' +91-9825318192',
      },
    ],
  },
];
export const tiffin_gujarat_ahmedabad_data: Info[] = slimInfoToInfo(
  data,
  address
);