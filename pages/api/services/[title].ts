import { NextApiRequest, NextApiResponse } from 'next';
import { infoToSlimAddresses } from '../../../types/info';
import { serviceRoutes } from '../../../data/routes';

export  default async (req: NextApiRequest, res: NextApiResponse) => {
  const { title } = req.query;
  const route = serviceRoutes.find(x => x.title.toLowerCase() === title);
  if (route) {
    const data = await route.data();
    res.status(200).json(infoToSlimAddresses(data));
  } else {
    res.status(500).end(`Can't find route`);
  }
};
