import { ReaderService, getVoices } from "./readerService";
import { beforeEach, describe, it, expect, afterEach, vi } from "vitest";
import { emptyReadingState } from "@/types/reader";

describe("ReaderService", () => {
  let readerService: ReaderService;

  beforeEach(() => {
    readerService = new ReaderService();
  });

  afterEach(() => {
    readerService.cancel();
  });

  it("should instantiate properly", () => {
    expect(readerService).toBeTruthy();
    expect(readerService.state).toEqual(emptyReadingState);
    expect(readerService.changeListeners).toEqual([]);
  });

  it("should get the available voices", () => {
    const voices = getVoices();
    expect(voices).not.toBeNull();
  });

  it("should not support SpeechSynthesis if the API is not available", () => {
    (window as any).speechSynthesis = undefined;
    readerService = new ReaderService();
    expect(readerService.speechUtterance).toBeUndefined();
    // expect(console.error).toHaveBeenCalledTimes(1);
  });
});
