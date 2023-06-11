// this is not a wrapper for now but the full component

import React, { useCallback, useEffect, useState } from "react";
import { useEventListener, useHuddle01 } from "@huddle01/react";

import { PhoneIcon, PlayIcon, LibraryIcon, SunIcon } from "@heroicons/react/outline";
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
  const { state, send } = useMeetingMachine();

  useEffect(() => {
    initialize(projectId);
    // initialized project
  }, []);

  const [roomId, setRoomId] = useState(""); // could be better

  const { joinLobby } = useLobby();

  const [shouldJoinRoom, setShouldJoinRoom] = useState(false); // could be better

  const { joinRoom, leaveRoom } = useRoom();

  // Event Listner
  // useEventListener("lobby:cam-on", () => {
  //   if (camStream && videoRef.current) videoRef.current.srcObject = camStream;
  // });

  useEventListener("room:joined", () => {
    console.log("room:joined");
  });
  useEventListener("lobby:joined", () => {
    console.log("lobby:joined");
  });

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

    console.log("roomId: ", roomId);
    setRoomId(roomId);
  }

  useEffect(() => {
    if(joinLobby.isCallable && roomId.length > 2) joinLobby(roomId);
  }, [joinLobby.isCallable, roomId]);

  useEffect(() => {
    if(joinRoom.isCallable) joinRoom();
  }, [joinRoom.isCallable]);

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
