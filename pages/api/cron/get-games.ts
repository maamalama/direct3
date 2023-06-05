import { NextApiRequest, NextApiResponse } from 'next';
import axiosInstance from '../../../utils/axios';
import { Polybase } from '@polybase/client';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>,) {
    const db = new Polybase({
        defaultNamespace: "pk/0x3b0f4628019df36336611abe06383c388bb1e4d52e6c9c5ebbec84850b8d985792af0377c1fadb20c45d882c361102ee36839a905a009adb594e019ac53faf3a/direct3",
    });
    const gamesColelction = db.collection('games');


    const { data } = await axiosInstance.get(`https://api.dappradar.com/4tsxo4vuhotaojtl/dapps?chain=ethereum&page=1&resultsPerPage=50`,
        {
            headers: {
                'X-BLOBR-KEY': process.env.NEXT_PUBLIC_DAPPRADAR
            }
        });


    const records = await Promise.all(data.results.map(async (game: any) => {
        const id = uuidv4();
        const chain = game.chains ? JSON.stringify(game.chains) : '';
        const category = game.categories ? JSON.stringify(game.categories) : '';
        const data = await gamesColelction.create([
            id,
            game.name || '',
            game.description || '',
            game.fullDescription || '',
            game.logo || '',
            game.website || '',
            chain,
            category
        ]);
        return 1;
    }));

    console.log(records.length);

    res.status(200).json(data);
}