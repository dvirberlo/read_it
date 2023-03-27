import { getVoices } from "@/services/readerService";
import { createContext, useContext, useEffect, useState } from "react";

export const VoicesContext = createContext<SpeechSynthesisVoice[]>([]);

export function VoicesProvider({ children }: { children: React.ReactNode }) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  useEffect(() => {
    window.speechSynthesis?.addEventListener("voiceschanged", () => {
      setVoices(getVoices());
    });
  }, []);
  return (
    <VoicesContext.Provider value={voices}>{children}</VoicesContext.Provider>
  );
}

export const useVoices = () => useContext(VoicesContext);
