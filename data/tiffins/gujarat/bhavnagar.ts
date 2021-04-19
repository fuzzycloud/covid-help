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
        name: 'BJP Bhavnagar - Rajeev Pandya',
        details:
          'Free tiffin service from 13th April. Please register name and address before 9 AM in morning and 5 PM in evening',
        
        contacts: [
          {
            name: 'Mahipatbhai Trivedi',
            mobileNo: '+91-9377537100',
          },
          {
            name: 'Pranjalbhai Desai',
            mobileNo: '+91-7567260638',
          },
          {
            name: 'Hardipbhai Jambucha',
            mobileNo: '+91-9879535300',
          },
        ],
      },

      {
        name: 'Bhavnagar Jain swetambar murti  - jayukaka tanawala ',
        details:
          'Free tiffin service from 9th March. if anyone interested to donate in this fund contact our head office',
        
        contacts: [
          {
            name: 'office',
            mobileNo: '0278-2427384',
          },
          {
            name: 'Jayukaka tanawala',
            mobileNo: '+91-9825205366',
          },
          {
            name: 'Sanjaybhai thar',
            mobileNo: '+91-9427 558 072',
          },
          {
            name: 'Pareshbhai shah',
            mobileNo: '+91-9377 525 151',
          },
          {
            name: 'Rushabhbhai shah',
            mobileNo: '+91-98251 73742',
          },
          {
            name: 'Kepibhai',
            mobileNo: '+91-9825474962',
          },
        ],
      },

      
      {
        name: 'Ramvadi ',
        details:
          'Free tiffin service from 9th April.  Please register name and address before 9 AM in morning and 5 PM in evening',
        
        contacts: [
          {
            name: 'office',
            mobileNo: '02846-2420406',
          },
          {
            name: 'office',
            mobileNo: '02846-2515706',
          },
          {
            name: 'prabhakarbhai vyas',
            mobileNo: '+91-9925574380',
          },
          {
            name: 'kuntal trivedi',
            mobileNo: '+91-9879557075',
          },
        ],
      },
      {
        name: ' Satkarma Jivdaya ',
        details:
          'Tiffin service will be provided free of cost at night for meals to the patients admitted to Bhavnagar Civil Hospital. Phone for Tiffin from 5 to 7 p.m. ',
        
        contacts: [
          {
            name: ' Hareshbhai B. Mer ',
            mobileNo: ' +91-9825466868',
          },
        ],
      },
      {
        name: 'Shree Rajanibhai Kanada group',
        details:
          'Tiffin service will be provided free of cost in the area of 3km from Don Chock.Register your meal before 10 AM & 5PM.',
        
        contacts: [
          {
            name: ' Aartiben Soni ',
            mobileNo: ' +91-9974146014',
          },
        ],
      },
];
export const tiffin_gujarat_bhavnagar_data: Info[] = slimInfoToInfo(
  data,
  address
);