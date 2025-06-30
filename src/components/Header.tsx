
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/lovable-uploads/fbaeef8a-089a-43b4-bbd1-ec4c39ebde39.png" 
                alt="Klarvia Logo" 
                className="w-8 h-8"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Klarvia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
            <a href="#approach" className="text-gray-300 hover:text-purple-400 transition-colors">Tips</a>
            <Link to="/journal" className="text-gray-300 hover:text-purple-400 transition-colors">Journal</Link>
            <Link to="/mood" className="text-gray-300 hover:text-purple-400 transition-colors">Mood</Link>
            <Link to="/talk" className="text-gray-300 hover:text-purple-400 transition-colors">Talk</Link>
            <Link 
              to="/assessment" 
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Assessment
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-in">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-300 hover:bg-gray-800 px-4 py-3 rounded-lg transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:bg-gray-800 px-4 py-3 rounded-lg transition-colors">
                About
              </a>
              <a href="#approach" className="bg-green-900 text-gray-300 px-4 py-3 rounded-lg transition-colors">
                Tips
              </a>
              <Link to="/journal" className="bg-yellow-900 text-gray-300 px-4 py-3 rounded-lg transition-colors">
                Journal
              </Link>
              <Link to="/mood" className="bg-purple-900 text-gray-300 px-4 py-3 rounded-lg transition-colors">
                Mood
              </Link>
              <Link to="/talk" className="text-gray-300 hover:bg-gray-800 px-4 py-3 rounded-lg transition-colors">
                Talk
              </Link>
              <Link to="/assessment" className="text-gray-300 hover:bg-gray-800 px-4 py-3 rounded-lg transition-colors">
                Assessment
              </Link>
              <button className="bg-orange-900 text-gray-300 font-medium px-4 py-3 rounded-lg mt-2 flex items-center space-x-2">
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
