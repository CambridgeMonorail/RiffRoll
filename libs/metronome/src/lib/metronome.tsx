import React, { useState, useEffect } from 'react';
import { Slider } from '@material-ui/core';
import { Howl } from 'howler';

const MetronomeControls = () => {
  const [tempo, setTempo] = useState(120);
  const [volume, setVolume] = useState(0.5);
  const [isPlaying, setIsPlaying] = useState(false);
  const [beat, setBeat] = useState(0);

  const metronomeSound = new Howl({
    src: ['metronome-click.mp3'],
    volume: volume,
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        metronomeSound.play();
        setBeat((prevBeat) => (prevBeat + 1) % 4);
      }, (60 / tempo) * 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isPlaying, tempo, volume]);

  const handleTempoChange = (event: any, newValue: number | number[]) => {
    setTempo(newValue as number);
  };

  const handleVolumeChange = (event: any, newValue: number | number[]) => {
    setVolume(newValue as number);
    metronomeSound.volume(newValue as number);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="metronome-controls">
      <div className="tempo-slider">
        <label>Tempo: {tempo} BPM</label>
        <Slider
          value={tempo}
          onChange={handleTempoChange}
          aria-labelledby="tempo-slider"
          min={40}
          max={200}
        />
      </div>
      <div className="volume-slider">
        <label>Volume</label>
        <Slider
          value={volume}
          onChange={handleVolumeChange}
          aria-labelledby="volume-slider"
          min={0}
          max={1}
          step={0.01}
        />
      </div>
      <button onClick={togglePlay}>
        {isPlaying ? 'Stop' : 'Start'}
      </button>
      <div className="visual-metronome">
        <div className={`beat-indicator ${beat === 0 ? 'active' : ''}`}></div>
        <div className={`beat-indicator ${beat === 1 ? 'active' : ''}`}></div>
        <div className={`beat-indicator ${beat === 2 ? 'active' : ''}`}></div>
        <div className={`beat-indicator ${beat === 3 ? 'active' : ''}`}></div>
      </div>
    </div>
  );
};

export default MetronomeControls;
