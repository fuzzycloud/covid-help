import { NextApiRequest, NextApiResponse } from 'next';
import { Info, SlimAddress } from '../../../types/info';
import { serviceRoutes } from '../../../data/routes';

const infoToSlimAddresses: (infos: Info[]) => SlimAddress[] = (
  infos: Info[]
) => {
  return infos.map((x) => ({
    city: x.address.city,
    state: x.address.state,
    country: x.address.country,
  }));
};

export  default async (req: NextApiRequest, res: NextApiResponse) => {
  const { title } = req.query;
  const route = serviceRoutes.find(x => x.title.toLowerCase() === title);
  if (route) {
    const data = await route.data();
    const slimData = infoToSlimAddresses(data);
    return res.status(200).json(slimData);
  } else {
    return res.status(500).end(`Can't find route`);
  }
};
