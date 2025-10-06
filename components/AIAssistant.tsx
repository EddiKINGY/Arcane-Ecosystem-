import React, { useState, useRef, useEffect } from 'react';
import type { Message } from '../types';
import { BotIcon, SendIcon, CrownIcon } from './icons';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Welcome to ARCANE! I'm your AI Co-Founder. How can I help you navigate the ecosystem today?", sender: 'ai' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  const getAIResponse = async (message: string): Promise<Message> => {
    // Simulate premium feature check
    if (/(market analysis|predictive modeling|enterprise solution)/i.test(message)) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return {
        text: "This feature requires an AI Co-Founder Premium subscription. Premium gives you access to advanced analytics, predictive modeling, and automated workflow integrations. Would you like to learn more about upgrading?",
        sender: 'ai',
      };
    }

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return { text: data.reply || "Sorry, I couldn't get a response.", sender: 'ai' };

    } catch (error) {
      console.error('Failed to fetch AI response:', error);
      return { text: "Sorry, I'm having trouble connecting. Please try again later.", sender: 'ai' };
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '' || isTyping) return;

    const userMessage: Message = { text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);
    
    const aiResponse = await getAIResponse(currentInput);
    setMessages(prev => [...prev, aiResponse]);
    setIsTyping(false);
  };

  return (
    <>
      <div className={`fixed bottom-5 right-5 z-50 transition-transform duration-300 ${isOpen ? 'translate-x-full' : 'translate-x-0'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-arcane-accent hover:bg-purple-600 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Open AI Assistant"
        >
          <BotIcon className="w-8 h-8" />
        </button>
      </div>

      <div className={`fixed bottom-0 right-0 z-50 w-full max-w-md h-full md:h-auto md:max-h-[70vh] md:bottom-5 md:right-5 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col crystalline-card rounded-2xl glow-border shadow-2xl shadow-arcane-accent/30 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0">
            <div className="flex items-center space-x-3">
              <BotIcon className="w-8 h-8 text-arcane-highlight" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">AI Co-Founder</h3>
                <div className="flex items-center gap-1.5">
                    <p className="text-sm text-green-400">● Online</p>
                    <div className="flex items-center gap-1 text-xs font-bold bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded-full">
                        <CrownIcon className="w-3 h-3" />
                        Premium Available
                    </div>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white" aria-label="Close chat">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow p-4 space-y-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'ai' && <BotIcon className="w-6 h-6 text-arcane-highlight flex-shrink-0 mb-1" />}
                <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-arcane-accent text-white rounded-br-none' : 'bg-gray-200 dark:bg-arcane-secondary text-gray-900 dark:text-white rounded-bl-none'}`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-end gap-2 justify-start">
                  <BotIcon className="w-6 h-6 text-arcane-highlight flex-shrink-0 mb-1" />
                  <div className="px-4 py-2 rounded-2xl bg-gray-200 dark:bg-arcane-secondary rounded-bl-none">
                      <div className="flex items-center space-x-1.5">
                          <div className="typing-dot h-2 w-2 bg-gray-400 rounded-full"></div>
                          <div className="typing-dot h-2 w-2 bg-gray-400 rounded-full"></div>
                          <div className="typing-dot h-2 w-2 bg-gray-400 rounded-full"></div>
                      </div>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <div className="p-4 border-t border-white/10 flex-shrink-0">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about ARCANE..."
                className="w-full bg-gray-200 dark:bg-arcane-primary border-transparent focus:border-arcane-accent focus:ring-arcane-accent rounded-lg text-sm px-4 py-2"
                aria-label="Chat input"
                disabled={isTyping}
              />
              <button type="submit" className="bg-arcane-accent hover:bg-purple-600 text-white p-2.5 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Send message" disabled={isTyping}>
                <SendIcon className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAssistant;