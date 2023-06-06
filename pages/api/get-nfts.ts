import { NextApiRequest, NextApiResponse } from 'next';
import { Polybase } from '@polybase/client';
import { NetworkNames, Sdk, randomPrivateKey } from 'etherspot';
import Redis from 'ioredis';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>,) {

    const address = req.query.address as string;

    const redisUrl = process.env.NEXT_PUBLIC_REDIS as string;

    const redis = new Redis(redisUrl);

    const cached = await redis.get(`nfts:${address}`);

    if (cached) {
        res.status(200).json(JSON.parse(cached));
        return;
    }

    const PRIVATE_KEY = randomPrivateKey();
    const sdk = new Sdk(PRIVATE_KEY, {
        networkName: NetworkNames.Mainnet
    });

    const data = await sdk.getNftList({
        account: address,
    });
    const nfts = data.items.map((item) => {
        return {
            contractName: item.contractName,
            contractSymbol: item.contractSymbol,
            contractAddress: item.contractAddress.toLowerCase(),
            tokenType: item.tokenType,
            nftVersion: item.nftVersion,
            nftDescription: item.nftDescription,
            balance: +item.balance,
            nfts: item.items.map((nft) => {
                let logo = nft.image;
                if (nft.image.startsWith('ipfs')) {
                    const def = nft.image.substring(nft.image.lastIndexOf('/'));
                    logo = `https://ipfs.io/ipfs${def}`;
                }
                return {
                    tokenId: +nft.tokenId,
                    name: nft.name,
                    amount: nft.amount,
                    image: logo,
                };
            }),
        };
    });

    await redis.set(`nfts:${address}`, JSON.stringify(nfts), 'EX', 60 * 60 * 2);

    res.status(200).json(nfts);
}