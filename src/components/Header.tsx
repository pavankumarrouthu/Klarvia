
import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ai-dark/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-ai-primary to-ai-secondary rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold gradient-text">Klarzo AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-ai-primary transition-colors">Home</a>
            <a href="#services" className="text-gray-300 hover:text-ai-primary transition-colors">Services</a>
            <a href="#about" className="text-gray-300 hover:text-ai-primary transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-ai-primary transition-colors">Contact</a>
            <button className="ai-button">Get Started</button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-ai-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-in">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-300 hover:text-ai-primary transition-colors py-2">Home</a>
              <a href="#services" className="text-gray-300 hover:text-ai-primary transition-colors py-2">Services</a>
              <a href="#about" className="text-gray-300 hover:text-ai-primary transition-colors py-2">About</a>
              <a href="#contact" className="text-gray-300 hover:text-ai-primary transition-colors py-2">Contact</a>
              <button className="ai-button w-full mt-4">Get Started</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
