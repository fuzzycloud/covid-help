import * as _ from 'lodash';
import { serviceRoutes } from '../data/routes';

export type Address = {
  address_line?: string;
  address_line2?: string;
  city: string;
  state: string;
  country: string;
};

export type Contact = {
  name: string;
  mobileNo: string;
};

export type Info = {
  name: string;
  details?: string;
  address: Address;
  contacts: Contact[];
};

export type AddressLines = Pick<Address, 'address_line' | 'address_line2'>;
export type SlimInfo = Omit<Info, 'address'> & { address?: AddressLines };

export type SlimAddress = Pick<Address, 'city' | 'state' | 'country'>;



export const infoToPath: (service: string) => Promise<{ params: SlimAddress }[]> = async (
  service
) => {
  const infos = await serviceRoutes.find(x => x.title.toLowerCase() === service).data();
  const addresses = _.chain(infos)
    .map(
      (x) =>
        ({
          state: x.address.state.toLowerCase(),
          city: x.address.city.toLowerCase(),
          country: x.address.country.toLowerCase(),
          service
        })
    )
    .uniqBy((x) => `${service}-${x.country}-${x.state}-${x.city}`)
    .value();

  return _.map(addresses, (x) => ({
    params: x,
  }));
};

export const infoByParams= async (
  params : SlimAddress & {service: string},
) => {
  // This logic must be optmized and data should come from server.
  const data = await serviceRoutes.find(x => x.title.toLowerCase() === params.service).data();
  return _.chain(data)
    .filter(
      (x) =>
        x.address.city.toLowerCase() === params.city.toLowerCase() &&
        x.address.state.toLowerCase() === params.state.toLowerCase()
    )
    .uniqBy((x) => x.name)
    .value();
};

export const slimInfoToInfo = (data: SlimInfo[], address) => {
  return data.map((x) => ({
    ...x,
    address: { ...x.address, ...address },
  }));
};
