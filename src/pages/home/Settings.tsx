import { SliderInput } from "@/components/inputs/SliderInput";
import { LiveObject, setLiveObject } from "@/hooks/useLiveObject";
import { useReaderSettings } from "@/providers/readerSettingsProvider";
import { useUserSettings } from "@/providers/userSettingsProvider";
import { useVoices } from "@/providers/voicesProvider";
import { useCallback } from "react";
import { ChoiceSetting } from "../../components/inputs/ChoiceInput";
import { ToggleSetting } from "../../components/inputs/ToggleInput";
import { Delayer } from "../../lib/delayer";

const inputDivStyle: string =
  "flex flex-row items-center my-2 justify-between w-full max-w-[600px]";
const inputStyle: string = "max-w-[500px] w-2/3";

export function Settings({ readDelayer }: { readDelayer: Delayer }) {
  const readerSettings = useReaderSettings();
  const userSettings = useUserSettings();
  const voices = useVoices();

  const changeSettings = useCallback(
    <T extends object>(
      settings: LiveObject<T>,
      key: keyof T,
      value: T[keyof T]
    ) => readDelayer(() => setLiveObject(settings, key, value)),
    [readDelayer]
  );

  return (
    <div className="w-full">
      <div className="flex flex-col flex-wrap p-2 w-full items-center">
        <ToggleSetting
          label="Auto Play"
          value={userSettings.current.autoPlay}
          onChange={(value) => changeSettings(userSettings, "autoPlay", value)}
          divClassName={inputDivStyle}
          className={inputStyle}
        />
        {voices?.length ? (
          <ChoiceSetting
            label="Voice"
            values={voices?.map((voice) => voice.name) ?? []}
            selectedIndex={readerSettings.current.voiceVoiceIndex}
            onChange={(index) =>
              changeSettings(readerSettings, "voiceVoiceIndex", index)
            }
            divClassName={inputDivStyle}
            className={inputStyle}
          />
        ) : null}
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
