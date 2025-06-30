
import { useState } from 'react';
import { MessageCircle, X, Send, Bot, User, Heart } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Klarvia, your AI mental wellness companion. I'm here to listen and support you. How are you feeling today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('anxious') || input.includes('worry') || input.includes('stressed')) {
      return "I hear that you're feeling anxious. That's completely valid. Let's try a simple breathing exercise together. Would you like me to guide you through a 4-7-8 breathing technique?";
    } else if (input.includes('sad') || input.includes('depressed') || input.includes('down')) {
      return "I'm sorry you're feeling this way. Your feelings are important and valid. Remember, it's okay to not be okay sometimes. Would you like to talk about what's been weighing on your mind?";
    } else if (input.includes('help') || input.includes('support')) {
      return "I'm here to provide support through our AI therapy sessions, mental health resources, and if needed, I can connect you with licensed professionals. What kind of support would be most helpful right now?";
    } else if (input.includes('assessment') || input.includes('test')) {
      return "Our mental health assessment can help you better understand your current wellbeing. It's a comprehensive but gentle process that takes about 10-15 minutes. Would you like to start your assessment?";
    } else {
      return "Thank you for sharing that with me. I'm here to listen without judgment. Your mental health matters, and taking the time to check in with yourself shows strength. How can I best support you today?";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-pulse"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Heart className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white border border-gray-200 rounded-xl shadow-2xl z-40 flex flex-col animate-slide-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-t-xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Klarvia AI Companion</h3>
                <p className="text-xs text-purple-100">Here to listen & support</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex items-start space-x-2 max-w-xs">
                  {message.sender === 'bot' && (
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-3 h-3 text-white" />
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-3 h-3 text-gray-600" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share what's on your mind..."
                className="flex-1 bg-gray-50 text-gray-800 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 border border-gray-200"
              />
              <button
                onClick={sendMessage}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 rounded-lg hover:shadow-md transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
