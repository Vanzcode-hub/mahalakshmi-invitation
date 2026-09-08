import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { bgMusic } from '../utils/audioManager';

export default function AudioController({ isAudioActive, onToggle }) {
  const [isPlaying, setIsPlaying] = useState(isAudioActive);

  useEffect(() => {
    setIsPlaying(isAudioActive);
  }, [isAudioActive]);

  const handleToggle = () => {
    const newState = bgMusic.toggle();
    setIsPlaying(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <div className="fixed top-3 right-3 z-50">
      <button
        onClick={handleToggle}
        title={isPlaying ? 'संगीत रोकें' : 'संगीत चलाएँ'}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A0D05]/85 backdrop-blur-md border border-[#E5B25D]/60 shadow-[0_4px_20px_rgba(0,0,0,0.6)] text-[#FFE082] hover:bg-[#2A150A] transition-all duration-300 transform active:scale-95 group"
      >
        <span className="relative flex h-2.5 w-2.5">
          {isPlaying && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5B25D] opacity-75"></span>
          )}
          <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isPlaying ? 'bg-[#FFE082]' : 'bg-[#E5B25D]/40'}`}></span>
        </span>

        {isPlaying ? (
          <Volume2 className="w-3.5 h-3.5 text-[#FFE082] animate-pulse" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-[#C8963E]" />
        )}

        <span className="text-[11px] font-medium font-devanagari text-[#F8E2B0] group-hover:text-[#FFE082]">
          {isPlaying ? 'भक्ति संगीत' : 'संगीत'}
        </span>

        {/* Animated Sound Wave Bars */}
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-2.5 ml-0.5">
            <span className="w-0.5 bg-[#FFE082] h-2 animate-[bounce_1.2s_infinite_100ms]" />
            <span className="w-0.5 bg-[#E5B25D] h-2.5 animate-[bounce_1.2s_infinite_300ms]" />
            <span className="w-0.5 bg-[#FFE082] h-1.5 animate-[bounce_1.2s_infinite_200ms]" />
          </div>
        )}
      </button>
    </div>
  );
}
