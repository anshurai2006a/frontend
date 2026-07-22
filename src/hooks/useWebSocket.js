import { useEffect, useRef, useState } from 'react';

export function useWebSocket(url, onMessage) {
  const ws = useRef(null);
  const [detections, setDetections] = useState([]);

  useEffect(() => {
    if (!url) return;
    ws.current = new WebSocket(url);

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setDetections(data.boxes || []);
      onMessage(data);
    };

    ws.current.onerror = (err) => {
      console.error('WebSocket error:', err);
    };

    return () => ws.current?.close();
  }, [url]);

  function sendFrame(blob) {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(blob);
    }
  }

  return { sendFrame, detections };
}