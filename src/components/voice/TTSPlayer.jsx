"use client";
import { useEffect } from 'react';

export default function TTSPlayer({ message }) {
  useEffect(() => {
    if (!message) return;
    const utterance = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(utterance);
  }, [message]);

  return null;
}