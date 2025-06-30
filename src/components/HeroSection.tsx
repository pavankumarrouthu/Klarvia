
import { ArrowRight, Heart, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white border border-purple-200 rounded-full px-4 py-2 mb-8 shadow-sm">
            <Heart className="w-4 h-4 text-purple-500" />
            <span className="text-sm text-purple-600 font-medium">Mental wellness, reimagined</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
            Your mind. Our{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">mission.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Klarzo AI Therapist is here to listen. Experience a complete mental 
            health journey with our 3-step approach: self-assessment, AI therapy, 
            and expert support when you need it most.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 flex items-center space-x-2 text-lg">
              <span>Start Your Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-purple-300 text-purple-600 font-semibold px-8 py-4 rounded-full hover:bg-purple-50 transition-all duration-300 flex items-center space-x-2 text-lg">
              <MessageCircle className="w-5 h-5" />
              <span>Talk to Klarzo AI</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">Private</div>
              <div className="text-gray-500">Fully encrypted conversations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-500">Always available support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">Compassionate</div>
              <div className="text-gray-500">Built with heart</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default HeroSection;
