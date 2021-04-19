import { Info } from '../types/info';
import { home_isolation_gujarat_ahmedabad_data } from './home_isolation/gujarat/ahmedabad';
import { home_isolation_gujarat_bhavnagar_data } from './home_isolation/gujarat/bhavnagar';

export const home_isolation_service_data: Info[] = [
  ...home_isolation_gujarat_bhavnagar_data,
  ...home_isolation_gujarat_ahmedabad_data,
];
