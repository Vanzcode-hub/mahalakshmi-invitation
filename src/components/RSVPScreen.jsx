import React, { useState } from 'react';
import { Heart, ChevronLeft, Sparkles } from 'lucide-react';
import { Diya } from './BackgroundElements';
import confetti from 'canvas-confetti';

export default function RSVPScreen({ onConfirm, onPrev }) {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleRSVPClick = () => {
    if (isAccepted) return;
    setIsAccepted(true);

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFE082', '#E5B25D', '#A67C2E', '#FFFDF8'],
    });

    // Automatically advance to Blessing screen after short celebration
    setTimeout(() => {
      if (onConfirm) onConfirm();
    }, 1200);
  };

  return (
    <div className="w-full min-h-[100dvh] py-6 px-3.5 flex flex-col items-center justify-between z-20 max-w-lg mx-auto select-none">
      {/* Top Header */}
      <div className="w-full text-center space-y-1">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-[#381B0E]/70 border border-[#E5B25D]/50 shadow-sm">
          <span className="text-[#FFE082] text-xs">✦</span>
          <h2 className="font-devanagari text-lg md:text-xl font-bold gold-text-radiant">
            स्नेहमयी उपस्थिति
          </h2>
          <span className="text-[#FFE082] text-xs">✦</span>
        </div>
      </div>

      {/* Main RSVP Card */}
      <div className="w-full my-auto royal-glass-card rounded-3xl p-6 md:p-8 text-center space-y-5 border border-[#E5B25D]/50 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
        <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-tr from-[#E5B25D] to-[#381B0E] p-0.5 shadow-[0_0_25px_rgba(229,178,93,0.4)] flex items-center justify-center">
          <span className="text-2xl">🪷</span>
        </div>

        <div className="space-y-2 font-devanagari">
          <h3 className="text-xl md:text-2xl font-bold text-[#FFFDF8] leading-snug">
            क्या आप हमारे इस शुभ अवसर पर पधारेंगे?
          </h3>
          <p className="text-xs md:text-sm text-[#F8E2B0] leading-relaxed">
            आपकी उपस्थिति हमारे पूजन एवं प्रसाद भोज को कृतार्थ करेगी।<br />
            कृपया अपनी स्वीकृति प्रदान करें।
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={handleRSVPClick}
            disabled={isAccepted}
            className={`w-full py-4 px-6 rounded-full font-devanagari font-bold text-base md:text-lg tracking-wide transition-all duration-500 shadow-lg ${
              isAccepted
                ? 'bg-gradient-to-r from-[#1B4D20] to-[#2E6B34] text-[#FFFDF8] border border-[#66BB6A] scale-95'
                : 'bg-gradient-to-r from-[#701620] via-[#94202C] to-[#701620] text-[#FFFDF8] border-2 border-[#E5B25D] hover:shadow-[0_0_25px_rgba(229,178,93,0.6)] hover:scale-[1.02] active:scale-95'
            }`}
          >
            {isAccepted ? (
              <span className="flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-[#FFE082] fill-current animate-pulse" />
                <span>✨ हार्दिक धन्यवाद! पधारने की प्रतीक्षा रहेगी ✨</span>
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <span>🌸</span>
                <span>हाँ, अवश्य पधारूँगा/पधारूँगी</span>
                <span>🌸</span>
              </span>
            )}
          </button>
        </div>

        <p className="font-devanagari text-xs text-[#E5B25D] opacity-90 pt-1">
          सादर निमंत्रक: विनोद एवं कल्पना टिकले
        </p>
      </div>

      {/* Bottom Back Button & Diyas */}
      <div className="w-full max-w-xs flex items-center justify-between z-20 pb-3 pt-2">
        <button
          onClick={onPrev}
          className="py-2 px-4 rounded-full text-xs font-devanagari font-medium text-[#E5B25D] bg-[#2B150A]/80 hover:bg-[#381B0E] border border-[#E5B25D]/40 transition-all flex items-center gap-1"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>पीछे</span>
        </button>

        <div className="flex items-center gap-6">
          <Diya />
          <Diya />
        </div>
      </div>
    </div>
  );
}
