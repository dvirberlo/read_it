import { LiveObject, useLiveObject } from "@/hooks/useLiveObject";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { defaultReaderSettings, ReaderSettings } from "@/types/readerSettings";
import { createContext, useContext } from "react";
import { useReader } from "./readerProvider";

export const ReaderSettingsContext = createContext<LiveObject<ReaderSettings>>({
  current: defaultReaderSettings,
  set: () => {},
  areEqual: () => false,
});

export function ReaderSettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const readerService = useReader();
  const [readerSettings, setReaderSettings] = useLocalStorage<ReaderSettings>(
    "readerSettings",
    defaultReaderSettings,
    (newSettings) => readerService.changeSettings(newSettings)
  );

  const liveObj = useLiveObject(
    readerSettings,
    (newSettings: ReaderSettings) => {
      setReaderSettings(newSettings);
      readerService.changeSettings(newSettings);
    }
  );

  return (
    <ReaderSettingsContext.Provider value={liveObj}>
      {children}
    </ReaderSettingsContext.Provider>
  );
}

export const useReaderSettings = () => useContext(ReaderSettingsContext);
