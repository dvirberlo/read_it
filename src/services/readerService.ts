import { detectLanguageChars, Language } from "@/lib/languageDetector";
import { emptyReadingState, ReadingState } from "@/types/reader";
import { ReaderSettings } from "@/types/readerSettings";

export class ReaderService {
  public readonly speechUtterance?: SpeechSynthesisUtterance;
  private text: string = "";
  public readonly state: ReadingState = emptyReadingState;

  public readonly changeListeners: (() => void)[] = [];
  private readonly onStatusChange = () =>
    this.changeListeners.forEach((listener) => listener());

  constructor(private synth = window.speechSynthesis) {
    try {
      if (!synth) {
        this.notSupported("SpeechSynthesis not supported");
        return;
      }
      this.speechUtterance = new SpeechSynthesisUtterance();
      this.speechUtterance.addEventListener(
        "boundary",
        (event: SpeechSynthesisEvent) => {
          if (!event.charIndex || event.charIndex === this.state.charWordIndex)
            return;
          this.state.charWordIndex = event.charIndex;
          this.state.wordCharLength =
            event.charLength ?? this.state.wordCharLength;
          this.onStatusChange();
        }
      );
      this.speechUtterance.addEventListener("end", () => {
        this.cancel();
      });
      this.speechUtterance.addEventListener("error", (err) => {
        console.error(err);
        this.cancel();
      });
    } catch (e) {
      this.notSupported(e);
    }
  }

  private notSupported(e: unknown) {
    console.error(e);
    window.alert(
      "Your browser does not support speech synthesis. \nPlease, do the yourself a favor and use a modern browser."
    );
  }

  public readonly pause = () => {
    this.state.status = "paused";
    this.synth?.pause();
    this.onStatusChange();
  };
  public readonly resume = () => {
    this.state.status = "speaking";
    this.smartResume();
    this.onStatusChange();
  };
  public readonly cancel = (saveIndex = false) => {
    this.state.status = "stopped";
    if (!saveIndex) this.state.charWordIndex = emptyReadingState.charWordIndex;
    if (!saveIndex) this.state.charWordIndex = emptyReadingState.charWordIndex;
    this.synth?.cancel();
    this.onStatusChange();
  };
  public readonly getVoices = () => getVoices();

  public readonly speak = (text: string) => {
    if (!this.speechUtterance) return;
    this.text = text;
    const lang = detectLanguageChars(text) ?? "en-US";
    if (this.speechUtterance.voice?.lang !== lang) this.setLangVoice(lang);
    this.speechUtterance.lang = lang;
    this.speechUtterance.text = text;
    this.cancel();
    this.state.status = "speaking";
    this.synth?.speak(this.speechUtterance);
    this.onStatusChange();
  };

  private readonly setLangVoice = (lang: Language) => {
    if (!this.speechUtterance) return;
    const voices = this.synth.getVoices();
    const voice = voices.find((v) => v.lang === lang);
    if (voice) this.speechUtterance.voice = voice;
  };

  private readonly smartResume = () =>
    this.speak(this.text.substring(this.state.charWordIndex));

  public readonly changeSettings = (settings: ReaderSettings) => {
    const setBreak = this.state.status === "speaking";
    if (setBreak) this.cancel(true);
    this.setUtteranceSettings(settings);
    if (setBreak) this.smartResume();
  };

  private readonly setUtteranceSettings = (settings: ReaderSettings) => {
    if (!this.speechUtterance) return;
    this.speechUtterance.voice =
      this.synth.getVoices()[settings.voiceVoiceIndex];
    this.speechUtterance.rate = settings.voiceRate;
    this.speechUtterance.pitch = settings.voicePitch;
    this.speechUtterance.volume = settings.voiceVolume;
  };
}

export const getVoices = () => {
  const synth = window.speechSynthesis;
  if (!synth) return [];
  return synth.getVoices();
};
