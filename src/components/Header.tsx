
import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

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
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Klarzo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-purple-600 transition-colors">Home</a>
            <a href="#approach" className="text-gray-600 hover:text-purple-600 transition-colors">Approach</a>
            <a href="#services" className="text-gray-600 hover:text-purple-600 transition-colors">Services</a>
            <a href="#resources" className="text-gray-600 hover:text-purple-600 transition-colors">Resources</a>
            <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">Contact</a>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
              Talk to Klarzo AI
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-in">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-600 hover:text-purple-600 transition-colors py-2">Home</a>
              <a href="#approach" className="text-gray-600 hover:text-purple-600 transition-colors py-2">Approach</a>
              <a href="#services" className="text-gray-600 hover:text-purple-600 transition-colors py-2">Services</a>
              <a href="#resources" className="text-gray-600 hover:text-purple-600 transition-colors py-2">Resources</a>
              <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors py-2">Contact</a>
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium px-6 py-2 rounded-full w-full mt-4">
                Talk to Klarzo AI
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
