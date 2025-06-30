
import { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

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
      text: "Hello! I'm Klarzo AI assistant. How can I help you with your AI needs today?",
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
    
    if (input.includes('service') || input.includes('help')) {
      return "I can help you with our AI services including Machine Learning, Chatbots, Data Analytics, and AI Consulting. Which area interests you most?";
    } else if (input.includes('price') || input.includes('cost')) {
      return "Our pricing varies based on your specific needs. I'd be happy to connect you with our team for a personalized quote. Would you like to schedule a consultation?";
    } else if (input.includes('demo')) {
      return "Great! I can arrange a demo for you. Please provide your email and preferred time, and our team will reach out to schedule it.";
    } else {
      return "That's an interesting question! For detailed information about our AI solutions, I'd recommend speaking with one of our specialists. Would you like me to connect you?";
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
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-ai-primary to-ai-secondary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-glow"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-black" />
        ) : (
          <MessageCircle className="w-6 h-6 text-black" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-ai-gray border border-gray-700 rounded-xl shadow-2xl z-40 flex flex-col animate-slide-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-ai-primary to-ai-secondary p-4 rounded-t-xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-ai-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-black">Klarzo AI Assistant</h3>
                <p className="text-xs text-gray-800">Online now</p>
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
                    <div className="w-6 h-6 bg-ai-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3 h-3 text-black" />
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-ai-primary text-black'
                        : 'bg-gray-800 text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ai-primary"
              />
              <button
                onClick={sendMessage}
                className="bg-ai-primary text-black p-2 rounded-lg hover:bg-ai-accent transition-colors"
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
