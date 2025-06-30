
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface JournalEntry {
  id: number;
  content: string;
  subject: string;
  date: string;
}

const Journal = () => {
  const [currentEntry, setCurrentEntry] = useState('');
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  const extractSubject = (content: string) => {
    const words = content.trim().split(' ');
    return words.slice(0, 5).join(' ') + (words.length > 5 ? '...' : '');
  };

  const addEntry = () => {
    if (!currentEntry.trim()) return;

    const newEntry: JournalEntry = {
      id: Date.now(),
      content: currentEntry,
      subject: extractSubject(currentEntry),
      date: new Date().toLocaleDateString()
    };

    setEntries([newEntry, ...entries]);
    setCurrentEntry('');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-16 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Journaling</h1>
            <p className="text-xl text-gray-300">
              Express your thoughts and feelings freely. Your journal entries are private and saved locally on your device.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-white">Today's Entry</h2>
              <Button 
                onClick={addEntry}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              >
                Add Entry
              </Button>
            </div>
            
            <Textarea
              value={currentEntry}
              onChange={(e) => setCurrentEntry(e.target.value)}
              placeholder="Write your thoughts here..."
              className="min-h-[200px] bg-gray-700 border-gray-600 text-white placeholder-gray-400 resize-none"
            />
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-6">Previous Entries</h2>
            
            {entries.length === 0 ? (
              <p className="text-gray-400 italic">No journal entries yet. Start writing to see your entries here.</p>
            ) : (
              <div className="space-y-4">
                {entries.map((entry) => (
                  <div key={entry.id} className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-purple-400">{entry.subject}</h3>
                      <span className="text-sm text-gray-400">{entry.date}</span>
                    </div>
                    <p className="text-gray-300">{entry.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Journal;
