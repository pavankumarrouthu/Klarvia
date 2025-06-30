
import { Brain, MessageSquare, BarChart3, Shield, Cpu, Lightbulb } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Custom ML models tailored to your business needs, from predictive analytics to computer vision.",
      features: ["Predictive Analytics", "Computer Vision", "NLP Processing"]
    },
    {
      icon: MessageSquare,
      title: "Conversational AI",
      description: "Intelligent chatbots and virtual assistants that enhance customer experience and support.",
      features: ["Smart Chatbots", "Voice Assistants", "24/7 Support"]
    },
    {
      icon: BarChart3,
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights with advanced analytics and visualization.",
      features: ["Real-time Analytics", "Data Visualization", "Business Intelligence"]
    },
    {
      icon: Shield,
      title: "AI Security",
      description: "Protect your AI systems with robust security measures and ethical AI practices.",
      features: ["Ethical AI", "Data Privacy", "Model Security"]
    },
    {
      icon: Cpu,
      title: "AI Infrastructure",
      description: "Scalable cloud infrastructure and deployment solutions for AI applications.",
      features: ["Cloud Deployment", "Auto Scaling", "Performance Optimization"]
    },
    {
      icon: Lightbulb,
      title: "AI Consulting",
      description: "Strategic guidance to help you identify and implement the right AI solutions.",
      features: ["Strategy Planning", "ROI Analysis", "Implementation Roadmap"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">AI Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="ai-card group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-ai-primary to-ai-secondary rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow">
                <service.icon className="w-6 h-6 text-black" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-ai-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
