import { NextApiRequest, NextApiResponse } from 'next';
import { slimServiceRoutes } from '../../../data/routes';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await slimServiceRoutes();
  res
    .status(200)
    .json(data);
};
