import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../constants';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

interface ChatInterfaceProps {
  language: Language;
  isOpen: boolean;
  onToggle: (open: boolean) => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

/**
 * ChatInterface Component
 * 
 * A floating chat assistant powered by Google Gemini API.
 * It provides diet and nutrition advice contextually aware of the user's
 * selected language.
 * 
 * Features:
 * - Floating Action Button (FAB) to toggle visibility
 * - Persisted chat session during component lifecycle
 * - Auto-language switching based on app setting
 * - Streaming-like UI state (Thinking...)
 */
const ChatInterface: React.FC<ChatInterfaceProps> = ({ language, isOpen, onToggle }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Use a ref to persist the chat session across renders without causing re-renders
  const chatSessionRef = useRef<Chat | null>(null);

  /**
   * Initializes or Re-initializes the chat session when language changes.
   * This ensures the AI system instruction is updated to the preferred language.
   */
  useEffect(() => {
    const initChat = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        // Determine language name for system instruction
        const langName = language === 'hi' ? 'Hindi' : language === 'te' ? 'Telugu' : 'English';
        
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: `You are a compassionate and knowledgeable nutrition assistant for an app called 'RA Diet'. 
            The app helps people with Rheumatoid Arthritis plan anti-inflammatory meals (North Indian, South Indian, Continental). 
            
            Your goal is to help users understand the anti-inflammatory benefits of ingredients, suggest substitutions for specific Indian or Continental dishes if they dislike something, and provide gentle motivation. 
            
            Current User Language: ${langName}.
            Please reply primarily in ${langName}, or in the language the user speaks if different.
            Keep responses concise, encouraging, and easy to read on a mobile device. 
            Avoid giving medical advice; focus on nutrition and wellness.`,
          },
        });

        // Reset conversation with a localized welcome message
        setMessages([{
          id: 'welcome',
          text: UI_TRANSLATIONS.chatWelcome[language],
          sender: 'ai'
        }]);
      } catch (error) {
        console.error("Failed to initialize AI chat:", error);
      }
    };

    initChat();
  }, [language]);

  // Scroll to bottom when messages change or chat is opened
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  /**
   * Handles sending a message to the Gemini API.
   */
  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current) return;

    const userText = input.trim();
    setInput("");
    
    // Optimistically add user message
    const userMsgId = Date.now().toString();
    setMessages(prev => [...prev, { id: userMsgId, text: userText, sender: 'user' }]);
    setIsLoading(true);

    try {
      const response = await chatSessionRef.current.sendMessage({ message: userText });
      const aiText = response.text || "I'm sorry, I couldn't process that.";
      
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), text: aiText, sender: 'ai' }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), text: "Sorry, something went wrong. Please try again.", sender: 'ai' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Window Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto transition-opacity" 
            onClick={() => onToggle(false)}
            aria-label="Close chat"
          />
          
          {/* Chat Container */}
          <div className="bg-white w-full sm:w-[400px] h-[85vh] sm:h-[600px] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col pointer-events-auto transform transition-transform duration-300 ease-out animate-in slide-in-from-bottom-10">
            {/* Header */}
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-emerald-50 rounded-t-2xl">
              <div className="flex items-center gap-2 text-emerald-800">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-bold text-lg">{UI_TRANSLATIONS.chatTitle[language]}</h3>
              </div>
              <button 
                onClick={() => onToggle(false)}
                className="p-1 rounded-full hover:bg-emerald-100 text-emerald-700 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-emerald-600 text-white rounded-tr-none' 
                        : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-slate-500 text-xs px-4 py-2 rounded-2xl rounded-tl-none border border-slate-200 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    {UI_TRANSLATIONS.chatThinking[language]}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-slate-200">
              <div className="flex items-end gap-2 bg-slate-100 rounded-2xl p-1.5 pl-4 border border-transparent focus-within:border-emerald-300 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder={UI_TRANSLATIONS.chatPlaceholder[language]}
                  className="w-full bg-transparent border-none focus:ring-0 text-sm text-slate-800 placeholder:text-slate-400 resize-none max-h-24 py-2.5"
                  rows={1}
                  style={{ minHeight: '44px' }}
                  aria-label="Message input"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className={`p-2 rounded-xl mb-0.5 transition-all ${
                    input.trim() && !isLoading
                      ? 'bg-emerald-600 text-white shadow-md hover:bg-emerald-700 active:scale-95' 
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => onToggle(true)}
          className="fixed bottom-20 right-4 z-40 bg-emerald-600 text-white p-4 rounded-full shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group"
          aria-label="Open Diet Assistant"
        >
          <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          {/* Tooltip */}
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {UI_TRANSLATIONS.chatTitle[language]}
          </span>
        </button>
      )}
    </>
  );
};

export default ChatInterface;