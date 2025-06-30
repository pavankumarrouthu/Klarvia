
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, Send, MicOff } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const Talk = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm Klarvia, your AI mental health companion. How are you feeling today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: "Thank you for sharing that with me. How does talking about this make you feel? Is there anything specific you'd like to explore or understand better about what you're experiencing?",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-16 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Talking with Klarvia</h1>
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-6 mb-8 border border-gray-700">
            <h2 className="text-xl font-semibold text-purple-400 mb-2">Step 2: Voice-Based AI Therapy</h2>
            <p className="text-gray-300 mb-4">
              You're using Klarvia's AI therapy feature. Speak naturally about your thoughts and feelings, and I'll respond with empathy and guidance.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-400">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-xs text-white">1</span>
                </div>
                Self-Assessment
              </div>
              <div className="flex items-center text-sm text-purple-400 font-medium">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-xs text-white">2</span>
                </div>
                AI Therapy Active
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center mr-2">
                  <span className="text-xs text-white">3</span>
                </div>
                Professional Help
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl border border-gray-700 h-96 flex flex-col">
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-gray-700">
              <div className="flex space-x-3">
                <Button
                  onClick={toggleVoice}
                  className={`p-3 rounded-full ${
                    isListening 
                      ? 'bg-red-500 hover:bg-red-600' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                >
                  {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </Button>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message or click the mic to speak..."
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Button
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 p-3"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              Remember: Klarvia is here to support you, but it's not a replacement for professional help.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Talk;
