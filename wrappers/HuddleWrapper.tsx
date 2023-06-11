// this is not a wrapper for now but the full component

import React, { useEffect, useState } from "react";
import { useHuddle01 } from "@huddle01/react";

import { PhoneIcon } from "@heroicons/react/outline";
import { IconButton } from "../component-library/components/IconButton/IconButton";
import {
  useAudio,
  useLobby,
  useMeetingMachine,
  usePeers,
  useRoom,
  useVideo,
  useRecording,
} from "@huddle01/react/hooks";

export const HuddleWrapper = () => {
  const projectId = "KL1r3E1yHfcrRbXsT4mcE-3mK60Yc3YR";
  const { initialize } = useHuddle01();
  const [isInitialized, setIsInitialized] = useState(false); // could be better

  const { joinLobby } = useLobby();

  const [shouldJoinRoom, setShouldJoinRoom] = useState(false); // could be better

  const { joinRoom, leaveRoom } = useRoom();

  useEffect(() => {
    if(!initialize.isCallable && !isInitialized) {
      initialize(projectId);
      setIsInitialized(true)
    }
  }, [initialize.isCallable]);

  const createLobby = async () => {
    const response = await fetch(
      "https://api.huddle01.com/api/v1/create-room",
      {
        method: "POST",
        body: JSON.stringify({
          title: "Huddle01-0xB4d",
          hostWallets: ["0xB4d00788F75F27b85285b3aF21Bdc16b3336D91E"],
        }),
        headers: {
          "Content-type": "application/json",
          "x-api-key": "VwTZ4AGTxme9snANex9tep3NwvVMGfYd",
        },
      },
    );

    const res = await response.json();
    const roomId = res.data.roomId;

    joinLobby(roomId);
    setShouldJoinRoom(true)
    console.log("Should join room");
  };

  useEffect(() => {
    if(joinRoom.isCallable && shouldJoinRoom) {
      joinRoom()
      setShouldJoinRoom(false)
      console.log("Joined room");
    }
  }, [shouldJoinRoom, joinRoom.isCallable])

  return (
    <div className="flex items-center px-2 md:px-4 py-3 border-l-0 z-10 max-md:h-fit md:max-h-sm  h-16">
      <IconButton
        onClick={() => {
          createLobby();
        }}
        label={<PhoneIcon color="white" width="20" />}
        testId="new-message-icon-cta"
        srText={"Call"}
      />
    </div>
  );
};