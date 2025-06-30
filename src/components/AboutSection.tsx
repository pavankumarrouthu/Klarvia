
import { Star, Quote, Heart, Shield, Brain, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Cognitive Behavioral Therapy (CBT)",
      description: "Evidence-based therapeutic approaches integrated into our AI"
    },
    {
      icon: Heart,
      title: "Mindfulness Techniques", 
      description: "Guided meditation and mindfulness practices for emotional regulation"
    },
    {
      icon: Quote,
      title: "Journaling & Self-Reflection",
      description: "Structured reflection exercises to promote self-awareness"
    },
    {
      icon: Users,
      title: "Active Listening Principles",
      description: "AI trained in empathetic communication and therapeutic listening"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Mission</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At Klarvia, we're committed to democratizing mental health support, making it affordable, 
            private, and available 24/7. Our AI-driven platform offers compassionate wellness 
            assistance to people worldwide.
          </p>
        </div>

        {/* How Klarvia Works */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-white">
              How Klarvia <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Works</span>
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Powered by cutting-edge AI, Klarvia delivers personalized mental health support 
              rooted in evidence-based practices.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-semibold text-white text-sm">{feature.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl flex items-center justify-center border border-gray-700">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <p className="text-xl font-semibold text-white mb-2">AI-Powered Support</p>
                <p className="text-gray-400">Advanced natural language processing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative order-2 lg:order-1">
            <div className="w-full h-96 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl flex items-center justify-center border border-gray-700">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <p className="text-xl font-semibold text-white mb-2">Privacy & Security</p>
                <p className="text-gray-400">End-to-end encrypted conversations</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in order-1 lg:order-2">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-white">
              Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Technology</span>
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Klarvia's advanced natural language processing understands human emotions and nuances, 
              delivering empathetic, tailored support for your unique needs.
            </p>
            
            <h4 className="text-xl font-semibold text-white mb-4">Privacy & Security</h4>
            <p className="text-gray-300 mb-8">
              Your privacy is sacred. Klarvia ensures end-to-end encryption for all conversations, 
              with no third-party data sharing and complete user control over personal data.
            </p>
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-yellow-900/20 border border-yellow-700 rounded-2xl p-8 mb-16">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-black font-bold text-sm">!</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">Important Note</h4>
              <p className="text-gray-300">
                Klarvia is a supportive tool, not a replacement for professional care. If you're in crisis, 
                please contact a qualified mental health professional or crisis service immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-6 text-white">
            Start Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Wellness Journey</span>
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our mission to redefine mental wellness. Your feedback shapes Klarvia into the 
            ultimate AI companion for support and growth.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 text-lg">
            Begin with Klarvia
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
