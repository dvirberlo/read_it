import { useForceUpdate } from "@/hooks/useForceUpdate";
import { ReaderService } from "@/services/readerService";
import { createContext, useContext, useEffect, useRef } from "react";

export const ReaderContext = createContext<ReaderService>(new ReaderService());

export function ReaderProvider({ children }: { children: React.ReactNode }) {
  const readerService = useRef(new ReaderService());

  return (
    <ReaderContext.Provider value={readerService.current}>
      {children}
    </ReaderContext.Provider>
  );
}

export const useReader = () => useContext(ReaderContext);

export const useReaderState = (readerService: ReaderService) => {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    readerService.changeListeners.push(forceUpdate);
    return () => {
      readerService.changeListeners.splice(
        readerService.changeListeners.indexOf(forceUpdate),
        1
      );
    };
  }, [readerService, forceUpdate]);

  return readerService.state;
};
