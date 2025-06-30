
import { Brain, MessageSquare, Users } from 'lucide-react';

const ApproachSection = () => {
  const steps = [
    {
      icon: Brain,
      title: "Self-Assessment & Courses",
      description: "Begin with a comprehensive mental health assessment using our guided survey with emotional, behavioral, and cognitive inputs.",
      details: "Our AI analyzes your responses and recommends a personalized self-help course tailored to your needs.",
      features: ["Journaling exercises", "Mindfulness techniques", "CBT-based activities", "Progress tracking"]
    },
    {
      icon: MessageSquare, 
      title: "AI Therapy Sessions",
      description: "Private, guided conversations with our AI therapist to help process emotions and find clarity.",
      details: "Engage in natural, therapeutic conversations with an AI that listens, speaks, and responds with empathy.",
      features: ["Speech analysis technology", "Emotion recognition", "Stress pattern detection", "Guided coping strategies"]
    },
    {
      icon: Users,
      title: "Human Expert Connection",
      description: "When you need additional support, connect with licensed mental health professionals.",
      details: "Seamless transition to human therapists when AI therapy isn't enough or for crisis situations.",
      features: ["Licensed therapists", "Crisis support", "Video sessions", "Specialized care"]
    }
  ];

  return (
    <section id="approach" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Three-Step <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Approach</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've designed a comprehensive system to support your mental health journey at every 
            stage, from self-help to professional intervention when needed.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-1">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-purple-600 font-medium">Step {index + 1}</div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-lg">{step.description}</p>
                  <p className="text-gray-500 mb-6">{step.details}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="w-full h-80 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-lg font-semibold text-gray-700">
                      {step.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
