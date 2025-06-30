
import { MessageCircle, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ai-gray border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-ai-primary to-ai-secondary rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold gradient-text">Klarzo AI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming businesses through innovative AI solutions. 
              Join the future of intelligent automation and data-driven decision making.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-ai-primary hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-ai-primary hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-ai-primary hover:text-black transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-ai-primary hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-ai-primary transition-colors">Machine Learning</a></li>
              <li><a href="#" className="hover:text-ai-primary transition-colors">Conversational AI</a></li>
              <li><a href="#" className="hover:text-ai-primary transition-colors">Data Intelligence</a></li>
              <li><a href="#" className="hover:text-ai-primary transition-colors">AI Consulting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-ai-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-ai-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-ai-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-ai-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Klarzo AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
