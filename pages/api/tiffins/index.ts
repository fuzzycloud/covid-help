import { NextApiRequest, NextApiResponse } from 'next';
import { infoToSlimAddresses } from '../../../types/info';
import { tiffin_service_data } from '../../../data/tiffin_service';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(infoToSlimAddresses(tiffin_service_data));
};
