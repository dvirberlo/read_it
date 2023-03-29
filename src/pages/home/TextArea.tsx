import { useReader, useReaderState } from "@/providers/readerProvider";
import { useUserSettings } from "@/providers/userSettingsProvider";
import { useEffect } from "react";

export interface TextAreaProps {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
  speak: () => void;
}

export const TextArea: React.FC<TextAreaProps> = ({ textAreaRef, speak }) => {
  const userSettings = useUserSettings();
  const readerService = useReader();
  const readerState = useReaderState(readerService);
  useEffect(() => {
    // Note: the order of these is important, since scrollTo mutates the textarea value
    if (userSettings.current.autoScroll)
      scrollTo(textAreaRef.current, readerState.charWordIndex);

    if (userSettings.current.autoHighlight)
      textAreaRef.current?.setSelectionRange(
        readerState.charWordIndex,
        readerState.charWordIndex + readerState.wordCharLength
      );
  }, [readerState.charWordIndex, readerState.wordCharLength]);
  return (
    <textarea
      ref={textAreaRef}
      className="resize-none w-full bg-background3 p-2 text-content1 focus:outline-none h-3/5"
      placeholder="Type or paste here to hear it spoken"
      autoFocus
      {...(userSettings.current.autoPlay && {
        onChange: speak,
      })}
    />
  );
};

/**
 * Scrolls the textarea to the given character index
 *
 * Note: this mutates the textarea value
 * @param textArea textarea element
 * @param charIndex character index to scroll to
 */
const scrollTo = (textArea: HTMLTextAreaElement | null, charIndex: number) => {
  if (!textArea || charIndex < 0) return;
  textArea.focus();
  var body = textArea.value;
  if (body) {
    textArea.value = body.substring(0, charIndex);
    textArea.scrollTop = charIndex;
    textArea.value = body;
  }
};
