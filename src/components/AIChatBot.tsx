import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Send, X, MessageSquare, Loader2 } from 'lucide-react';
import { streamAIResponse } from '../services/geminiService';

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    const updatedMessages = [...messages, { role: 'user' as const, content: userMessage }];
    setMessages(updatedMessages);
    setIsLoading(true);

    // Initial AI message placeholder for streaming
    setMessages(prev => [...prev, { role: 'ai', content: '' }]);

    await streamAIResponse(updatedMessages, (fullText) => {
      setMessages(prev => {
        const newMessages = [...prev];
        if (newMessages.length > 0) {
          newMessages[newMessages.length - 1] = { role: 'ai' as const, content: fullText };
        }
        return newMessages;
      });
      setIsLoading(false);
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-linear-to-br from-cyan-400 to-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center relative group"
          >
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity" />
            <Bot size={32} className="relative z-10" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-brand-dark animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="w-[350px] md:w-[400px] h-[500px] bg-brand-dark border border-white/10 shadow-2xl rounded-[32px] flex flex-col overflow-hidden backdrop-blur-3xl"
          >
            {/* Header */}
            <div className="p-6 bg-white/5 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-400/20 rounded-xl flex items-center justify-center text-cyan-400">
                  <Bot size={24} />
                </div>
                <div>
                  <h4 className="text-white font-serif font-bold text-sm tracking-tight uppercase">Call Clean AI</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white/50 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-start"
              >
                <div className="bg-white/5 p-4 rounded-2xl text-sm border border-white/5 font-light leading-relaxed text-white/80">
                  Dobar dan! Ja sam Vaš Call Clean asistent. Kako Vam mogu pomoći oko čišćenja Vašeg prostora?
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Cenovnik', 'Usluge', 'Dubinsko čišćenje', 'Kontakt'].map((q) => (
                      <button
                        key={q}
                        onClick={() => {
                          setInput(q);
                          // We trigger a slight delay to allow the user to see the input before auto-submitting
                          setTimeout(() => {
                            const btn = document.getElementById('chat-submit-btn');
                            btn?.click();
                          }, 10);
                        }}
                        className="text-[10px] px-3 py-1.5 bg-white/5 hover:bg-cyan-500/20 border border-white/10 rounded-full text-white/60 hover:text-cyan-400 transition-all active:scale-95 italic font-bold tracking-widest uppercase"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'ai' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                    msg.role === 'ai' 
                      ? 'bg-white/5 text-white/80 border border-white/5 font-light leading-relaxed' 
                      : 'bg-cyan-500 text-white font-medium shadow-lg shadow-cyan-500/20'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form 
              onSubmit={handleSubmit}
              className="p-6 bg-white/5 border-t border-white/5 flex gap-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pitajte bilo šta..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden focus:border-cyan-400 transition-all placeholder:text-white/20"
              />
              <button
                id="chat-submit-btn"
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-12 h-12 bg-cyan-500 text-white rounded-xl flex items-center justify-center hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <Send size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatBot;
