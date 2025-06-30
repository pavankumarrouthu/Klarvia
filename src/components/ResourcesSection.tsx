
import { BookOpen, Video, FileText, Users } from 'lucide-react';

const ResourcesSection = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "Free Mental Health Guides",
      description: "Explore our professionally crafted resources to support your mental wellbeing journey.",
      items: [
        { name: "Your Mind, Explained", desc: "A comprehensive guide to understanding your thoughts and emotions." },
        { name: "Dealing with Exam Anxiety", desc: "Practical strategies to manage stress before and during exams." },
        { name: "Journaling for Mental Clarity", desc: "How to use journaling as a tool for self-reflection and growth." }
      ]
    },
    {
      icon: Video,
      title: "Educational Resources",
      description: "Expert-backed guides and resources to help you understand and improve your mental health.",
      items: [
        { name: "Understanding Anxiety", desc: "Learn about anxiety symptoms, causes, and management techniques." },
        { name: "Building Resilience", desc: "Develop skills to bounce back from life's challenges." },
        { name: "Mindfulness Practices", desc: "Daily practices to improve focus and emotional regulation." }
      ]
    },
    {
      icon: FileText,
      title: "Self-Help Tools",
      description: "Interactive tools and worksheets to support your mental wellness journey.",
      items: [
        { name: "Mood Tracker", desc: "Daily mood tracking to identify patterns and triggers." },
        { name: "Gratitude Journal", desc: "Structured gratitude practice for improved wellbeing." },
        { name: "Breathing Exercises", desc: "Guided breathing techniques for stress relief." }
      ]
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with others on similar journeys and find peer support.",
      items: [
        { name: "Support Groups", desc: "Moderated online groups for various mental health topics." },
        { name: "Peer Stories", desc: "Real stories from people who've overcome mental health challenges." },
        { name: "Q&A Forums", desc: "Ask questions and get answers from mental health professionals." }
      ]
    }
  ];

  return (
    <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Mental Health <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive library of mental health resources, tools, and educational content 
            designed to support your wellbeing journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <resource.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{resource.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{resource.description}</p>
              
              <div className="space-y-4">
                {resource.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-l-3 border-purple-200 pl-4">
                    <h4 className="font-medium text-gray-900 mb-1">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <button className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:shadow-md transition-all duration-300">
                Explore Resources
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
