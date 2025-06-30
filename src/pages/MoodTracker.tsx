
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [moodNote, setMoodNote] = useState('');

  const moods = [
    { emoji: '😊', label: 'Great', value: 5 },
    { emoji: '🙂', label: 'Good', value: 4 },
    { emoji: '😐', label: 'Okay', value: 3 },
    { emoji: '😔', label: 'Low', value: 2 },
    { emoji: '😢', label: 'Awful', value: 1 }
  ];

  const moodData = [
    { day: 'Wed', mood: 4, energy: 3 },
    { day: 'Thu', mood: 3, energy: 4 },
    { day: 'Fri', mood: 2, energy: 2 },
    { day: 'Sat', mood: 4, energy: 3 },
    { day: 'Sun', mood: 5, energy: 4 },
    { day: 'Mon', mood: 3, energy: 2 }
  ];

  const anxietyData = [
    { day: 'Tue', level: 3 },
    { day: 'Wed', level: 2 },
    { day: 'Thu', level: 4 },
    { day: 'Fri', level: 2 },
    { day: 'Sat', level: 1 },
    { day: 'Sun', level: 3 },
    { day: 'Mon', level: 2 }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-16 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Mood Tracker</h1>
            <p className="text-xl text-gray-300">
              Track your emotional wellbeing over time to recognize patterns and gain insights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">❤️</span>
                <h2 className="text-2xl font-semibold text-white">How are you feeling today?</h2>
              </div>
              
              <div className="flex justify-between mb-6">
                {moods.map((mood) => (
                  <button
                    key={mood.label}
                    onClick={() => setSelectedMood(mood.label)}
                    className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
                      selectedMood === mood.label 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <span className="text-2xl mb-1">{mood.emoji}</span>
                    <span className="text-sm">{mood.label}</span>
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Add a note (optional)</label>
                <Textarea
                  value={moodNote}
                  onChange={(e) => setMoodNote(e.target.value)}
                  placeholder="What's contributing to your mood today?"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                Log Mood
              </Button>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-6">Mood Over Time</h2>
              <div className="h-64 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={moodData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="day" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Line type="monotone" dataKey="mood" stroke="#8B5CF6" strokeWidth={2} dot={{ fill: '#8B5CF6' }} />
                    <Line type="monotone" dataKey="energy" stroke="#3B82F6" strokeWidth={2} dot={{ fill: '#3B82F6' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center space-x-6 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-gray-300">Mood</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-300">Energy</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-6">Mood vs. Energy</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={moodData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="day" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Line type="monotone" dataKey="mood" stroke="#8B5CF6" strokeWidth={2} />
                    <Line type="monotone" dataKey="energy" stroke="#3B82F6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-6">Anxiety Levels</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={anxietyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="day" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Bar dataKey="level" fill="#EF4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MoodTracker;
