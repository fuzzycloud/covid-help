import { Info } from '../types/info';
import { oxygen_gujarat_bhavnagar_data } from './oxygen/gujarat/bhavnagar';
import { oxygen_gujarat_rajkot_data } from './oxygen/gujarat/rajkot';
import { oxygen_up_lacknow_data } from './oxygen/uttar_pradesh/lucknow';

export const oxygen_service_data: Info[] = [
  ...oxygen_up_lacknow_data,
  ...oxygen_gujarat_bhavnagar_data,
  ...oxygen_gujarat_rajkot_data,
];
