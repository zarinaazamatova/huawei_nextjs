import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'cookies-next';
const geoip = require('geoip-lite');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const ip = req.socket.remoteAddress;
  const geo = geoip.lookup('46.17.46.213');
  setCookie('country', geo.country);
  res.status(200).json({ country: geo ? geo.country : null });
}
