// this is not a wrapper for now but the full component

import React, { useRef, useEffect, useState } from "react";

import { useEventListener, useHuddle01 } from "@huddle01/react";
import { useDisplayName } from "@huddle01/react/app-utils";
import { Audio, Video } from "@huddle01/react/components";

import {
  PhoneIcon
} from "@heroicons/react/outline";
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
  // For dev, MUST use LOCALHOST instead of 0.0.0.0, for prod MUST use HTTPS

  const projectId = "KL1r3E1yHfcrRbXsT4mcE-3mK60Yc3YR"; // test room id gis-jqho-jvs
  const { initialize } = useHuddle01();
  const { state, send } = useMeetingMachine();

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    initialize(projectId);
    // initialized project
  }, []);

  const [roomId, setRoomId] = useState(""); // could be better

  const { joinLobby } = useLobby();

  const [shouldJoinRoom, setShouldJoinRoom] = useState(false); // could be better

  const {
    fetchAudioStream,
    produceAudio,
    stopAudioStream,
    stopProducingAudio,
    stream: micStream,
  } = useAudio();
  const {
    fetchVideoStream,
    produceVideo,
    stopVideoStream,
    stopProducingVideo,
    stream: camStream,
  } = useVideo();
  const { joinRoom, leaveRoom } = useRoom();

  const [displayNameText, setDisplayNameText] = useState("Participant");
  const { setDisplayName, error: displayNameError } = useDisplayName();
  const { peers } = usePeers();

  // Event Listner
  useEventListener("lobby:cam-on", () => {
    if (camStream && videoRef.current) videoRef.current.srcObject = camStream;
  });

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
  };

  useEffect(() => {
    if (joinLobby.isCallable && roomId.length > 2) joinLobby(roomId);
  }, [joinLobby.isCallable, roomId]);

  useEffect(() => {
    if (fetchAudioStream.isCallable) fetchAudioStream(); // this bugs if not called before joining a room and fetching video
  }, [fetchAudioStream.isCallable]);

  const [fetchedAudio, setFetchedAudio] = useState(false);
  
  useEffect(() => {
    if (!fetchedAudio && micStream) setFetchedAudio(true); 
  }, [micStream, fetchedAudio]);

  useEffect(() => {
    if (produceAudio.isCallable) produceAudio(micStream);
  }, [produceAudio.isCallable]);

  useEffect(() => {
    if (joinRoom.isCallable && micStream && camStream) joinRoom(); // need mic and video to join room otherwise it bugs
  }, [joinRoom.isCallable, micStream, camStream]);

  useEffect(() => {
    if (fetchVideoStream.isCallable && fetchedAudio) fetchVideoStream(); // this bugs if not called before joining a room
  }, [fetchVideoStream.isCallable, fetchedAudio]);

  useEffect(() => {
    if (produceVideo.isCallable) produceVideo(camStream);
  }, [produceVideo.isCallable]);


  useEffect(() => {
    // Probably not necessary but kept in case
    if (setDisplayName.isCallable) setDisplayName(displayNameText);
  }, [setDisplayName.isCallable]);

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

      <div>
        Me Video:
        <video ref={videoRef} autoPlay muted></video>
        <div className="grid grid-cols-4">
          {Object.values(peers)
            .filter((peer) => peer.cam)
            .map((peer) => (
              <>
                role: {peer.role}
                <Video
                  key={peer.peerId}
                  peerId={peer.peerId}
                  track={peer.cam}
                  debug
                />
              </>
            ))}
          {Object.values(peers)
            .filter((peer) => peer.mic)
            .map((peer) => (
              <Audio key={peer.peerId} peerId={peer.peerId} track={peer.mic} />
            ))}
        </div>
      </div>
    </div>
  );
};
