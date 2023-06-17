import React from "react";
import { MessageSkeletonLoader } from "../Loaders/SkeletonLoaders/MessageSkeletonLoader";
import { useTranslation } from "react-i18next";

interface FullConversationProps {
  messages?: Array<JSX.Element>;
  isLoading?: boolean;
}

export const FullConversation = ({
  messages = [],
  isLoading = false,
}: FullConversationProps) => {
  const { t } = useTranslation();
  if (isLoading) {
    return (
      <div className={"h-full flex flex-col-reverse justify-start p-4"}>
        {Array.from({ length: 3 }).map((_, idx) => (
          <MessageSkeletonLoader key={idx} incoming={false} />
        ))}
      </div>
    );
  }

  return (
    <div
      data-testid="message-tile-container"
      className="w-full h-full flex flex-col-reverse pt-8 px-4 md:px-8">
      {messages}
    </div>
  );
};
