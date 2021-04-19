import {
  Info,
  SlimAddress,
  SlimInfo,
  slimInfoToInfo,
} from '../../../types/info';

const address: SlimAddress = {
  city: 'Dholka',
  state: 'Gujarat',
  country: 'India',
};

const data: SlimInfo[] = [
  {
    name: 'Dholka Yuvak Mandal',
    details:
      'We are available for free food delivery for patient & family of a patient.Please register your address and contact number on below number. Morning(7AM to 10 AM),Evening(3pm to 5pm). ',

    contacts: [
      {
        name: 'Himanjalbhai Trivedi ',
        mobileNo: ' +91-9974135843',
      },
      {
        name: 'Shubhambhai Thakor ',
        mobileNo: ' +91-9537006250',
      },
    ],
  },
];
export const tiffin_gujarat_dholka_data: Info[] = slimInfoToInfo(data, address);
