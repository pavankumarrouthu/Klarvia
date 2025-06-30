
import { Brain, MessageSquare, BookOpen, Users, Heart, Lightbulb } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "AI Therapy Sessions",
      description: "Private, guided conversations with our AI therapist to help process emotions and find clarity.",
      features: ["Voice-based interactions", "Emotion recognition", "24/7 availability", "Progress tracking"]
    },
    {
      icon: Brain,
      title: "Mental Health Assessment",
      description: "Comprehensive screening tools to understand your current mental wellbeing and create personalized plans.",
      features: ["Emotional assessment", "Behavioral analysis", "Cognitive evaluation", "Personalized insights"]
    },
    {
      icon: BookOpen,
      title: "Course Curation",
      description: "Expert-backed guides and resources to help you understand and improve your mental health through structured learning.",
      features: ["CBT techniques", "Mindfulness training", "Journaling exercises", "Self-reflection tools"]
    },
    {
      icon: Users,
      title: "Psychologist Connect",
      description: "Connect with licensed mental health professionals when you need human support and specialized care.",
      features: ["Licensed therapists", "Video consultations", "Crisis support", "Specialized therapy"]
    },
    {
      icon: Heart,
      title: "Crisis Support",
      description: "Immediate support and resources available 24/7 for mental health emergencies and crisis situations.",
      features: ["24/7 crisis line", "Emergency resources", "Safety planning", "Immediate intervention"]
    },
    {
      icon: Lightbulb,
      title: "Wellness Insights",
      description: "Personalized insights and recommendations based on your mental health patterns and progress.",
      features: ["Pattern recognition", "Mood tracking", "Progress analytics", "Wellness recommendations"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Offerings</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering comprehensive mental health solutions through our AI technology, 
            personalized assessments, and expert-backed resources to improve wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-purple-200 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></div>
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
