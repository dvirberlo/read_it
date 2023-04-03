const languages = {
  // thank you copilot
  // duplicates have been commented out

  // japanese first, since the chinese regex also matches japanese
  "ja-JP": /.*[\u3040-\u309f\u30a0-\u30ff\uff66-\uff9f].*/,
  "zh-CN": /.*[\u4e00-\u9fa5].*/,

  "ko-KR": /.*[\uac00-\ud7a3].*/,
  "ru-RU": /.*[\u0400-\u04ff].*/,
  "fr-FR": /.*[\u00c0-\u017f].*/,
  // "de-DE", "es-ES", "it-IT", "pt-PT", "nl-NL", "pl-PL", "tr-TR", "cs-CZ", "da-DK", "fi-FI", "nb-NO", "sv-SE", "hu-HU", "el-GR", "ro-RO", "sk-SK", "sl-SI", "bg-BG", "uk-UA": /.*[\u00c0-\u017f].*/,
  "he-IL": /.*[\u0590-\u05ff].*/,
  "ar-SA": /.*[\u0600-\u06ff].*/,
  // "fa-IR": /.*[\u0600-\u06ff].*/,
  "hi-IN": /.*[\u0900-\u097f].*/,
  "th-TH": /.*[\u0e00-\u0e7f].*/,
  // "vi-VN", "id-ID", "ms-MY", "bn-BD", "bn-IN", "pa-IN", "ta-IN", "te-IN", "kn-IN", "ml-IN", "mr-IN", "gu-IN", "or-IN", "ta-LK": /.*[\u0e00-\u0e7f].*/,
  "zh-TW": /.*[\u4e00-\u9fa5].*/,
  // "zh-HK", "zh-SG": /.*[\u4e00-\u9fa5].*/,

  // english last, since the regex also matches other languages
  "en-US": /.*[a-zA-Z].*/,
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
