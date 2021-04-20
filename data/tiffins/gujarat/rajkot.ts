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
        name: 'JBO foods',
        details: 'Lunch Delivery ( time for Delivery 1:15pm to 2:30pm)',
       
        contacts: [
          {
            name: 'Rupal Doshi',
            mobileNo: '+91-92657 79818 ,+91-919265779818',
          },
          {
            name: 'Kashmiraben Mehta',
            mobileNo: '+91-919998363102',
          },
          {
            name: 'MANISHA VORA',
            mobileNo: '+91-9510698274,+91-9510698274',
          },
          {
            name: '𝗦𝗿𝘂𝘀𝗵𝘁𝗶 𝗦𝗵𝗮𝗵',
            mobileNo: '+91-72848 06063,+91-917284806063',
          },
        ],
      },
      {
        name: 'Ketan Mehta - Jain Foods',
        details:
          'We provide Jain food parcels only. Order before min 5 - 6 hours of lunch / dinner.Delivery will be for Lunch (1:30pm - 2:30pm) and Dinner ( 7:00pm - 7:30pm)',
        
        contacts: [
          {
            name: ' Ketan Mehta ',
            mobileNo: ' +91-9408523399 ,  +91-9408046365 , +91-9408523399',
          },
        ],
      },
      {
        name: ' Shila Doshi - Shri Mahavir Tiffin services',
        details: 'We are available for food delivery',
       
        contacts: [
          {
            name: ' Shila Doshi ',
            mobileNo: ' +91-9662954111 , +91-9825795101 , +91-9825795101',
          },
        ],
      },
      {
        name: 'Iskon Rajkot',
        details:
          'Order before 1 day on given WhatsApp number for lunch.Delivery will be (for Lunch) till 01:00pm.',
        
        contacts: [
          {
            name: ' Prasanatma Das ',
            mobileNo: ' +91-8866582398',
          },
          {
            name: ' Shradhavan Das ',
            mobileNo: ' +91-9898165358',
          },
        ],
      },
      {
        name: 'PRP Foundation',
        details:
        'Free food for home quarantine family living in Rajkot as well as for the family of a patient admitted to the hospital from outstation.(Only Lunch) ',
        
        contacts: [
          {
            name: ' Admin ',
            mobileNo: ' +91-9924406653 / +91-9924345678 / +91-7874503365 ',
          },
        ],
      },
      {
        name: 'Rajkot Manav Seva Group',
        details:
          'Free food packet for home quarentine family living in Rajkotas as well as for the family of a patient admitted to the hospital from outstation. ',
        
        contacts: [
          {
            name: 'Rajanbhai Shah',
            mobileNo: ' +91-989822020',
          },
          {
            name: 'pareshbhai Unadakat',
            mobileNo: ' +91-9925751088',
          },
          {
            name: 'Avadhabhai Gondhiya',
            mobileNo: ' +91-9974044444',
          },
          {
            name: 'Asifbhai padharasi',
            mobileNo: ' +91-7878347007',
          },
          {
            name: 'Niravbhai Udeshi',
            mobileNo: ' +91-9898094032',
          },
          {
            name: ' Sagar Shah',
            mobileNo: ' +91-7698645678',
          },
          {
            name: 'Kavanbhai ved',
            mobileNo: ' +91-8401999986',
          },
          {
            name: 'Naranbhai Japada',
            mobileNo: ' +91-9712777712',
          },
          {
            name: 'Bhagirathsinh Jadeja',
            mobileNo: ' +91-8153000098',
          },
        ],
      },
]
export const tiffin_gujarat_rajkot_data: Info[] = slimInfoToInfo(
  data,
  address
);