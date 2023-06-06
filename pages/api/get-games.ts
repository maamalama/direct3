import { NextApiRequest, NextApiResponse } from 'next';
import axiosInstance from '../../utils/axios';
import { Polybase } from '@polybase/client';
import { v4 as uuidv4 } from 'uuid';
import Redis from 'ioredis';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>,) {

    const redisUrl = process.env.NEXT_PUBLIC_REDIS as string;

    const redis = new Redis(redisUrl);

    const cached = await redis.get(`games`);

    if (cached) {
        res.status(200).json(JSON.parse(cached));
        return;
    }

    const db = new Polybase({
        defaultNamespace: "pk/0xa82e197a60581a388eab7a3c6668da651a404ea99073d9cbdfd7d596e2980bb457609498273a1cd3d9c37c613578279dc30192db9ec586c319b07084cd801cf2/direct3",
    });
    const gamesColelction = db.collection('games');


    // const { data } = await axiosInstance.get(`https://api.dappradar.com/4tsxo4vuhotaojtl/dapps?chain=ethereum&page=1&resultsPerPage=50`,
    //     {
    //         headers: {
    //             'X-BLOBR-KEY': process.env.NEXT_PUBLIC_DAPPRADAR
    //         }
    //     });


    const games = await gamesColelction.get();

    await redis.set(`games`, JSON.stringify(games), 'EX', 60 * 60 * 2);

    res.status(200).json(games);
}