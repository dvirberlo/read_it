const languages = {
  "en-US": /^[A-Za-z0-9\s.,?!'"()]+$/,
  "ar-SA": /^[\u0600-\u06FF\s.,?!'"()]+$/,
  "he-IL": /^[\u0590-\u05FF\s.,?!'"()]+$/,
  "zh-CN": /^[\u4E00-\u9FFF\s.,?!'"()]+$/,
  "hi-IN": /^[\u0900-\u097F\s.,?!'"()]+$/,
  "bn-BD": /^[\u0980-\u09FF\s.,?!'"()]+$/,
  "ru-RU": /^[\u0400-\u04FF\s.,?!'"()]+$/,
  "el-GR": /^[\u0370-\u03FF\s.,?!'"()]+$/,
  "th-TH": /^[\u0E00-\u0E7F\s.,?!'"()]+$/,
  "ko-KR": /^[\u1100-\u11FF\uAC00-\uD7AF\s.,?!'"()]+$/,
  "ja-JP": /^[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF\s.,?!'"()]+$/,
};

export type Language = keyof typeof languages;

export const defaultSubstringLength = 32;

export function detectLanguageChars(
  text: string,
  substringLen = defaultSubstringLength
): Language | undefined {
  const str = text.substring(0, substringLen);
  let lang: Language;
  for (lang in languages) if (languages[lang].test(str)) return lang;
}
