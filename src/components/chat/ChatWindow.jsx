"use client";
import { useState } from 'react';
import { askConstructionQuestion } from '@/services/ragService';
import MessageBubble from './MessageBubble';
import Button from '../ui/Button';

export default function ChatWindow({ siteId }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    const answer = await askConstructionQuestion(input, siteId);
    setMessages((prev) => [...prev, { role: 'ai', text: answer }]);
  };

  return (
    <div className="flex flex-col h-96 border rounded-lg p-4">
      <div className="flex-1 overflow-y-auto mb-2">
        {messages.map((m, i) => (
          <MessageBubble key={i} role={m.role} text={m.text} />
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 border rounded px-3 py-2"
          placeholder="Can I drill here?"
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </div>
  );
}