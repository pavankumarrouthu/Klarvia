
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-ai-gray border border-ai-primary/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-ai-primary" />
            <span className="text-sm text-ai-primary font-medium">AI FOR ALL STAGES</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your Business with{' '}
            <span className="gradient-text">AI Innovation</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to streamline operations, 
            enhance decision-making, and unlock unprecedented growth opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="ai-button flex items-center space-x-2 text-lg px-8 py-4">
              <span>Explore Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="ai-button-outline flex items-center space-x-2 text-lg px-8 py-4">
              <Zap className="w-5 h-5" />
              <span>See Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-400">AI Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-400">AI Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default HeroSection;
