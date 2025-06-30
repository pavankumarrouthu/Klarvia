
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const questions = [
    {
      id: 1,
      question: "How would you describe your overall mood in the past two weeks?",
      options: [
        "Excellent - I've been feeling great",
        "Good - Generally positive with some ups and downs", 
        "Neither particularly good nor bad",
        "Low - I've been feeling down more often than not",
        "Very Low - I've been feeling consistently down"
      ]
    }
  ];

  const steps = [
    { number: 1, title: "Assessment", active: currentStep === 1 },
    { number: 2, title: "AI Analysis", active: currentStep === 2 },
    { number: 3, title: "Results", active: currentStep === 3 }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-16 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <img 
                src="/lovable-uploads/fbaeef8a-089a-43b4-bbd1-ec4c39ebde39.png" 
                alt="Klarvia Logo" 
                className="w-12 h-12 rounded-full"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Mental Health Assessment</h1>
            <p className="text-xl text-gray-300">
              Your answers will help us tailor a personalized plan to support your mental wellbeing.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${
                    step.active 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    {step.number}
                  </div>
                  <div className="ml-3">
                    <div className="text-sm text-gray-400">{step.title}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-24 h-1 mx-4 ${
                      currentStep > step.number ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gray-700'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-right mb-6">
            <span className="text-gray-400">Question {currentQuestion} of 6</span>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="w-full bg-gray-700 rounded-full h-2 mb-8">
              <div 
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentQuestion / 6) * 100}%` }}
              ></div>
            </div>

            <h2 className="text-2xl font-semibold text-white mb-8">
              {questions[0].question}
            </h2>

            <div className="space-y-4">
              {questions[0].options.map((option, index) => (
                <label key={index} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                    className="w-5 h-5 text-purple-500 bg-gray-700 border-gray-600 focus:ring-purple-500"
                  />
                  <span className="text-gray-300">{option}</span>
                </label>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                Previous
              </Button>
              <Button 
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                disabled={!selectedAnswer}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Assessment;
