import { NextApiRequest, NextApiResponse } from 'next';
import * as Papa from 'papaparse';
import { IndianStatesDistricts } from '../../../data/states';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {statename} = req.query;
  const data = Papa.parse<{state: string, district: string}>(IndianStatesDistricts, {
    header: true
  });

  if (data.errors.length > 0) {
    res.status(500).end('internal server error in parsing data');
  }
  const districts = data.data.filter(x => x.state === statename).map(x => x.district);
  res.status(200).json(districts);
}
