import React, { useEffect, useState } from "react";
import { useXmtpStore } from "../store/xmtp";
import { TAILWIND_MD_BREAKPOINT, wipeKeys } from "../helpers";
import { SideNavWrapper } from "../wrappers/SideNavWrapper";
import useWindowSize from "../hooks/useWindowSize";
import { useClient } from "@xmtp/react-sdk";
import { useDisconnect, useSigner } from "wagmi";
import Image from "next/image";

export type address = "0x${string}";

const appsGenres = [
  {
    id: 1,
    name: "Popular Apps",
  },
  {
    id: 2,
    name: "Volume 24HR",
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
    checkSigners();
  }, [clientSigner, disconnect, resetXmtpState, signer]);

  return (
    <div className="bg-white w-full md:h-full overflow-auto flex flex-col md:flex-row">
      <div className="flex md:w-[400px] md:max-w-[400px] min-w-[400px]">
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
                  onClick={() => setSelected(genre.id)}>
                  {genre.name}
                </button>
              ))}
            </div>

            <div className={"flex justify-between flex-wrap gap-[24px]"}>
              {apps.map((app, id) => (
                <div
                  key={id}
                  className={
                    "rounded-[14px] border border-black bg-white h-[315px]"
                  }>
                  <div className={"flex items-center justify-between p-[18px]"}>
                    <Image
                      src={app.image}
                      alt={app.name}
                      width="90"
                      height="90"
                    />

                    <div className={"w-[129px]"}>
                      <p
                        className={
                          "text-[14px] font-medium h-[34px] flex items-center justify-center border border-black rounded-[8px] mb-[11px]"
                        }>
                        {app.volume} Volume
                      </p>
                      <p
                        className={
                          "text-[14px] font-medium h-[34px] flex items-center justify-center border border-black rounded-[8px]"
                        }>
                        {app.uaw} UAW
                      </p>
                    </div>
                  </div>

                  <p
                    className={
                      "h-[40px] border-y border-black flex items-center justify-center text-center mt-[14px] font-extrabold text-base"
                    }>
                    {app.genre}
                  </p>

                  <h3
                    className={
                      "font-extrabold text-[30px] px-[18px] w-[80%] text-start"
                    }>
                    {app.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Discover;
