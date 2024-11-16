import React from 'react';

interface ControlPanelProps {
  onStart: () => void;
  onStop: () => void;
  onPause: () => void;
  isPlaying: boolean;
}

export function ControlPanel({ onStart, onStop, onPause, isPlaying }: ControlPanelProps) {
  return (
    <div className="flex space-x-4">
      <button
        onClick={onStart}
        className={`bg-green-500 text-white px-4 py-2 rounded ${isPlaying ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isPlaying}
        aria-label="Start"
      >
        Start
      </button>
      <button
        onClick={onStop}
        className="bg-red-500 text-white px-4 py-2 rounded"
        aria-label="Stop"
      >
        Stop
      </button>
      <button
        onClick={onPause}
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
