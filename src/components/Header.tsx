
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/lovable-uploads/fbaeef8a-089a-43b4-bbd1-ec4c39ebde39.png" 
                alt="Klarvia Logo" 
                className="w-8 h-8"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Klarvia
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-purple-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">About</a>
            <a href="#approach" className="text-gray-600 hover:text-purple-600 transition-colors">Tips</a>
            <a href="#services" className="text-gray-600 hover:text-purple-600 transition-colors">Journal</a>
            <a href="#resources" className="text-gray-600 hover:text-purple-600 transition-colors">Mood</a>
            <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">Talk</a>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
              Assessment
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-purple-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Redesigned based on your menu image */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-in">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="bg-blue-100 text-purple-700 font-medium px-4 py-3 rounded-lg transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors">
                About
              </a>
              <a href="#approach" className="bg-green-100 text-gray-700 px-4 py-3 rounded-lg transition-colors">
                Tips
              </a>
              <a href="#services" className="bg-yellow-100 text-gray-700 px-4 py-3 rounded-lg transition-colors">
                Journal
              </a>
              <a href="#resources" className="bg-purple-100 text-gray-700 px-4 py-3 rounded-lg transition-colors">
                Mood
              </a>
              <a href="#contact" className="text-gray-700 hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors">
                Talk
              </a>
              <a href="#assessment" className="bg-blue-100 text-purple-700 px-4 py-3 rounded-lg transition-colors">
                Assessment
              </a>
              <button className="bg-orange-200 text-gray-700 font-medium px-4 py-3 rounded-lg mt-2 flex items-center space-x-2">
                <span>👤</span>
                <span>Sign Up</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
