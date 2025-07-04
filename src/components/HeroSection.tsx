
import { ArrowRight, Heart, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gray-800 border border-purple-700 rounded-full px-4 py-2 mb-8 shadow-sm">
            <img 
              src="/lovable-uploads/fbaeef8a-089a-43b4-bbd1-ec4c39ebde39.png" 
              alt="Klarvia Logo" 
              className="w-4 h-4"
            />
            <span className="text-sm text-purple-400 font-medium">Mental wellness, reimagined</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            Your mind. Our{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">mission.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Klarvia AI Therapist is here to listen. Experience a complete mental 
            health journey with our 3-step approach: self-assessment, AI therapy, 
            and expert support when you need it most.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 flex items-center space-x-2 text-lg">
              <span>Start Your Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-purple-600 text-purple-400 font-semibold px-8 py-4 rounded-full hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2 text-lg">
              <MessageCircle className="w-5 h-5" />
              <span>Talk to Klarvia AI</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">Private</div>
              <div className="text-gray-400">Fully encrypted conversations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-400">Always available support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">Compassionate</div>
              <div className="text-gray-400">Built with heart</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default HeroSection;
