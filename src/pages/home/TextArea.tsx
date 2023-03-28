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
    if (userSettings.current.autoHighlight)
      textAreaRef.current?.setSelectionRange(
        readerState.charWordIndex,
        readerState.charWordIndex + readerState.wordCharLength
      );

    if (userSettings.current.autoScroll)
      textAreaRef.current?.scrollTo({
        top: getScrollTop(textAreaRef.current, readerState.charWordIndex),
        behavior: "smooth",
      });
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

const getScrollTop = (
  textArea: HTMLTextAreaElement,
  charIndex: number
): number => {
  const lineHeight = parseInt(getComputedStyle(textArea).lineHeight, 10);
  const linesPerPage = Math.floor(textArea.clientHeight / lineHeight);
  const totalLines = textArea.value.substr(0, charIndex).split("\n").length;

  return lineHeight * (totalLines - linesPerPage);
};
