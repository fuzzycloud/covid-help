import { Info } from '../types/info';
import { aaya_service_data } from './aaya_service';
import { ambulance_service_data } from './ambulance_service';
import { beds_service_data } from './beds_service';
import { drs_service_data } from './drs_service';
import { home_isolation_service_data } from './home_isolation_service';
import { mental_health_service_data } from './mental_health_service';
import { oxygen_service_data } from './oxygen_service';
import { plasma_service_data } from './plasma_service';
import { tiffin_service_data } from './tiffin_service';

export const serviceRoutes: Array<{
  title: string;
  route: string;
  data: () => Promise<Array<Info>>;
}> = [
    {
      title: 'Tiffins',
      route: '/tiffins',
      data: () => Promise.resolve(tiffin_service_data),
    },
    {
      title: 'Aaya or Nanny',
      route: '/aaya',
      data: () => Promise.resolve(aaya_service_data),
    },
    {
      title: 'Ambulance',
      route: '/ambulance',
      data: () => Promise.resolve(ambulance_service_data),
    },
    {
      title: 'Doctors on call',
      route: '/drs',
      data: () => Promise.resolve(drs_service_data),
    },
    {
      title: 'Mental Health',
      route: '/mental-health',
      data: () => Promise.resolve(mental_health_service_data),
    },
    {
      title: 'Oxygen',
      route: '/oxygen',
      data: () => Promise.resolve(oxygen_service_data),
    },
    {
      title: 'Plasma',
      route: '/plasma',
      data: () => Promise.resolve(plasma_service_data),
    },
    {
      title: 'Beds',
      route: '/beds',
      data: () => Promise.resolve(beds_service_data),
    },
    {
      title: 'Home Isolation',
      route: '/home-isolation',
      data: () => Promise.resolve(home_isolation_service_data),
    },
  ];


export const slimServiceRoutes =  () => Promise.resolve(serviceRoutes.map(x => ({title: x.title, route: x.route})));
