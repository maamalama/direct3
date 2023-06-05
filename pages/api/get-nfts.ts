import { NextApiRequest, NextApiResponse } from 'next';
import { Polybase } from '@polybase/client';
import { NetworkNames, Sdk, randomPrivateKey } from 'etherspot';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>,) {

    const address = req.query.address as string;
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

    res.status(200).json(nfts);
}