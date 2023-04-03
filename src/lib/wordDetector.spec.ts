import { describe, expect, it } from "vitest";
import { getWordEndIndex, getWordStartIndex } from "./wordDetector";

describe("getWordStartIndex", () => {
  it("returns 0 for the first word", () => {
    expect(getWordStartIndex("hello world", 0)).toBe(0);
  });

  it("returns the correct index for the middle of a word", () => {
    expect(getWordStartIndex("hello world", 4)).toBe(0);
  });

  it("returns the correct index for the end of a word", () => {
    expect(getWordStartIndex("hello world", 5)).toBe(6);
  });

  it("returns the correct index for the last word", () => {
    expect(getWordStartIndex("hello world", 11)).toBe(6);
  });

  it("returns 0 for an empty string", () => {
    expect(getWordStartIndex("", 0)).toBe(0);
  });
});

describe("getWordEndIndex", () => {
  it("returns the end of the string for the last word", () => {
    expect(getWordEndIndex("hello world", 11)).toBe(11);
  });

  it("returns the correct index for the middle of a word", () => {
    expect(getWordEndIndex("hello world", 4)).toBe(5);
  });

  it("returns the correct index for the end of a word", () => {
    expect(getWordEndIndex("hello world", 5)).toBe(5);
  });

  it("returns the correct index for the first word", () => {
    expect(getWordEndIndex("hello world", 4)).toBe(5);
  });

  it("returns the end of the string for an empty string", () => {
    expect(getWordEndIndex("", 0)).toBe(0);
  });
});
