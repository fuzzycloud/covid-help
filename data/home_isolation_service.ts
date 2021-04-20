import { Info } from '../types/info';
import { home_isolation_gujarat_ahmedabad_data } from './home_isolation/gujarat/ahmedabad';
import { home_isolation_gujarat_bhavnagar_data } from './home_isolation/gujarat/bhavnagar';
import { home_isolation_gujarat_rajkot_data } from './home_isolation/gujarat/rajkot';

export const home_isolation_service_data: Info[] = [
  ...home_isolation_gujarat_bhavnagar_data,
  ...home_isolation_gujarat_ahmedabad_data,
  ...home_isolation_gujarat_rajkot_data
];
