import { Settings } from "@/pages/home/Settings";
import { useReader, useReaderState } from "@/providers/readerProvider";
import { useUserSettings } from "@/providers/userSettingsProvider";
import { useCallback, useRef } from "react";
import { createDelayer, Delayer } from "../../lib/delayer";
import { TextArea } from "./TextArea";

export default function Home() {
  const userSettings = useUserSettings();
  const readerService = useReader();

  const readDelayer = useRef(createDelayer(20)).current;

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const speak = useCallback(() => {
    readDelayer(() => readerService.speak(textAreaRef.current?.value ?? ""));
  }, [readerService]);

  return (
    <div className="flex flex-col flex-grow items-center">
      <TextArea textAreaRef={textAreaRef} speak={speak} />

      <div className="mt-2" />
      <div className="flex flex-row-reverse w-full flex-wrap items-center content-center">
        <ReaderButton
          autoPlay={userSettings.current.autoPlay}
          readDelayer={readDelayer}
          textAreaRef={textAreaRef}
        />
        <div className="flex-grow" />
        <h2 className="text-2xl mx-2">Settings</h2>
      </div>
      <Settings readDelayer={readDelayer} />
    </div>
  );
}

interface ReaderButtonProps {
  autoPlay: boolean;
  readDelayer: Delayer;
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
}

const ReaderButton: React.FC<ReaderButtonProps> = ({
  autoPlay,
  readDelayer,
  textAreaRef,
}) => {
  const readerService = useReader();
  const readerState = useReaderState(readerService);

  const action = useCallback(
    () =>
      readDelayer(() => {
        switch (readerState.status) {
          case "stopped":
            readerService.speak(textAreaRef.current?.value ?? "");
            break;
          case "speaking":
            readerService.pause();
            break;
          case "paused":
            readerService.resume();
            break;
        }
      }),
    [readerService, readerState.status, textAreaRef, readDelayer]
  );

  return (
    <button
      className="bg-primary3 text-content1 p-2 rounded-md min-w-[100px] max-w-[150px] w-1/4 mx-2 flex justify-evenly hover:shadow-lg"
      onClick={action}
    >
      {
        {
          stopped: (
            <img
              className="inline-block  h-6 items-baseline"
              src="/images/icon/icon-white.svg"
              alt="speaker"
            />
          ),
          speaking: <span className="">&#10074;&#10074;</span>,
          paused: <span className="">&#9654;</span>,
        }[readerState.status]
      }
      <span className="">
        {
          {
            stopped: "Read It",
            speaking: "Pause",
            paused: "Resume",
          }[readerState.status]
        }
      </span>
    </button>
  );
};
