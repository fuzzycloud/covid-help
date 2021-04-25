import { NextApiRequest, NextApiResponse } from 'next';
import * as Papa from 'papaparse';
import { IndianStatesDistricts } from '../../../data/states';
import * as _ from 'lodash';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const parsed_csv = Papa.parse<{state: string, district: string}>(IndianStatesDistricts, {
    header: true
  });

  if (parsed_csv.errors.length > 0) {
    res.status(500).end('internal server error in parsing data');
  }
  const states = _.chain(parsed_csv.data).map(x => x.state).uniq().value();
  res.status(200).json(states);
}
