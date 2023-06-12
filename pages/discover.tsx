import React, { useEffect } from "react";
import { useXmtpStore } from "../store/xmtp";
import { TAILWIND_MD_BREAKPOINT, wipeKeys } from "../helpers";
import { HeaderDropdownWrapper } from "../wrappers/HeaderDropdownWrapper";
import { SideNavWrapper } from "../wrappers/SideNavWrapper";
import useWindowSize from "../hooks/useWindowSize";
import { useClient } from "@xmtp/react-sdk";
import { useDisconnect, useSigner } from "wagmi";
import { ConversationListWrapper } from "../wrappers/ConversationListWrapper";
import Image from "next/image";

export type address = "0x${string}";

const appsGenres = [
  {
    name: "Popular Apps",
  },
  {
    name: "Volume 24HR",
  },
  {
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
      <div className="flex md:w-1/2 md:max-w-md">
        {size[0] > TAILWIND_MD_BREAKPOINT ||
        (!recipientWalletAddress && !startedFirstMessage) ? (
          <>
            <SideNavWrapper />
            <div className="flex flex-col w-full h-screen overflow-y-auto bg-[#F4DE85] border-x-[1px] border-black">
              <HeaderDropdownWrapper />
              <ConversationListWrapper
                setStartedFirstMessage={setStartedFirstMessage}
              />
            </div>
          </>
        ) : null}
      </div>
      {size[0] > TAILWIND_MD_BREAKPOINT ||
      recipientWalletAddress ||
      startedFirstMessage ? (
        <div className="flex w-full flex-col h-screen overflow-hidden bg-[#E8E3F0]">
          <div className={"mx-[120px]"}>
            <h1 className={"testclass"}>Find your favourite game</h1>
            <h2>Watch statistics, reviews and share your thought</h2>
            <div
              className={
                "flex items-center justify-between bg-white border border-black rounded-[14px] h-[70px] gap-2 px-[20px]"
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

          <div className={"mx-[57px]"}>
            <div
              className={
                "flex items-center justify-center gap-[11px] mb-[44px]"
              }>
              {appsGenres.map((genre, id) => (
                <button
                  className={`h-[49px] border border-black rounded-[11px] px-[22px] flex items-center text-center`}
                  key={id}>
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

                    <div>
                      <p>{app.volume}</p>
                      <p>{app.uaw}</p>
                    </div>
                  </div>

                  <p
                    className={
                      "h-[40px] border-y border-black flex items-center justify-center text-center mt-[14px]"
                    }>
                    {app.genre}
                  </p>

                  <h3 className={"font-extrabold text-[30px] px-[18px]"}>
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
