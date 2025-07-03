'use client';

import { useState } from 'react';

type Message = {
  sender: 'User' | 'Ava';
  text: string;
};

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { sender: 'User', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat/route', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const avaReply: Message = { sender: 'Ava', text: data.response };
      setMessages((prev) => [...prev, avaReply]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: 'Ava', text: 'Something went wrong. Ava is offline.' },
      ]);
    } finally {
      setInput('');
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-3xl w-full p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[75%] px-4 py-2 rounded-xl text-sm ${
              msg.sender === 'User'
                ? 'bg-black text-white ml-auto'
                : 'bg-gray-100 text-black mr-auto'
            }`}
          >
            <strong>{msg.sender === 'User' ? 'You' : 'Ava'}:</strong> {msg.text}
          </div>
        ))}
        {loading && (
          <div className="text-gray-400 text-sm italic ml-2">Ava is thinking...</div>
        )}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-sm"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded-xl text-sm hover:bg-gray-800"
        >
          Send
        </button>
      </div>
    </div>
  );
}