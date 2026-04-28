import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, ChevronDown } from 'lucide-react';
import OpenAI from 'openai';
import { useAdmin } from '../context/AdminContext';

// Client is created dynamically inside the component from admin config

const INITIAL_MESSAGE = {
  id: 1,
  text: "Hi! I'm Isha, your Econstruct assistant. Ask me anything about our services, projects, or BIM consultancy.",
  sender: 'bot',
};

const QUICK_REPLIES = [
  'What services do you offer?',
  'Tell me about BIM',
  'How can I contact you?',
  'View our projects',
];

// Animated dots for typing indicator
const TypingDots = () => (
  <div className="flex items-center gap-1 py-1">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-[#fbc02d]"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
      />
    ))}
  </div>
);

// Bot avatar — small yellow "E" monogram
const BotAvatar = ({ size = 'sm' }) => (
  <div
    className={`rounded-full bg-[#fbc02d] flex items-center justify-center shrink-0 font-black text-black ${size === 'sm' ? 'w-7 h-7 text-[11px]' : 'w-10 h-10 text-sm'
      }`}
  >
    E
  </div>
);

const buildHistory = (msgs) =>
  msgs
    .filter((m) => m.id !== 1)
    .map((m) => ({
      role: m.sender === 'user' ? 'user' : 'assistant',
      content: m.text,
    }));

export default function Chatbot() {
  const { data } = useAdmin();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Build OpenAI client from admin-configured key, falling back to env var
  const openai = useMemo(() => {
    const key = data.chatbotConfig?.apiKey || import.meta.env.VITE_OPENAI_API_KEY || '';
    if (!key) return null;
    return new OpenAI({ apiKey: key, dangerouslyAllowBrowser: true });
  }, [data.chatbotConfig?.apiKey]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    if (!openai) {
      setMessages(p => [...p, { id: Date.now(), text: 'Chatbot is not configured. Please add an OpenAI API key in the admin panel.', sender: 'bot' }]);
      return;
    }

    setShowQuickReplies(false);

    const userMessage = { id: Date.now(), text: trimmed, sender: 'user' };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const model = data.chatbotConfig?.model || 'gpt-4o-mini';
      const response = await openai.chat.completions.create({
        model,
        messages: [
          { role: 'system', content: data.chatbotKnowledge },
          ...buildHistory(updatedMessages),
        ],
        max_tokens: 500,
        temperature: 0.7,
      });

      const botText =
        response.choices[0]?.message?.content?.trim() ||
        "I'm sorry, I couldn't generate a response. Please try again.";

      setMessages((prev) => [...prev, { id: Date.now() + 1, text: botText, sender: 'bot' }]);
    } catch (error) {
      console.error('OpenAI API error:', error);
      let errorText =
        "Sorry, I'm having trouble connecting right now. Please try again or contact us directly.";
      if (error?.status === 401) errorText = 'API key is invalid or missing.';
      else if (error?.status === 429) errorText = "Too many requests — please try again in a moment.";
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: errorText, sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleQuickReply = (text) => {
    sendMessage(text);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col items-end font-[Plus_Jakarta_Sans,sans-serif]">
      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            className="mb-4 w-[calc(100vw-2rem)] sm:w-[360px] flex flex-col rounded-2xl overflow-hidden shadow-[0_32px_80px_-12px_rgba(0,0,0,0.6)] border border-white/[0.06]"
            style={{ height: 520, maxHeight: 'calc(100dvh - 6rem)' }}
          >
            {/* ── Header ── */}
            <div className="relative bg-black px-5 py-4 flex items-center justify-between shrink-0 border-b border-white/[0.07]">
              {/* Yellow accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#fbc02d]" />

              <div className="flex items-center gap-3">
                <BotAvatar size="lg" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-[15px] tracking-tight">Isha</span>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#fbc02d]/80 bg-[#fbc02d]/10 px-2 py-0.5 rounded-full">
                      AI
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-medium">
                      {isLoading ? 'Typing…' : 'Online'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="Minimise chat"
                >
                  <ChevronDown size={18} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* ── Messages ── */}
            <div className="flex-grow overflow-y-auto bg-[#0a0a0a] px-4 py-5 space-y-4 scrollbar-hide">
              {messages.map((msg, idx) => {
                const isBot = msg.sender === 'bot';
                const isLast = idx === messages.length - 1;
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22 }}
                    className={`flex items-end gap-2 ${isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    {isBot && <BotAvatar size="sm" />}

                    <div
                      className={`max-w-[78%] px-4 py-3 text-[13.5px] leading-relaxed rounded-2xl ${isBot
                          ? 'bg-[#161616] text-white/85 border border-white/[0.07] rounded-bl-sm'
                          : 'bg-[#fbc02d] text-black font-semibold rounded-br-sm'
                        }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                );
              })}

              {/* Typing indicator */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-end gap-2"
                  >
                    <BotAvatar size="sm" />
                    <div className="bg-[#161616] border border-white/[0.07] rounded-2xl rounded-bl-sm px-4 py-3">
                      <TypingDots />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quick replies — shown only after the first bot message */}
              <AnimatePresence>
                {showQuickReplies && !isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="flex flex-wrap gap-2 pt-1"
                  >
                    {QUICK_REPLIES.map((qr) => (
                      <button
                        key={qr}
                        onClick={() => handleQuickReply(qr)}
                        className="text-[11.5px] font-semibold px-3 py-1.5 rounded-full border border-[#fbc02d]/40 text-[#fbc02d] hover:bg-[#fbc02d] hover:text-black transition-all duration-200"
                      >
                        {qr}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* ── Input ── */}
            <form
              onSubmit={handleSubmit}
              className="shrink-0 bg-[#0f0f0f] border-t border-white/[0.07] px-4 py-3"
            >
              <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-xl border border-white/[0.08] focus-within:border-[#fbc02d]/50 transition-colors px-3 py-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask Isha anything…"
                  disabled={isLoading}
                  className="flex-grow bg-transparent text-[13.5px] text-white placeholder:text-white/25 outline-none disabled:opacity-50"
                />
                <motion.button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  whileTap={{ scale: 0.88 }}
                  className="w-8 h-8 rounded-lg bg-[#fbc02d] flex items-center justify-center text-black shrink-0 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
                  aria-label="Send message"
                >
                  <Send size={14} strokeWidth={2.5} />
                </motion.button>
              </div>
              <p className="text-center text-[10px] text-white/20 mt-2 tracking-wide">
                Powered by Econstruct AI · GPT-4o mini
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FAB ── */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen((v) => !v)}
        className="relative w-14 h-14 rounded-full bg-[#fbc02d] text-black flex items-center justify-center shadow-[0_8px_32px_-4px_rgba(251,192,45,0.55)]"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -80, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 80, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X size={22} strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 80, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -80, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <Sparkles size={22} strokeWidth={2} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unread dot — shown when closed and there are messages beyond the greeting */}
        {!isOpen && messages.length > 1 && (
          <span className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-black" />
        )}
      </motion.button>
    </div>
  );
}
