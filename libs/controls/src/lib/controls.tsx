import React, { useState } from 'react';

interface ControlPanelProps {
  onStart: () => void;
  onStop: () => void;
  onPause: () => void;
  isPlaying: boolean;
}

export function ControlPanel({ onStart, onStop, onPause, isPlaying }: ControlPanelProps) {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
    onStart();
  };

  const handleStop = () => {
    setIsStarted(false);
    onStop();
  };

  const handlePause = () => {
    onPause();
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={handleStart}
        className={`bg-green-500 text-white px-4 py-2 rounded ${isPlaying || isStarted ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isPlaying || isStarted}
        aria-label="Start"
      >
        Start
      </button>
      <button
        onClick={handleStop}
        className="bg-red-500 text-white px-4 py-2 rounded"
        aria-label="Stop"
      >
        Stop
      </button>
      <button
        onClick={handlePause}
        className={`bg-yellow-500 text-white px-4 py-2 rounded ${!isPlaying ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!isPlaying}
        aria-label="Pause"
      >
        Pause
      </button>
    </div>
  );
}

export default ControlPanel;
