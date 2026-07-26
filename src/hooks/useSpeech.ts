import { useCallback, useEffect, useState } from "react";

export function useSpeech() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const loadVoices = () => setVoices(window.speechSynthesis.getVoices());
    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
  }, []);

  const germanVoice = voices.find((v) => v.lang.toLowerCase().startsWith("de"));

  const speak = useCallback(
    (text: string) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window) || !germanVoice) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = germanVoice;
      utterance.lang = germanVoice.lang;
      window.speechSynthesis.speak(utterance);
    },
    [germanVoice],
  );

  return { speak, hasGermanVoice: Boolean(germanVoice) };
}
