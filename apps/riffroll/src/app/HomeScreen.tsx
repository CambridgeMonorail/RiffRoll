import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const [tempo, setTempo] = useState(120);
  const [chordProgression, setChordProgression] = useState('C G Am F');
  const navigate = useNavigate();

  const handleStartPractice = () => {
    navigate('/practice');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to RiffRoll</h1>
          <p className="text-xl mb-8">Configure your practice session</p>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Tempo (BPM)</label>
            <input
              type="number"
              value={tempo}
              onChange={(e) => setTempo(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-8">
            <label className="block text-lg font-semibold mb-2">Chord Progression</label>
            <input
              type="text"
              value={chordProgression}
              onChange={(e) => setChordProgression(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            onClick={handleStartPractice}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold"
          >
            Start Practice
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
