"use client";
import { useEffect } from 'react';
import { useCamera } from '@/hooks/useCamera';

export default function CameraFeed({ onFrame }) {
  const { videoRef, ready, error, captureFrame } = useCamera();

  useEffect(() => {
    if (!ready) return;
    const interval = setInterval(() => captureFrame(onFrame), 500);
    return () => clearInterval(interval);
  }, [ready]);

  if (error) return <p className="text-red-500">Camera error: {error}</p>;

  return <video ref={videoRef} autoPlay playsInline muted className="w-full rounded-lg" />;
}