import { useCallback, useState } from "react";

export function useForceUpdate() {
  const [, setDummy] = useState(0);
  return useCallback(() => setDummy((dummy) => dummy + 1), []);
}
