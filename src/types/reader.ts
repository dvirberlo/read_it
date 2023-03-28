export type ReadingState = {
  status: ReaderStatus;
  charWordIndex: number;
  wordCharLength: number;
};
export type ReaderStatus = "speaking" | "paused" | "stopped";

export const emptyReadingState: ReadingState = {
  status: "stopped",
  charWordIndex: 0,
  wordCharLength: -1,
};
