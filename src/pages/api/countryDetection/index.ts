import { NextApiRequest, NextApiResponse } from 'next';
const geoip = require('geoip-lite');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const ip = req.socket.remoteAddress; //::1
  //   const geo = geoip.lookup(ip);
  const geo = geoip.lookup('123.146.225.254');

  res.status(200).json({ country: geo ? geo.country : null });
}
