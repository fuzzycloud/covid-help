import { Info } from '../types/info';
import { tiffin_gujarat_ahmedabad_data } from './tiffins/gujarat/ahmedabad';
import { tiffin_gujarat_bhavnagar_data } from './tiffins/gujarat/bhavnagar';
import { tiffin_gujarat_gandhinagar_data } from './tiffins/gujarat/gandhinagar';
import { tiffin_gujarat_mehsana_data } from './tiffins/gujarat/mehsana';
import { tiffin_gujarat_rajkot_data } from './tiffins/gujarat/rajkot';
import { tiffin_gujarat_surat_data } from './tiffins/gujarat/surat';
import { tiffin_gujarat_dholka_data } from './tiffins/gujarat/dholka';

export const tiffin_service_data: Info[] = [
  ...tiffin_gujarat_bhavnagar_data,
  ...tiffin_gujarat_surat_data,
  ...tiffin_gujarat_rajkot_data,
  ...tiffin_gujarat_ahmedabad_data,
  ...tiffin_gujarat_gandhinagar_data,
  ...tiffin_gujarat_mehsana_data,
  ...tiffin_gujarat_dholka_data,
];
