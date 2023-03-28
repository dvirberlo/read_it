export const getWordStartIndex = (text: string, charIndex: number) => {
  const index = text.lastIndexOf(" ", charIndex);
  return index === -1 ? 0 : index + 1;
};

export const getWordEndIndex = (text: string, charIndex: number) => {
  const index = text.indexOf(" ", charIndex);
  return index === -1 ? text.length : index;
};
