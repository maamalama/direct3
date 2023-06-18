import Image from "next/image";
import Link from "next/link";

const assets = [
  {
    id: 1,
    prefix: "X516",
    img: "/asset.png",
    name: "Strange Cat",
    price: 1.05,
  },
  {
    id: 2,
    prefix: "X516",
    img: "/asset.png",
    name: "Strange Cat",
    price: 1.05,
  },
  {
    id: 3,
    prefix: "X516",
    img: "/asset.png",
    name: "Strange Cat",
    price: 1.05,
  },
  {
    id: 4,
    prefix: "X516",
    img: "/asset.png",
    name: "Strange Cat",
    price: 1.05,
  },
];

const Game = () => {
  return (
    <section className={"min-h-screen flex flex-col"}>
      <header className={"bg-[#E8E3F0] py-[50px] border-b border-black"}>
        <div
          className={
            "flex items-center justify-between max-w-[1330px] px-[15px] w-full mx-auto"
          }>
          <img src="/game-preview.png" alt="" />

          <div>
            <h1 className={"text-[46px] font-black mb-[45px]"}>
              Genshin Impact official
            </h1>

            <div className={"flex items-center gap-[23px]"}>
              <Image
                src={"/icons/polygon.svg"}
                alt={"polygon"}
                width={98}
                height={26}
              />

              <div className={"min-w-[1px] h-[24px] bg-black"}></div>

              <div className={"flex items-center gap-[7px]"}>
                <Link href={"/"}>
                  <Image
                    src={"/icons/youtube.svg"}
                    alt={"youtube"}
                    width={32}
                    height={32}
                  />
                </Link>

                <Link href={"/"}>
                  <Image
                    src={"/icons/twitter.svg"}
                    alt={"youtube"}
                    width={32}
                    height={32}
                  />
                </Link>

                <Link href={"/"}>
                  <Image
                    src={"/icons/discord.svg"}
                    alt={"youtube"}
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className={"flex"}>
            <button
              className={
                "h-[112px] flex items-center justify-center border border-black w-[230px] bg-white rounded-l-2xl text-base font-extrabold"
              }>
              Community
            </button>
            <button
              className={
                "h-[112px] flex items-center justify-center border border-black w-[230px] bg-black text-white rounded-r-2xl text-base font-extrabold"
              }>
              Open Game
            </button>
          </div>
        </div>
      </header>

      <div
        className={
          "max-w-[1330px] h-full px-[15px] w-full mx-auto flex items-stretch justify-between flex-grow"
        }>
        <div
          className={
            "flex-grow border-r border-black pt-[75px] pr-[50px] h-full min-h-screen overflow-hidden max-h-screen]"
          }>
          <p className={"text-base font-medium mb-[57px]"}>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing
          </p>

          <div>
            <div className={"mb-[40px] flex items-center gap-[12px]"}>
              <h2 className={"font-black text-[26px]"}>Top Assets</h2>

              <Image
                src={"icons/link.svg"}
                alt={"link"}
                width={18}
                height={18}
              />
            </div>

            <div className={"grid grid-cols-4 gap-[16px]"}>
              {assets.map((asset) => (
                <div
                  className={
                    "rounded-[15px] border border-black overflow-hidden h-[237px]"
                  }>
                  <div className={"relative h-[167px] border-b border-black"}>
                    <span
                      className={
                        "m-[8px] rounded-[8px] bg-white border border-black h-[34px] inline-flex items-center justify-center px-[12px] text-[14px] font-normal"
                      }>
                      {asset.prefix}
                    </span>
                    <Image
                      className={"object-cover -z-10"}
                      src={asset.img}
                      alt={asset.name}
                      fill={true}
                    />
                  </div>

                  <div className={"p-[10px]"}>
                    <h3 className={"text-[14px] font-medium "}>{asset.name}</h3>
                    <p className={"text-base font-extrabold leading-[162%]"}>
                      {asset.price} USD
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={"flex items-center gap-[24px] mt-[67px]"}>
            <h2 className={"text-base font-extrabold"}>Rank</h2>

            <div className={"flex items-center gap-[10px]"}>
              <p
                className={
                  "border rounded-[8px] bg-white h-[34px] flex items-center px-[12px] text-[14px] font-normal"
                }>
                #32 in General
              </p>

              <p
                className={
                  "border rounded-[8px] bg-white h-[34px] flex items-center px-[12px] text-[14px] font-normal"
                }>
                #10 in Games
              </p>
            </div>
          </div>

          <div className={"flex items-center gap-[24px] mt-[18px]"}>
            <h2 className={"text-base font-extrabold"}>Tags</h2>

            <div className={"flex items-center gap-[10px]"}>
              <p
                className={
                  "border rounded-[8px] bg-white h-[34px] flex items-center px-[12px] text-[14px] font-normal"
                }>
                NFT
              </p>

              <p
                className={
                  "border rounded-[8px] bg-white h-[34px] flex items-center px-[12px] text-[14px] font-normal"
                }>
                Games
              </p>

              <p
                className={
                  "border rounded-[8px] bg-white h-[34px] flex items-center px-[12px] text-[14px] font-normal"
                }>
                Play to Earn
              </p>

              <p
                className={
                  "border rounded-[8px] bg-white h-[34px] flex items-center px-[12px] text-[14px] font-normal"
                }>
                Metaverse
              </p>
            </div>
          </div>
        </div>

        <div className={"pt-[37px] pl-[50px]"}>
          <h2 className={"text-[26px] font-black mb-[40px]"}>Statistic</h2>

          <div
            className={
              "rounded-[14px] border border-black py-[13px] px-[27px] w-[437px] mb-[24px]"
            }>
            <div>
              <h3 className={"text-base font-extrabold"}>
                Daily Earnings Prediction
              </h3>
            </div>

            <p
              className={
                "mb-[37px] mt-[10px] text-[46px] font-extrabold leading-[92%]"
              }>
              $57,2
            </p>

            <Image
              src={"/icons/statistic1.svg"}
              alt={"statistic1"}
              width={354}
              height={39}
            />
          </div>

          <div
            className={
              "rounded-[14px] border border-black py-[13px] px-[27px] w-[437px] mb-[24px]"
            }>
            <div className={"flex items-start justify-between"}>
              <h3 className={"text-base font-extrabold"}>Daily Volume</h3>

              <p
                className={
                  "px-[12px] py-[6px] bg-[#D3F5DF] border border-black rounded-[8px] text-[14px] font-normal"
                }>
                - 5.97%
              </p>
            </div>

            <p
              className={
                "mb-[37px] mt-[10px] text-[46px] font-extrabold leading-[92%]"
              }>
              $150,736
            </p>

            <Image
              src={"/icons/statistic2.svg"}
              alt={"statistic1"}
              width={379}
              height={39}
            />
          </div>

          <div
            className={
              "rounded-[14px] border border-black py-[13px] px-[27px] w-[437px]"
            }>
            <div className={"flex items-start justify-between"}>
              <h3 className={"text-base font-extrabold"}>
                Daily Earnings Prediction
              </h3>

              <p
                className={
                  "px-[12px] py-[6px] bg-[#F5D3D3] border border-black rounded-[8px] text-[14px] font-normal"
                }>
                - 3.97%
              </p>
            </div>

            <p
              className={
                "mb-[37px] mt-[10px] text-[46px] font-extrabold leading-[92%]"
              }>
              $290,168
            </p>

            <Image
              src={"/icons/statistic3.svg"}
              alt={"statistic1"}
              width={379}
              height={39}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game;
