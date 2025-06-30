
import { Star, Quote } from 'lucide-react';

const AboutSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechCorp",
      content: "Klarzo AI transformed our data processing capabilities. Their machine learning solutions increased our efficiency by 300%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      position: "CEO, InnovateNow",
      content: "The conversational AI they developed for us handles 80% of customer queries automatically. Outstanding results!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      position: "Director, DataFlow Inc",
      content: "Professional, innovative, and results-driven. Klarzo AI is our go-to partner for all AI initiatives.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-ai-gray">
      <div className="max-w-7xl mx-auto">
        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Leading the <span className="gradient-text">AI Revolution</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              At Klarzo AI, we're passionate about democratizing artificial intelligence. 
              Our team of experts combines cutting-edge technology with deep industry knowledge 
              to deliver AI solutions that drive real business impact.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              From startups to Fortune 500 companies, we've helped organizations across 
              industries harness the power of AI to innovate, optimize, and grow.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-2">5+ Years</div>
                <div className="text-gray-400">AI Expertise</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-2">50+ Teams</div>
                <div className="text-gray-400">Specialists</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-ai-primary/20 to-ai-secondary/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-ai-primary to-ai-secondary rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                  <Quote className="w-12 h-12 text-black" />
                </div>
                <p className="text-xl font-semibold text-white">
                  "AI is the most powerful technology force of our time"
                </p>
                <p className="text-gray-400 mt-2">- Our Vision</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h3>
          <p className="text-gray-400">Trusted by ambitious companies worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="ai-card animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-ai-primary fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-ai-primary to-ai-secondary rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-semibold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
