export const delayed = (fn: () => void, delay: number) => {
  let timeout: NodeJS.Timeout | undefined;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  };
};

export const createDelayer = (delay: number): Delayer => {
  let timeout: NodeJS.Timeout | undefined;
  return (fn: () => void) => {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  };
};

export type Delayer = (fn: () => unknown) => void;
