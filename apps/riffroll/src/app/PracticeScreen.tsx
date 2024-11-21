import React from 'react';
import FretboardDisplay from 'libs/fretboard/src/lib/fretboard';
import ControlPanel from 'libs/controls/src/lib/controls';
import MetronomeControls from 'libs/metronome/src/lib/metronome';

const PracticeScreen = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Practice Session</h1>
          <div className="mb-8">
            <FretboardDisplay />
          </div>
          <div className="mb-8">
            <ControlPanel />
          </div>
          <div className="mb-8">
            <MetronomeControls />
          </div>
          <div className="mb-8">
            <SettingsPanel />
          </div>
          <div className="mb-8">
            <VisualIndicators />
          </div>
        </div>
      </section>
    </div>
  );
};

const SettingsPanel = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Sound</label>
        <input type="range" className="w-full" />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Tempo</label>
        <input type="number" className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Visuals</label>
        <input type="checkbox" className="mr-2" />
        <span>Enable Visual Indicators</span>
      </div>
    </div>
  );
};

const VisualIndicators = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Upcoming Chords and Notes</h2>
      <div className="flex justify-center space-x-4">
        <div className="bg-gray-200 p-2 rounded">C</div>
        <div className="bg-gray-200 p-2 rounded">G</div>
        <div className="bg-gray-200 p-2 rounded">Am</div>
        <div className="bg-gray-200 p-2 rounded">F</div>
      </div>
    </div>
  );
};

export default PracticeScreen;
