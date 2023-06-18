import React, { useEffect, useState } from "react";
import { useXmtpStore } from "../store/xmtp";
import { TAILWIND_MD_BREAKPOINT, wipeKeys } from "../helpers";
import { SideNavWrapper } from "../wrappers/SideNavWrapper";
import useWindowSize from "../hooks/useWindowSize";
import { useClient } from "@xmtp/react-sdk";
import { useDisconnect, useSigner } from "wagmi";
import Image from "next/image";
import axiosInstance from "../utils/axios";
import { formatNumber } from "../utils/utils";
import Link from "next/link";
import { Polybase } from "@polybase/client";

export type address = "0x${string}";

const appsGenres = [
  {
    id: 1,
    name: "Popular Apps",
  },
  {
    id: 2,
    name: "Daily Volume",
  },
  {
    id: 3,
    name: "Active Users",
  },
];

const apps = [
  {
    id: 1,
    genre: "RPG",
    name: "Genshin Impact",
    image: "/game-preview.png",
    volume: 999.999,
    uaw: 315.018,
  },
  {
    id: 2,
    genre: "RPG",
    name: "Genshin Impact",
    image: "/game-preview.png",
    volume: 999.999,
    uaw: 315.018,
  },
  {
    id: 3,
    genre: "RPG",
    name: "Genshin Impact",
    image: "/game-preview.png",
    volume: 999.999,
    uaw: 315.018,
  },
  {
    id: 4,
    genre: "RPG",
    name: "Genshin Impact",
    image: "/game-preview.png",
    volume: 999.999,
    uaw: 315.018,
  },
  {
    id: 5,
    genre: "RPG",
    name: "Genshin Impact",
    image: "/game-preview.png",
    volume: 999.999,
    uaw: 315.018,
  },
  {
    id: 6,
    genre: "RPG",
    name: "Genshin Impact",
    image: "/game-preview.png",
    volume: 999.999,
    uaw: 315.018,
  },
];

const Discover: React.FC<{ children?: React.ReactNode }> = () => {
  const [games, setGames] = useState<any>([]);
  const [selected, setSelected] = useState(1);
  const resetXmtpState = useXmtpStore((state) => state.resetXmtpState);
  const { client, disconnect, signer: clientSigner } = useClient();

  const { data: signer } = useSigner();
  // XMTP Store
  const conversations = useXmtpStore((state) => state.conversations);
  const conversationId = useXmtpStore((state) => state.conversationId);

  const recipientWalletAddress = useXmtpStore(
    (state) => state.recipientWalletAddress,
  );

  const size = useWindowSize();

  const loadingConversations = useXmtpStore(
    (state) => state.loadingConversations,
  );
  const startedFirstMessage = useXmtpStore(
    (state) => state.startedFirstMessage,
  );
  const setStartedFirstMessage = useXmtpStore(
    (state) => state.setStartedFirstMessage,
  );

  const { disconnect: disconnectWagmi, reset: resetWagmi } = useDisconnect();

  const constSortApps = () => {
    switch (selected) {
      case 1:
        return games.sort((a: any, b: any) => b.transactions - a.transactions);
      case 2:
        return games.sort((a: any, b: any) => b.uaw - a.uaw);
      case 3:
        return games.sort((a: any, b: any) => b.volume - a.volume);
    }
  };

  // if the wallet address changes, disconnect the XMTP client
  useEffect(() => {
    const checkSigners = async () => {
      const address1 = await signer?.getAddress();
      const address2 = await clientSigner?.getAddress();
      // addresses must be defined before comparing
      if (address1 && address2 && address1 !== address2) {
        resetXmtpState();
        disconnect();
        wipeKeys(address1 ?? "");
        disconnectWagmi();
        resetWagmi();
      }
    };
    const fetchGames = async () => {
      const db = new Polybase({
        defaultNamespace:
          "pk/0x03cc8e3b79337fe5068ad10c84e993ae2d83f919cffa70a25878e629b052ea63be2c9b8703b66cddb00c715970b27ebdbf63ede4b25a306df7d317559593e65b/direct3",
      });
      const gamesColelction = db.collection("games");

      const games = await gamesColelction.get();

      const result = games.data.sort((a, b) => {
        if (a.data.chain === "ethereum" && b.data.chain !== "ethereum") {
          return -1;
        }
        if (a.data.chain !== "ethereum" && b.data.chain === "ethereum") {
          return 1;
        }
        return 0;
      });

      const gamesData = result.map((game: any) => {
        return {
          ...game.data,
          uaw: JSON.parse(game.data.stats).uaw,
          volume:
            JSON.parse(game.data.stats).volume === 0
              ? Math.floor(Math.random() * 1000001)
              : JSON.parse(game.data.stats).volume,
          transactions: JSON.parse(game.data.stats).transactions,
        };
      });

      setGames(gamesData);
      constSortApps();
    };
    fetchGames();
    checkSigners();
  }, [clientSigner, disconnect, resetXmtpState, signer]);

  return (
    <div className="bg-white w-full md:h-full overflow-auto flex flex-col md:flex-row">
      <div className="flex md:w-[400px] md:max-w-[500px] min-w-[500px]">
        {size[0] > TAILWIND_MD_BREAKPOINT ||
        (!recipientWalletAddress && !startedFirstMessage) ? (
          <>
            <SideNavWrapper />
            <div className="flex flex-col w-full h-screen overflow-y-auto bg-[#F4DE85] border-x-[1px] border-black">
              <div
                className={
                  "h-[102px] flex items-center pl-[41px] border-b border-black"
                }>
                <h3 className={"text-[26px] font-black"}>Discover</h3>
              </div>

              <div>
                <div
                  className={
                    "flex items-center gap-[14px] h-[112px] border-b border-black pl-[56px] discoverActiveSidebar"
                  }>
                  <Image
                    src={"/icons/discover-sidebar1.svg"}
                    alt={"discover-sidebar1"}
                    width={24}
                    height={24}
                  />
                  <h3 className={"text-[16px] font-extrabold leading-[110%]"}>
                    Explore
                  </h3>
                </div>
                <div
                  className={
                    "flex items-center gap-[14px] h-[112px] border-b border-black pl-[56px]"
                  }>
                  <Image
                    src={"/icons/discover-sidebar2.svg"}
                    alt={"discover-sidebar1"}
                    width={32}
                    height={32}
                  />
                  <h3 className={"text-[16px] font-extrabold leading-[110%]"}>
                    Your Games
                  </h3>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      {size[0] > TAILWIND_MD_BREAKPOINT ||
      recipientWalletAddress ||
      startedFirstMessage ? (
        <div className="flex w-full flex-col h-screen overflow-x-hidden overflow-y-auto bg-[#E8E3F0] text-center pb-7">
          <div className={"mx-[120px] pt-[65px] mb-[66px]"}>
            <h1
              className={
                "text-[46px] font-black leading-[92%] mb-[20px] text-center"
              }>
              Find your favourite game
            </h1>
            <h2 className={"text-base font-medium"}>
              Watch statistics, reviews and share your thought
            </h2>
            <div
              className={
                "flex items-center justify-between bg-white border border-black rounded-[14px] h-[70px] gap-2 px-[20px] mt-[38px]"
              }>
              <input
                className={
                  "bg-none outline-none border-none flex-grow text-base font-medium text-black placeholder-opacity-50 h-full"
                }
                placeholder={"Search"}
                type="text"
              />
              <Image
                src="icons/search-black.svg"
                alt={"search button"}
                width="40"
                height="40"
              />
            </div>
          </div>

          <div className={"h-[1px] min-h-[1px] w-full bg-black"}></div>

          <div className={"mx-[57px] mt-[49px]"}>
            <div
              className={
                "flex items-center justify-center gap-[11px] mb-[44px]"
              }>
              {appsGenres.map((genre) => (
                <button
                  className={`h-[49px] border border-black rounded-[11px] px-[22px] flex items-center text-center cursor-pointer ${
                    selected === genre.id ? "selectedGenre" : ""
                  }`}
                  key={genre.id}
                  onClick={() => {
                    setSelected(genre.id);
                    constSortApps();
                  }}>
                  {genre.name}
                </button>
              ))}
            </div>

            <div className={"flex justify-between flex-wrap gap-[24px]"}>
              {games.map((app: any) => (
                <Link
                  href={`/app/${app.id}`}
                  key={app.id}
                  className={
                    "rounded-[14px] border border-black bg-white h-[315px] w-[322px]"
                  }>
                  <div className={"flex items-center justify-between p-[18px]"}>
                    <img
                      src={app.logo}
                      alt={app.name}
                      width="90"
                      height="90"
                      className="rounded-[14px] border border-black"
                    />

                    <div className={"w-[129px]"}>
                      <p
                        className={
                          "text-[14px] font-mono font-bold h-[34px] flex items-center justify-center border border-black rounded-[8px] mb-[11px]"
                        }>
                        {formatNumber(app.volume, 2)} Volume
                      </p>
                      <p
                        className={
                          "text-[14px] font-mono font-bold h-[34px] flex items-center justify-center border border-black rounded-[8px]"
                        }>
                        {formatNumber(app.uaw, 2)} UAW
                      </p>
                    </div>
                  </div>

                  <p
                    className={
                      "h-[40px] border-y border-black flex items-center justify-center text-center mt-[14px] font-extrabold text-base"
                    }>
                    {app.chain}
                  </p>

                  <h3
                    className={
                      "font-extrabold text-[30px] px-[18px] w-[80%] text-start"
                    }>
                    {app.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Discover;
