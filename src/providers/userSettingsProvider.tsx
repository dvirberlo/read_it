import { LiveObject, useLiveObject } from "@/hooks/useLiveObject";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { defaultUserSettings, UserSettings } from "@/types/userSettings";
import { createContext, useContext } from "react";

export const UserSettingsContext = createContext<LiveObject<UserSettings>>({
  current: defaultUserSettings,
  set: () => {},
  areEqual: () => false,
});

export function UserSettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userSettings, setUserSettings] = useLocalStorage<UserSettings>(
    "userSettings",
    defaultUserSettings
  );

  const liveObj = useLiveObject(userSettings, (newSettings: UserSettings) => {
    setUserSettings(newSettings);
  });

  return (
    <UserSettingsContext.Provider value={liveObj}>
      {children}
    </UserSettingsContext.Provider>
  );
}

export const useUserSettings = () => useContext(UserSettingsContext);
