"use client";
import { createContext, useContext, useRef, useState } from "react";

const SocketContext = createContext();

export function SocketProvider({ children }) {
  const socketRef = useRef(null);
  const [connected, setConnected] = useState(false);

  const connect = (url, onMessage) => {
    socketRef.current = new WebSocket(url);

    socketRef.current.onopen = () => setConnected(true);
    socketRef.current.onclose = () => setConnected(false);
    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      onMessage(data);
    };
  };

  const send = (data) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(data);
    }
  };

  const disconnect = () => {
    socketRef.current?.close();
  };

  return (
    <SocketContext.Provider value={{ connect, send, disconnect, connected }}>
      {children}
    </SocketContext.Provider>
  );
}

export function useSocket() {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used inside a SocketProvider");
  }
  return context;
}