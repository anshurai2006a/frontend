import { useEffect, useRef, useState } from 'react';

export function useCamera() {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'environment' } })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setReady(true);
        }
      })
      .catch((err) => setError(err.message));

    return () => {
      const stream = videoRef.current?.srcObject;
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const captureFrame = (onFrame) => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
    canvas.toBlob((blob) => onFrame(blob), 'image/jpeg', 0.7);
  };

  return { videoRef, ready, error, captureFrame };
}