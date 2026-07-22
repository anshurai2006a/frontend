import { useState, useCallback } from 'react';

export function useAlerts() {
  const [alerts, setAlerts] = useState([]);

  const addAlert = useCallback((message) => {
    const id = Date.now();
    setAlerts((prev) => [...prev, { id, message }]);

    setTimeout(() => {
      setAlerts((prev) => prev.filter((a) => a.id !== id));
    }, 5000);
  }, []);

  return { alerts, addAlert };
}