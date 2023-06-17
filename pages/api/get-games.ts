import { NextApiRequest, NextApiResponse } from 'next';
import axiosInstance from '../../utils/axios';
import { Polybase } from '@polybase/client';
import { v4 as uuidv4 } from 'uuid';
import Redis from 'ioredis';
import { gamesData } from '../../polybase/schema';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>,) {

    const redisUrl = process.env.NEXT_PUBLIC_REDIS as string;

    const redis = new Redis(redisUrl);

    // const cached = await redis.get(`games`);

    // if (cached) {
    //     res.status(200).json(JSON.parse(cached));
    //     return;
    // }

    const db = new Polybase({
        defaultNamespace: "pk/0x03cc8e3b79337fe5068ad10c84e993ae2d83f919cffa70a25878e629b052ea63be2c9b8703b66cddb00c715970b27ebdbf63ede4b25a306df7d317559593e65b/direct3",
    });
    const gamesColelction = db.collection('games');


    // const { data } = await axiosInstance.get(`https://api.dappradar.com/4tsxo4vuhotaojtl/dapps?chain=ethereum&page=1&resultsPerPage=50`,
    //     {
    //         headers: {
    //             'X-BLOBR-KEY': process.env.NEXT_PUBLIC_DAPPRADAR
    //         }
    //     });

    //TODO: add stats

    // await Promise.all(gamesData.results.map(async (game) => {
    //     const stats = JSON.stringify(game.metrics) || '';
    //     await gamesColelction.create([
    //         game.dappId.toString() || uuidv4(),
    //         game.name || '',
    //         game.description || '',
    //         game.fullDescription || '',
    //         game.logo || '',
    //         game.website || '',
    //         game.chains[ 0 ] || '',
    //         game.categories[ 0 ] || '',
    //         stats
    //     ]);
    //     console.log(game.name);
    // }));



    const games = await gamesColelction.get();

    const result = games.data.sort((a, b) => {
        if (a.data.chain === 'ethereum' && b.data.chain !== 'ethereum') {
            return -1;
        }
        if (a.data.chain !== 'ethereum' && b.data.chain === 'ethereum') {
            return 1;
        }
        return 0;
    });


    //await redis.set(`games`, JSON.stringify(result), 'EX', 60 * 60 * 2);

    res.status(200).json(result);
}