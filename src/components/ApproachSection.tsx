
import { Brain, MessageSquare, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApproachSection = () => {
  const steps = [
    {
      icon: Brain,
      title: "Self-Assessment & Courses",
      description: "Begin with a comprehensive mental health assessment using our guided survey with emotional, behavioral, and cognitive inputs.",
      details: "Our AI analyzes your responses and recommends a personalized self-help course tailored to your needs.",
      features: ["Journaling exercises", "Mindfulness techniques", "CBT-based activities", "Progress tracking"],
      link: "/assessment"
    },
    {
      icon: MessageSquare, 
      title: "AI Therapy Sessions",
      description: "Private, guided conversations with our AI therapist to help process emotions and find clarity.",
      details: "Engage in natural, therapeutic conversations with an AI that listens, speaks, and responds with empathy.",
      features: ["Speech analysis technology", "Emotion recognition", "Stress pattern detection", "Guided coping strategies"],
      link: "/talk"
    },
    {
      icon: Users,
      title: "Human Expert Connection",
      description: "When you need additional support, connect with licensed mental health professionals.",
      details: "Seamless transition to human therapists when AI therapy isn't enough or for crisis situations.",
      features: ["Licensed therapists", "Crisis support", "Video sessions", "Specialized care"],
      link: "/contact"
    }
  ];

  return (
    <section id="approach" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Our Three-Step <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Approach</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We've designed a comprehensive system to support your mental health journey at every 
            stage, from self-help to professional intervention when needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Link 
              key={index}
              to={step.link}
              className="block animate-fade-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-700 h-full hover:border-purple-600">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-purple-400 font-medium">Step {index + 1}</div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{step.description}</p>
                <p className="text-gray-400 mb-6 text-sm">{step.details}</p>
                
                <div className="grid grid-cols-1 gap-2">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
