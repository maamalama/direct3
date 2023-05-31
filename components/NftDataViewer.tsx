import { useEtherspotNfts } from "@etherspot/transaction-kit";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function NftDataViewer() {
  const { address: walletAddress } = useAccount();
  const { getAccountNfts } = useEtherspotNfts(1);
  const [accountNfts, setAccountNfts] = useState<any[]>([]);
  const performFetch = async () => {
    const nftsResult = await getAccountNfts(walletAddress);
    setAccountNfts(nftsResult);
  };

  useEffect(() => {
    performFetch();
  });

  return (
    <div>
      <div>Step 3: Get the account NFT data!</div>

      <button onClick={() => performFetch()}>Read account NFTs</button>

      <div>NFTs: {accountNfts.length}</div>
    </div>
  );
}
