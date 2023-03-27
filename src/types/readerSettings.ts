export interface ReaderSettings {
  voiceVoiceIndex: number;
  voiceRate: number;
  voicePitch: number;
  voiceVolume: number;
}

export const defaultReaderSettings: ReaderSettings = {
  voiceVoiceIndex: 0,
  voiceRate: 1,
  voicePitch: 1,
  voiceVolume: 1,
};
