import {
  Info,
  SlimAddress,
  SlimInfo,
  slimInfoToInfo,
} from '../../../types/info';

const address: SlimAddress = {
  city: 'Surat',
  state: 'Gujarat',
  country: 'India',
};

const data: SlimInfo[] = [
  {
    name: 'patidar sweets and catress',
    details:
      'Free tiffin service from 10th April.  Please register name and address before 9 AM in morning and 5 PM in evening',

    contacts: [
      {
        name: 'kishorbhai trapasiya',
        mobileNo: '+91-9377784894',
      },
      {
        name: 'maganbhai koladiya',
        mobileNo: '+91-9824110048',
      },
    ],
  },
];
export const tiffin_gujarat_surat_data: Info[] = slimInfoToInfo(data, address);
