import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface FretboardDisplayProps {
  chordProgression: string;
  tempo: number;
}

const FretboardDisplay: React.FC<FretboardDisplayProps> = ({ chordProgression, tempo }) => {
  const fretboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fretboardRef.current) {
      const duration = 60 / tempo; // Calculate duration based on tempo
      gsap.to(fretboardRef.current, {
        x: '-100%',
        duration: duration * chordProgression.split(' ').length,
        ease: 'linear',
        repeat: -1,
      });
    }
  }, [chordProgression, tempo]);

  return (
    <div ref={fretboardRef} className="fretboard">
      {chordProgression.split(' ').map((chord, index) => (
        <div key={index} className="chord">
          {chord}
        </div>
      ))}
    </div>
  );
};

export default FretboardDisplay;
