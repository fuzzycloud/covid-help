import * as _ from 'lodash';

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

export const infoToSlimAddresses: (infos: Info[]) => SlimAddress[] = (
  infos: Info[]
) => {
  return infos.map((x) => ({
    city: x.address.city,
    state: x.address.state,
    country: x.address.country,
  }));
};

export const infoToPath: (infos: Info[]) => { params: SlimAddress }[] = (
  infos
) => {
  const addresses = _.chain(infos)
    .map(
      (x) =>
        ({
          state: x.address.state.toLowerCase(),
          city: x.address.city.toLowerCase(),
          country: x.address.country.toLowerCase(),
        } as SlimAddress)
    )
    .uniqBy((x) => `${x.country}-${x.state}-${x.city}`)
    .value();

  return _.map(addresses, (x) => ({
    params: x,
  }));
};

export const infoByParams: (params: SlimAddress, data: Info[]) => Info[] = (
  params,
  data
) => {
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
