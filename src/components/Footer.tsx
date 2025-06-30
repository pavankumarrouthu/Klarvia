
import { Heart, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Klarvia</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              AI-powered mental health support that's affordable, private, and always available. 
              Your journey to better mental health starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">AI Therapy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Mental Health Assessment</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Course Curation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Psychologist Connect</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Crisis Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Mental Health Guides</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Self-Help Tools</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Community Support</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Crisis Resources</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            &copy; {currentYear} Klarvia. All rights reserved. Your mental health matters.
          </p>
          <p className="text-sm text-gray-500">
            If you're having thoughts of self-harm, please reach out for help immediately. 
            Contact your local emergency services or a crisis helpline.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
