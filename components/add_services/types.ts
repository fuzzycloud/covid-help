export type Address = {
  address_line?: string;
  address_line2?: string;
  district: string;
  state: string;
  country: string;
};

export type FormInput = {
  name: string;
  details?: string;
  address: Address;
  service: string;
  contacts: Contact[];
};

type Contact = {
  name: string;
  mobileNo: string;
};
