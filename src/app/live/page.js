"use client";
import { useState } from "react";
import { useAlerts } from "@/hooks/useAlerts";
import CameraFeed from "@/components/camera/CameraFeed";
import DetectionOverlay from "@/components/camera/DetectionOverlay";
import AlertBanner from "@/components/alerts/AlertBanner";
import TTSPlayer from "@/components/voice/TTSPlayer";
import MicButton from "@/components/voice/MicButton";
import ChatWindow from "@/components/chat/ChatWindow";

export default function LivePage() {
  const { alerts, addAlert } = useAlerts();
  const [voiceQuery, setVoiceQuery] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");

  // Since there's no backend yet, this manually triggers a fake detection
  // Remove this once useWebSocket is connected to a real backend
  const simulateDetection = () => {
    addAlert("Helmet not detected");
  };

  // Mock "AI answer" for the mic flow until RAG backend exists
  const handleVoiceResult = (text) => {
    setVoiceQuery(text);
    setAiAnswer(`(Demo answer) You asked: "${text}" — backend not connected yet.`);
  };

  const latestAlert = alerts[alerts.length - 1]?.message;

  return (
    <div className="p-4">
      <div className="relative mb-4">
        <CameraFeed onFrame={() => {}} />
        <DetectionOverlay detections={[]} />
        <AlertBanner alerts={alerts} />
      </div>

      {/* Speaks out loud whenever a new alert or AI answer appears */}
      <TTSPlayer message={aiAnswer || latestAlert} />

      <div className="flex justify-center gap-4 mb-4">
        <MicButton onResult={handleVoiceResult} />
        <button
          onClick={simulateDetection}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm"
        >
          Simulate Alert (Demo)
        </button>
      </div>

      {voiceQuery && (
        <div className="border rounded-lg p-4 bg-gray-50 mb-4">
          <p className="text-sm text-gray-500">You asked:</p>
          <p className="font-medium mb-2">{voiceQuery}</p>
          <p className="text-sm text-gray-500">AI Answer:</p>
          <p>{aiAnswer}</p>
        </div>
      )}

      {/* Text-based chat for asking blueprint/SOP questions (RAG) */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Ask a Question</h2>
        <ChatWindow siteId="site-001" />
      </div>
    </div>
  );
}