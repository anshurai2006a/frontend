"use client";
import { useSpeechToText } from '@/hooks/useSpeechToText';

export default function MicButton({ onResult }) {
  const { listening, startListening, transcript } = useSpeechToText();

  const handleClick = () => {
    startListening();
  };

  if (transcript) onResult(transcript);

  return (
    <button
      onClick={handleClick}
      className={`p-3 rounded-full ${listening ? 'bg-red-500' : 'bg-blue-500'} text-white`}
    >
      🎤 {listening ? 'Listening...' : 'Ask'}
    </button>
  );
}