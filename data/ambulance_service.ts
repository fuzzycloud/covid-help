import { Info } from '../types/info';
import { ambulance_gujarat_ahmedabad_data } from './ambulance/gujarat/ahmedabad';
import { ambulance_maharashtra_nagpur_data } from './ambulance/maharashtra/nagpur';
// import{ ambulance_maharashtra_nagpur_data} from './ambulance/maharashtra/nagpur';
export const ambulance_service_data: Info[] = [
  ...ambulance_gujarat_ahmedabad_data,
  ...ambulance_maharashtra_nagpur_data
  // put Nagpur data here....
  // ...ambulance_maharashtra_nagpur_data,
];
