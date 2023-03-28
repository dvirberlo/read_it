const languages = {
  "en-US": /.*[a-zA-Z].*/,
  // thank you copilot
  // duplicates have been commented out
  "zh-CN": /.*[\u4e00-\u9fa5].*/,
  "ja-JP": /.*[\u3040-\u309f\u30a0-\u30ff\uff66-\uff9f].*/,
  "ko-KR": /.*[\uac00-\ud7a3].*/,
  "ru-RU": /.*[\u0400-\u04ff].*/,
  "fr-FR": /.*[\u00c0-\u017f].*/,
  // "de-DE": /.*[\u00c0-\u017f].*/,
  // "es-ES": /.*[\u00c0-\u017f].*/,
  // "it-IT": /.*[\u00c0-\u017f].*/,
  // "pt-PT": /.*[\u00c0-\u017f].*/,
  // "nl-NL": /.*[\u00c0-\u017f].*/,
  // "pl-PL": /.*[\u00c0-\u017f].*/,
  // "tr-TR": /.*[\u00c0-\u017f].*/,
  // "cs-CZ": /.*[\u00c0-\u017f].*/,
  // "da-DK": /.*[\u00c0-\u017f].*/,
  // "fi-FI": /.*[\u00c0-\u017f].*/,
  // "nb-NO": /.*[\u00c0-\u017f].*/,
  // "sv-SE": /.*[\u00c0-\u017f].*/,
  // "hu-HU": /.*[\u00c0-\u017f].*/,
  // "el-GR": /.*[\u00c0-\u017f].*/,
  // "ro-RO": /.*[\u00c0-\u017f].*/,
  // "sk-SK": /.*[\u00c0-\u017f].*/,
  // "sl-SI": /.*[\u00c0-\u017f].*/,
  // "bg-BG": /.*[\u00c0-\u017f].*/,
  // "uk-UA": /.*[\u00c0-\u017f].*/,
  "he-IL": /.*[\u0590-\u05ff].*/,
  "ar-SA": /.*[\u0600-\u06ff].*/,
  // "fa-IR": /.*[\u0600-\u06ff].*/,
  "hi-IN": /.*[\u0900-\u097f].*/,
  "th-TH": /.*[\u0e00-\u0e7f].*/,
  // "vi-VN": /.*[\u0e00-\u0e7f].*/,
  // "id-ID": /.*[\u0e00-\u0e7f].*/,
  // "ms-MY": /.*[\u0e00-\u0e7f].*/,
  // "bn-BD": /.*[\u0e00-\u0e7f].*/,
  // "bn-IN": /.*[\u0e00-\u0e7f].*/,
  // "pa-IN": /.*[\u0e00-\u0e7f].*/,
  // "ta-IN": /.*[\u0e00-\u0e7f].*/,
  // "te-IN": /.*[\u0e00-\u0e7f].*/,
  // "kn-IN": /.*[\u0e00-\u0e7f].*/,
  // "ml-IN": /.*[\u0e00-\u0e7f].*/,
  // "mr-IN": /.*[\u0e00-\u0e7f].*/,
  // "gu-IN": /.*[\u0e00-\u0e7f].*/,
  // "or-IN": /.*[\u0e00-\u0e7f].*/,
  // "ta-LK": /.*[\u0e00-\u0e7f].*/,
  "zh-TW": /.*[\u4e00-\u9fa5].*/,
  // "zh-HK": /.*[\u4e00-\u9fa5].*/,
  // "zh-SG": /.*[\u4e00-\u9fa5].*/,
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
