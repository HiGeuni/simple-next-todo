import type { NextApiRequest, NextApiResponse } from 'next';
import { JsonControl } from '../../utils/jsonController';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const data = await JsonControl.read();
    console.log(data);
    res.status(200).json({ message: data });
    return;
  }
  if (req.method === 'POST') {
    const val = req.body.val;
    const data = await JsonControl.create(val);
    res.status(200).json({ message: data });
    return;
  }
  return res.status(500);
};
