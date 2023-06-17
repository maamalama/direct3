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
      {size[0] > TAILWIND_MD_BREAKPOINT ||
      recipientWalletAddress ||
      startedFirstMessage ? (
        <div className="flex w-full flex-col h-screen overflow-x-hidden overflow-y-auto bg-[#E8E3F0] text-center pb-7">
          <div
            className={
              "flex flex-row justify-between mx-[60px] pt-[65px] mb-[36px] items-center"
            }>
            <div className="inline-flex space-x-12 items-center justify-start">
              <img
                className="w-44 h-full border rounded-3xl border-black"
                src="https://via.placeholder.com/174x174"
              />
              <div className="inline-flex flex-col space-y-11 items-start justify-end">
                <p className="text-4xl font-extrabold">
                  Genshin Impact official
                </p>
                <div className="inline-flex space-x-6 items-center justify-start">
                  <div className="flex space-x-1.5 items-start justify-center">
                    <div className="relative">
                      <div className="w-6 h-6 border rounded-full border-black" />
                      <div className="w-4 h-3.5 absolute m-auto inset-0 bg-black rounded-full" />
                    </div>
                    <p className="w-2/3 h-6 text-base leading-relaxed">
                      Polygon
                    </p>
                  </div>
                  <div className="transform -rotate-90 w-6 h-0.5 border-black" />
                  <div className="flex space-x-1.5 items-start justify-start">
                    <img
                      className="w-8 h-full rounded-lg"
                      src="https://via.placeholder.com/32x32"
                    />
                    <img
                      className="w-8 h-full rounded-lg"
                      src="https://via.placeholder.com/32x32"
                    />
                    <img
                      className="w-8 h-full rounded-lg"
                      src="https://via.placeholder.com/32x32"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-end h-[100px]">
              <div className="flex items-center justify-center w-1/2 h-full px-16 pt-10 pb-11 bg-white border rounded-l-2xl border-black">
                <p className="flex-1 text-base leading-relaxed">Community</p>
              </div>
              <div className="inline-flex flex-col items-start justify-end h-[100px]">
                <div className="inline-flex h-full items-center justify-center w-full flex-1 pl-7 pr-16 pt-10 pb-11 bg-black rounded-r-2xl">
                  <p className="text-base leading-relaxed text-white">
                    Open Game
                  </p>
                </div>
                <div className="w-52 h-0.5 border-black" />
              </div>
            </div>
          </div>

          <div className={"h-[1px] min-h-[1px] w-full bg-black"}></div>

          <div className={"mx-[57px] mt-[9px]"}>
            <div className={"flex justify-between flex-row gap-[24px]"}>
              <div className={"flex flex-col items-start"}>
                <p className="text-base leading-snug text-justify">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing
                </p>
                <p className="text-2xl leading-loose">Top Assets</p>
                <div className="inline-flex space-x-4 items-center justify-start">
                  <div className="w-44 h-full">
                    <div
                      className="relative bg-white border rounded-2xl border-black"
                      style={{ width: 169, height: 237 }}>
                      <img
                        className="w-40 h-40 absolute left-0 top-0 rounded-tl-2xl rounded-tr-2xl"
                        src="https://via.placeholder.com/167x167"
                      />
                      <div
                        className="w-40 h-0.5 absolute border-black"
                        style={{ left: 1, top: 169 }}
                      />
                      <div
                        className="inline-flex flex-col items-start justify-start absolute"
                        style={{ left: 10, top: 179 }}>
                        <p className="text-sm leading-snug">Strange Cat</p>
                        <p className="text-base leading-relaxed">1.05 USD</p>
                      </div>
                      <div
                        className="inline-flex items-center justify-start h-8 px-3 py-1.5 absolute bg-white border rounded-lg border-black"
                        style={{ left: 9, top: 9 }}>
                        <p className="text-sm leading-snug">X516</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-44 h-full">
                    <div
                      className="relative bg-white border rounded-2xl border-black"
                      style={{ width: 169, height: 237 }}>
                      <img
                        className="w-40 h-40 absolute left-0 top-0 rounded-tl-2xl rounded-tr-2xl"
                        src="https://via.placeholder.com/167x167"
                      />
                      <div
                        className="w-40 h-0.5 absolute border-black"
                        style={{ left: 1, top: 169 }}
                      />
                      <div
                        className="inline-flex flex-col items-start justify-start absolute"
                        style={{ left: 10, top: 179 }}>
                        <p className="text-sm leading-snug">Strange Cat</p>
                        <p className="text-base leading-relaxed">1.05 USD</p>
                      </div>
                      <div
                        className="inline-flex items-center justify-start h-8 px-3 py-1.5 absolute bg-white border rounded-lg border-black"
                        style={{ left: 9, top: 9 }}>
                        <p className="text-sm leading-snug">X516</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-44 h-full">
                    <div
                      className="relative bg-white border rounded-2xl border-black"
                      style={{ width: 169, height: 237 }}>
                      <img
                        className="w-40 h-40 absolute left-0 top-0 rounded-tl-2xl rounded-tr-2xl"
                        src="https://via.placeholder.com/167x167"
                      />
                      <div
                        className="w-40 h-0.5 absolute border-black"
                        style={{ left: 1, top: 169 }}
                      />
                      <div
                        className="inline-flex flex-col items-start justify-start absolute"
                        style={{ left: 10, top: 179 }}>
                        <p className="text-sm leading-snug">Strange Cat</p>
                        <p className="text-base leading-relaxed">1.05 USD</p>
                      </div>
                      <div
                        className="inline-flex items-center justify-start h-8 px-3 py-1.5 absolute bg-white border rounded-lg border-black"
                        style={{ left: 9, top: 9 }}>
                        <p className="text-sm leading-snug">X516</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-44 h-full">
                    <div
                      className="relative bg-white border rounded-2xl border-black"
                      style={{ width: 169, height: 237 }}>
                      <img
                        className="w-40 h-40 absolute left-0 top-0 rounded-tl-2xl rounded-tr-2xl"
                        src="https://via.placeholder.com/167x167"
                      />
                      <div
                        className="w-40 h-0.5 absolute border-black"
                        style={{ left: 1, top: 169 }}
                      />
                      <div
                        className="inline-flex flex-col items-start justify-start absolute"
                        style={{ left: 10, top: 179 }}>
                        <p className="text-sm leading-snug">Strange Cat</p>
                        <p className="text-base leading-relaxed">1.05 USD</p>
                      </div>
                      <div
                        className="inline-flex items-center justify-start h-8 px-3 py-1.5 absolute bg-white border rounded-lg border-black"
                        style={{ left: 9, top: 9 }}>
                        <p className="text-sm leading-snug">X516</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex flex-col space-y-4 items-start justify-center pt-8">
                  <div className="inline-flex space-x-7 items-center justify-end">
                    <p className="text-base leading-relaxed">Rank</p>
                    <div className="flex space-x-2.5 items-start justify-start">
                      <div className="flex items-center justify-center px-3 py-1.5 bg-white border rounded-lg border-black">
                        <p className="text-sm leading-snug">#32 in General</p>
                      </div>
                      <div className="flex items-center justify-center px-3 py-1.5 bg-white border rounded-lg border-black">
                        <p className="text-sm leading-snug">#10 in Games</p>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex space-x-7 items-center justify-end">
                    <p className="text-base leading-relaxed">Tags</p>
                    <div className="flex space-x-2.5 items-start justify-start">
                      <div className="flex items-center justify-center px-3 py-1.5 bg-white border rounded-lg border-black">
                        <p className="text-sm leading-snug">NFT</p>
                      </div>
                      <div className="flex items-center justify-center px-3 py-1.5 bg-white border rounded-lg border-black">
                        <p className="text-sm leading-snug">Games</p>
                      </div>
                      <div className="flex items-center justify-center px-3 py-1.5 bg-white border rounded-lg border-black">
                        <p className="text-sm leading-snug">Play to Earn</p>
                      </div>
                      <div className="flex items-center justify-center px-3 py-1.5 bg-white border rounded-lg border-black">
                        <p className="text-sm leading-snug">Metaverse</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-4 h-4">
                  <img
                    className="flex-1 h-full rounded-lg"
                    src="https://via.placeholder.com/18x18"
                  />
                </div>
              </div>
              <div className={"min-w-[1px] h-full bg-black"}></div>
              <div className="pl-2">
                <p className="text-2xl leading-loose">Statistic</p>
                <div className="flex flex-col max-w-[300px] items-start">
                  <div className="max-h-[181px] flex items-start justify-center px-7 pt-3 pb-5 bg-white border rounded-2xl border-black">
                    <div className="inline-flex flex-col space-y-11 items-start justify-end flex-1 h-full">
                      <div className="flex flex-col space-y-2.5 items-start justify-end w-60 h-20">
                        <div className="flex flex-row justify-between items-center w-[280px]">
                          <p className="w-28 font-bold leading-relaxed">
                            Daily Volume
                          </p>
                          <div className="w-20 h-8 px-3 py-1.5 bg-green-100 border rounded-lg border-black">
                            <p className="text-sm leading-snug">+ 5.97%</p>
                          </div>
                        </div>

                        <p className="w-full font-bold text-5xl leading-10">
                          $150,736
                        </p>
                      </div>
                      <div className="">
                        <div className="inline-flex items-center justify-start w-full h-6 pr-36 bg-gray-200 border border-black">
                          <div className="flex-1 w-32 h-full bg-purple-400 border border-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-center px-7 pt-3 pb-5 bg-white border rounded-2xl border-black mt-5">
                    <div className="inline-flex flex-col space-y-11 items-start justify-end flex-1 h-full">
                      <div className="flex flex-col space-y-2.5 items-start justify-end w-60 h-20">
                        <div className="flex flex-row justify-between items-center w-[280px]">
                          <p className="w-28 font-bold leading-relaxed">
                            Daily Volume
                          </p>
                          <div className="w-20 h-8 px-3 py-1.5 bg-green-100 border rounded-lg border-black">
                            <p className="text-sm leading-snug">+ 5.97%</p>
                          </div>
                        </div>

                        <p className="w-full font-bold text-5xl leading-10">
                          $150,736
                        </p>
                      </div>
                      <div className="">
                        <div className="inline-flex items-center justify-start w-full h-6 pr-36 bg-gray-200 border border-black">
                          <div className="flex-1 w-32 h-full bg-purple-400 border border-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-center px-7 pt-3 pb-5 bg-white border rounded-2xl border-black mt-5">
                    <div className="inline-flex flex-col space-y-11 items-start justify-end flex-1 h-full">
                      <div className="flex flex-col space-y-2.5 items-start justify-end w-60 h-20">
                        <div className="flex flex-row justify-between items-center w-[280px]">
                          <p className="w-28 font-bold leading-relaxed">
                            Daily Volume
                          </p>
                          <div className="w-20 h-8 px-3 py-1.5 bg-green-100 border rounded-lg border-black">
                            <p className="text-sm leading-snug">+ 5.97%</p>
                          </div>
                        </div>

                        <p className="w-full font-bold text-5xl leading-10">
                          $150,736
                        </p>
                      </div>
                      <div className="">
                        <div className="inline-flex items-center justify-start w-full h-6 pr-36 bg-gray-200 border border-black">
                          <div className="flex-1 w-32 h-full bg-purple-400 border border-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Discover;
