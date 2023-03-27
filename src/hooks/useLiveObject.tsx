import { useCallback, useState } from "react";

export type LiveObject<T extends object> = {
  current: T;
  set: (update: (object: T) => T) => void;
  areEqual: (a: T, b: T) => boolean;
};

export function useLiveObject<T extends object>(
  initial: T,
  onChange?: (object: T) => void,
  areEqual = (a: T, b: T) => false
): LiveObject<T> {
  const [current, setCurrent] = useState(initial);
  const set = useCallback(
    (update: (object: T) => T) => {
      const updated = update(current);
      setCurrent({ ...updated });
      onChange?.(updated);
    },
    [current]
  );
  return { current, set, areEqual };
}

export const setLiveObject = <T extends object>(
  live: LiveObject<T>,
  key: keyof T,
  value: T[keyof T]
) => {
  live.set((o) => {
    o[key] = value;
    return o;
  });
};

export module Compare {
  export const byReference = <T extends object>(a: T, b: T) => a === b;
  export const byJson = <T extends object>(a: T, b: T) =>
    JSON.stringify(a) === JSON.stringify(b);
  export const oneLevel = <T extends object>(a: T, b: T) => {
    for (const key in a) {
      if (a[key] !== b[key]) return false;
    }
    return true;
  };
  export const never = <T extends object>(a: T, b: T) => false;
  export const always = <T extends object>(a: T, b: T) => true;
}
