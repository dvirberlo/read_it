import { SliderInput } from "@/components/inputs/SliderInput";
import { LiveObject, setLiveObject } from "@/hooks/useLiveObject";
import { useReader } from "@/providers/readerProvider";
import { useReaderSettings } from "@/providers/readerSettingsProvider";
import { useUserSettings } from "@/providers/userSettingsProvider";
import { useCallback } from "react";
import { ChoiceSetting } from "../../components/inputs/ChoiceInput";
import { ToggleSetting } from "../../components/inputs/ToggleInput";
import { Delayer } from "./delayer";

const inputDivStyle: string =
  "flex flex-row flex-wrap items-center my-2 justify-around";
const inputStyle: string = "max-w-[500px] w-1/3 flex-grow";

// const readerDemoTimeout = 1000;

export function Settings({ readDelayer }: { readDelayer: Delayer }) {
  const readerSettings = useReaderSettings();
  const userSettings = useUserSettings();
  const readerService = useReader();

  // const demoVoiceProps = useCallback(
  //   (index: number) => {
  //     let timeout: NodeJS.Timeout | undefined;
  //     return {
  //       onMouseEnter: () => {
  //         timeout = setTimeout(
  //           () => readerService.demoVoice(index),
  //           readerDemoTimeout
  //         );
  //       },
  //       onMouseLeave: () => {
  //         clearTimeout(timeout);
  //       },
  //     };
  //   },
  //   [readerService]
  // );

  const changeSettings = useCallback(
    <T extends object>(
      settings: LiveObject<T>,
      key: keyof T,
      value: T[keyof T]
    ) => readDelayer(() => setLiveObject(settings, key, value)),
    [readDelayer]
  );

  return (
    <div>
      {/* <p>{JSON.stringify(settings.current)}</p> */}
      <div className="flex flex-col flex-wrap p-2 ">
        <ChoiceSetting
          label="Voice"
          values={readerService.getVoices()?.map((voice) => voice.name) ?? []}
          selectedIndex={readerSettings.current.voiceVoiceIndex}
          onChange={(index) =>
            changeSettings(readerSettings, "voiceVoiceIndex", index)
          }
          divClassName={inputDivStyle}
          className={inputStyle}
        />
        <ToggleSetting
          label="Auto Play"
          value={userSettings.current.autoPlay}
          onChange={(value) => changeSettings(userSettings, "autoPlay", value)}
          divClassName={inputDivStyle}
          className={inputStyle}
        />
        <SliderInput
          label="Speed"
          value={readerSettings.current.voiceRate}
          onChange={(value) =>
            changeSettings(readerSettings, "voiceRate", value)
          }
          min={0.1}
          max={3}
          step={0.1}
          divClassName={inputDivStyle}
          className={inputStyle}
        />
        <SliderInput
          label="Pitch"
          value={readerSettings.current.voicePitch}
          onChange={(value) =>
            changeSettings(readerSettings, "voicePitch", value)
          }
          min={0}
          max={2}
          step={0.1}
          divClassName={inputDivStyle}
          className={inputStyle}
        />
        <SliderInput
          label="Volume"
          value={readerSettings.current.voiceVolume}
          onChange={(value) =>
            changeSettings(readerSettings, "voiceVolume", value)
          }
          min={0}
          max={1}
          step={0.01}
          divClassName={inputDivStyle}
          className={inputStyle}
        />
      </div>
    </div>
  );
}
