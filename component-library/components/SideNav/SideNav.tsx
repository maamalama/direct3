import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { ClipboardCopyIcon, XIcon } from "@heroicons/react/outline";
import { classNames, isAppEnvDemo, shortAddress } from "../../../helpers";
import { XmtpIcon } from "../Icons/XmtpIcon";
import { GhostButton } from "../GhostButton/GhostButton";
import { DisconnectIcon } from "../Icons/DisconnectIcon";
import { useTranslation } from "react-i18next";
import i18next, { resourceMap } from "../../../i18n";
import { QRCode } from "react-qrcode-logo";
import Image from "next/image";
import { Avatar } from "../Avatar/Avatar";
import Link from "next/link";

interface SideNav {
  /**
   * Contents inside side nav
   */
  icon?: React.ReactNode;
  /**
   * What is the display address?
   */
  displayAddress?: string;
  /**
   * What is the wallet address?
   */
  walletAddress?: string;
  /**
   * What is the avatarUrl?
   */
  avatarUrl?: string;
  /**
   * What should happen when disconnect is clicked?
   */
  onDisconnect?: () => void;
}

const SideNav = ({
  icon = <XmtpIcon />,
  displayAddress,
  walletAddress,
  avatarUrl,
  onDisconnect,
}: SideNav) => {
  const [mappedLangs, setMappedLangs]: [
    Array<{ displayText?: string; isSelected?: boolean; lang?: string }>,
    Function,
  ] = useState([]);
  // When language changes, change the modal text to render the corresponding locale selector within that language
  useEffect(() => {
    const mappedLangs = Object.keys(resourceMap).map((lang: string) => {
      let languageNames = new Intl.DisplayNames([i18next.language], {
        type: "language",
      });

      return {
        displayText: languageNames.of(lang) || languageNames.of("en"),
        isSelected: i18next.language === lang,
        lang,
      };
    });
    setMappedLangs(mappedLangs);
  }, [i18next.language]);

  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isQrCodeDialogOpen, setIsQrCodeDialogOpen] = useState(false);

  const onSideNavBtnClick = (key: string) => {
    if (key === t("menu.collapse_header")) setIsOpen(!isOpen);
  };

  const onXmtpIconClick = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const icons = [
    <Image
      key={t("menu.messages_header")}
      src={"icons/messages.svg"}
      alt={"messages"}
      width={32}
      height={32}
      className={isOpen ? "mr-4" : ""}
      data-testid="messages-icon"
    />,
    <Image
      key={t("menu.gallery_header")}
      src={"icons/community.svg"}
      alt={"community"}
      width={32}
      height={32}
      className={isOpen ? "mr-4" : ""}
      data-testid="gallery-icon"
    />,
    <Image
      key={t("menu.settings_header")}
      src={"icons/settings.svg"}
      alt={"settings"}
      width={32}
      height={32}
      className={isOpen ? "mr-4" : ""}
      data-testid="settings-icon"
    />,
    // <Image
    //   key={t("menu.collapse_header")}
    //   src={"icons/arrow-right.svg"}
    //   alt={"arrow-right"}
    //   width={32}
    //   height={32}
    //   className={isOpen ? "mr-4 rotate-180" : ""}
    //   data-testid="collapse-icon"
    // />,
  ];
  const [currentIcon, setCurrentIcon] = useState(icons[0].key);

  const mappedButtons = icons.map((icon) => {
    return (
      <div className="group flex justify-between relative" key={icon.key}>
        <Link
          href={
            icon.key === t("menu.messages_header")
              ? "/inbox"
              : icon.key === t("menu.gallery_header")
              ? "/discover"
              : "#"
          }
          onClick={(event) => {
            setCurrentIcon((event.target as HTMLElement).innerText);
            onSideNavBtnClick(icon.key as string);
          }}
          aria-label={icon.key as string}
          className={classNames(
            currentIcon === icon.key ? "font-bold" : "",
            // "hover:bg-gray-200",
            "p-2",
            "hover:text-white",
            "text-gray-500",
            "rounded-lg",
            "w-full",
            "flex",
            "item-center",
            "h-fit",
            "rounded",
            "cursor-pointer",
            isOpen ? "w-[300px]" : "",
          )}>
          <>
            <div className="flex justify-center items-center h-fit">
              {icon}
              <span data-testid={icon.key}>{isOpen && icon.key}</span>
            </div>
          </>
        </Link>
        {/* {(icon.key === t("menu.gallery_header") ||
          icon.key === t("menu.settings_header")) && (
          <div
            role="tooltip"
            className={classNames(
              "group-hover:opacity-100 w-max transition-opacity bg-gray-800 p-2 text-sm text-gray-100 rounded-md absolute opacity-0 m-4 mx-auto z-20",
              isOpen ? "left-32" : "left-10",
            )}>
            {t("menu.coming_soon")}
          </div>
        )} */}
        <div
          role="tooltip"
          className={classNames(
            "group-hover:opacity-100 w-max transition-opacity bg-gray-800 p-2 text-sm text-gray-100 rounded-md absolute opacity-0 m-4 mx-auto z-20",
            isOpen ? "left-32" : "left-10",
          )}>
          {t(icon.key as string)}
        </div>
      </div>
    );
  });

  return (
    <div
      className={classNames(
        "flex",
        "flex-col",
        "justify-between",
        "items-center",
        "h-screen",
        "bg-[#000000]",
        !isOpen ? "w-[98px]" : "absolute z-10 w-[250px]",
      )}>
      <div className="flex flex-col items-start space-y-4 w-full">
        <div className="flex">
          <div>
            <div className="flex mb-12">
              <Image
                src={"icons/logo.svg"}
                alt={"logo"}
                width={98}
                height={102}
              />
              {/*<Avatar url={"icons/logo.svg"} address={walletAddress} />*/}
              {isOpen && (
                <div className="flex items-center">
                  <div className="flex flex-col px-2 justify-center">
                    <span
                      className="font-bold bg-white"
                      data-testid="wallet-address">
                      {shortAddress(displayAddress ?? "")}
                    </span>
                    {walletAddress && displayAddress !== walletAddress && (
                      <span className="font-sm">
                        {shortAddress(walletAddress)}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div
              className={`flex flex-col pt-4 space-y-4 ${
                isOpen ? "items-start" : "items-center"
              }`}>
              {mappedButtons}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center font-bold w-full pb-8">
        <button
          onClick={onXmtpIconClick}
          onKeyDown={onXmtpIconClick}
          tabIndex={0}
          data-testid="icon">
          <Avatar url={"avatar.png"} />
        </button>

        {/*<div*/}
        {/*  onClick={onXmtpIconClick}*/}
        {/*  onKeyDown={onXmtpIconClick}*/}
        {/*  tabIndex={0}*/}
        {/*  className="cursor-pointer"*/}
        {/*  data-testid="icon">*/}
        {/*  {icon}*/}
        {/*</div>*/}
      </div>
      <Transition.Root show={isQrCodeDialogOpen} as={Fragment}>
        <Dialog
          as="div"
          onClose={onXmtpIconClick}
          aria-label={t("menu.settings") || ""}>
          <div
            data-testid="share-qr-modal"
            className="bg-[#ffffffa3] w-[100vw] h-[100vh] flex items-center justify-center absolute top-0 z-20">
            <div className="bg-[url('/shareQrBg.png')] bg-repeat-round m-4 lg:w-[35%] sm:w-[90%] md:w-[50%] h-[90vh] text-white flex flex-col items-center p-4 rounded-3xl drop-shadow-lg">
              <div
                onClick={() => setIsQrCodeDialogOpen(false)}
                className="w-[100%] flex justify-end cursor-pointer mb-20">
                <XIcon width={24} />
              </div>
              <div className="h-8">
                <img
                  className="h-[100%]"
                  alt="xmtp-logo"
                  src="/xmtp-logo.png"
                />
              </div>
              <div className="text-center p-4 pb-6">
                {t("common.share_code")}
              </div>
              <div className="p-4 flex items-center justify-center rounded-3xl bg-white">
                <QRCode
                  size={200}
                  logoImage="/xmtp-icon.png"
                  removeQrCodeBehindLogo
                  logoPadding={10}
                  value={`${window.location.origin}/dm/${walletAddress}`}
                />
              </div>
              <div
                onClick={() =>
                  navigator.clipboard.writeText(
                    `${window.location.origin}/dm/${walletAddress}`,
                  )
                }
                className="flex text-sm mt-5 cursor-pointer">
                <span data-testid="share-qr-link" className="underline">
                  {t("common.share_link")}
                </span>
                <ClipboardCopyIcon className="ml-2" width={16} />
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={isDialogOpen} as={Fragment}>
        <Dialog
          as="div"
          onClose={onXmtpIconClick}
          aria-label={t("menu.settings") || ""}>
          <div className="bg-white w-fit rounded-lg absolute bottom-16 left-12 p-2 z-20">
            <div className="max-h-80 overflow-auto">
              {mappedLangs.map(({ displayText, isSelected, lang }) => {
                return (
                  <div className="flex p-2 justify-between" key={lang}>
                    <button
                      type="button"
                      onClick={() => {
                        i18next.changeLanguage(lang);
                        onXmtpIconClick();
                      }}
                      className={classNames(
                        "text-sm",
                        isSelected ? "font-bold" : "",
                      )}>
                      {displayText}
                    </button>
                    {isSelected && (
                      <CheckCircleIcon
                        width="16"
                        fill="limegreen"
                        className="ml-4"
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <hr className="m-2" />
            {!isAppEnvDemo() && (
              <>
                <span
                  onClick={() => {
                    setIsQrCodeDialogOpen(true);
                    setIsDialogOpen(false);
                  }}
                  data-testid="share-qr"
                  className="text-sm ml-2 cursor-pointer text-indigo-600 hover:text-indigo-800">
                  {t("common.share_qr_code")}
                </span>
                <hr className="m-2" />
              </>
            )}

            <span className="text-sm ml-2 text-red-600 hover:text-red-800">
              <a
                href="https://github.com/xmtp-labs/xmtp-inbox-web/issues/new?assignees=&labels=bug&template=bug_report.yml&title=Bug%3A+"
                target="_blank"
                rel="noreferrer">
                {t("common.report_bug")}
              </a>
            </span>
            <hr className="m-2" />
            <GhostButton
              onClick={onDisconnect}
              label={t("common.disconnect")}
              variant="secondary"
              size="small"
              testId="disconnect-wallet-cta"
              icon={<DisconnectIcon />}
            />
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default SideNav;
