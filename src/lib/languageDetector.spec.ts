import { describe, expect, it } from "vitest";
import { detectLanguageChars, Language } from "./languageDetector";

describe("detectLanguageChars", () => {
  const testCases: Array<[string, Language | undefined]> = [
    // English
    ["This is an English sentence.", "en-US"],
    // Chinese
    ["这是一个中文句子。", "zh-CN"],
    // Japanese
    ["これは日本語の文章です。", "ja-JP"],
    // Korean
    ["이것은 한국어 문장입니다.", "ko-KR"],
    // Russian
    ["Это русское предложение.", "ru-RU"],
    // French
    ["Ceci est une phrase française.", "fr-FR"],
    // Hebrew
    ["זהו משפט בעברית.", "he-IL"],
    // Arabic
    ["هذه جملة باللغة العربية.", "ar-SA"],
    // Hindi
    ["यह हिंदी में एक वाक्य है।", "hi-IN"],
    // Thai
    ["นี่เป็นประโยคภาษาไทย", "th-TH"],
    // No match
    ["1234567890", undefined],
  ];

  testCases.forEach(([text, expected]) => {
    it(`should detect language of "${text}" as "${expected}"`, () => {
      expect(detectLanguageChars(text)).toBe(expected);
    });
  });
});
