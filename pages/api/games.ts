import { Polybase } from '@polybase/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const db = new Polybase({
    defaultNamespace: "pk/0xe349234813f3a7db629e64f549a4c86247738c0fcae61d899dfbcd995e5c00c5bfe94f009ca9184a448607e3ef80c2edc1adc550038ec801e1adc1a1d02df8d4/direct3",
  });
}
