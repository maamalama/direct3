import React, { ChangeEvent, useEffect, useLayoutEffect, useRef } from "react";
import { IconButton } from "../IconButton/IconButton";
import { classNames } from "../../../helpers";
import { useTranslation } from "react-i18next";
import Image from "next/image";

interface InputProps {
  /**
   * What happens on a submit?
   */
  onSubmit?: (msg: string) => Promise<void>;
  /**
   * Is the CTA button disabled?
   */
  isDisabled?: boolean;
  /**
   * Rerender component?
   */
  conversationId?: string;
}

export const MessageInput = ({
  onSubmit,
  isDisabled,
  conversationId,
}: InputProps) => {
  const { t } = useTranslation();
  let textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = React.useState("");
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setValue(event.target.value);
  const borderStyles = "border border-black rounded-[14px]";
  const textAreaStyles = `${
    textAreaRef?.current?.scrollHeight &&
    textAreaRef?.current?.scrollHeight <= 32
      ? "max-h-8"
      : "max-h-40"
  } min-h-8 outline-none border-none focus:ring-0 resize-none mx-2 p-1 w-full max-md:text-[16px] md:text-md text-gray-900`;

  useLayoutEffect(() => {
    const MIN_TEXTAREA_HEIGHT = 32;
    if (textAreaRef?.current?.value) {
      let currentScrollHeight = textAreaRef?.current.scrollHeight;
      textAreaRef.current.style.height = `${Math.max(
        currentScrollHeight,
        MIN_TEXTAREA_HEIGHT,
      )}px`;
    } else if (textAreaRef?.current) {
      textAreaRef.current.style.height = `${MIN_TEXTAREA_HEIGHT}px`;
    }
  }, [value]);

  useEffect(() => {
    textAreaRef.current?.focus();
    setValue("");
  }, [conversationId]);

  return (
    <form>
      <label htmlFor="chat" className="sr-only">
        {t("messages.message_field_prompt")}
      </label>
      <div
        className={classNames(
          "flex",
          "items-center",
          "min-h-[70px]",
          "max-h-300",
          "mx-4 my-2 mb-6",
          "bg-white",
          "relative",
          "no-scrollbar",
          "z-10",
          "p-1",
          "pl-5",
          borderStyles,
        )}>
        <button className={"mr-[2px]"} type={"button"}>
          <Image
            src={"icons/paperclip.svg"}
            alt={"add"}
            width={30}
            height={30}
          />
        </button>
        <button className={"mr-[2px]"} type={"button"}>
          <Image src={"icons/image.svg"} alt={"image"} width={30} height={30} />
        </button>
        <button type={"button"}>
          <Image src={"icons/nft.svg"} alt={"nft"} width={30} height={30} />
        </button>
        <textarea
          autoFocus
          id="chat"
          data-testid="message-input"
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              if (value) {
                onSubmit?.(value);
                setValue("");
              }
            }
          }}
          ref={textAreaRef}
          rows={1}
          className={textAreaStyles}
          placeholder={t("messages.message_field_prompt") || ""}
          value={value}
          disabled={isDisabled}
        />
        <div className="sendButton">
          <IconButton
            testId="message-input-submit"
            variant="secondary"
            // label={<ArrowUpIcon color="black" width="20" />}
            label={
              <Image
                src={"icons/send.svg"}
                alt={"send"}
                width={40}
                height={40}
              />
            }
            srText={t("aria_labels.submit_message") || ""}
            onClick={() => {
              if (value) {
                onSubmit?.(value);
                setValue("");
                textAreaRef.current?.focus();
              }
            }}
            isDisabled={!value || isDisabled}
          />
        </div>
      </div>
    </form>
  );
};
