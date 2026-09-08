import React, { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { LotusDivider, Diya } from './BackgroundElements';
import { devotionalAudio } from '../utils/audio';
import confetti from 'canvas-confetti';

export default function RSVPSection({ onConfirmRSVP }) {
  const [guestName, setGuestName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRSVP = () => {
    if (isSubmitted) return;
    setIsSubmitted(true);

    // Audio & Confetti burst
    devotionalAudio.playTempleBell(528);
    setTimeout(() => {
      devotionalAudio.playSacredChime();
    }, 300);

    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FF9933', '#FFD700', '#E8CA82', '#E84A5F', '#FFFDF9'],
    });

    setTimeout(() => {
      if (onConfirmRSVP) onConfirmRSVP(guestName);
    }, 1600);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between py-10 px-4 z-20 overflow-y-auto bg-mandala-pattern">
      {/* Top Header */}
      <div className="w-full max-w-xl text-center space-y-2">
        <div className="inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-[#FAF4EB] border border-[#C5A059]/60 shadow-sm">
          <span className="text-xs text-[#936E2B]">✦</span>
          <h2 className="font-devanagari text-lg md:text-xl text-[#791724] font-bold">
            स्नेहमयी उपस्थिति
          </h2>
          <span className="text-xs text-[#936E2B]">✦</span>
        </div>
      </div>

      {/* Main RSVP Card */}
      <div className="w-full max-w-md my-auto p-6 md:p-8 rounded-3xl bg-[#FFFDF9]/95 backdrop-blur-md border-2 border-[#C5A059]/70 shadow-[0_20px_50px_rgba(121,23,36,0.15)] text-center relative overflow-hidden">
        {/* Decorative Corner Filigree */}
        <div className="absolute top-3 left-3 text-[#C5A059] text-xs">ॐ</div>
        <div className="absolute top-3 right-3 text-[#C5A059] text-xs">卐</div>
        <div className="absolute bottom-3 left-3 text-[#C5A059] text-xs">卐</div>
        <div className="absolute bottom-3 right-3 text-[#C5A059] text-xs">ॐ</div>

        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-tr from-[#C5A059] to-[#FAF4EB] p-0.5 shadow-gold-glow flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-[#FAF4EB] flex items-center justify-center text-2xl">
            🪷
          </div>
        </div>

        <h3 className="font-devanagari text-xl md:text-2xl text-[#791724] font-bold mb-3 leading-snug">
          क्या आप हमारे इस शुभ अवसर पर पधारेंगे?
        </h3>

        <p className="font-devanagari text-xs md:text-sm text-[#5E4A40] leading-relaxed mb-6">
          आपकी उपस्थिति हमारे पूजन एवं प्रसाद भोज को कृतार्थ करेगी।<br />
          कृपया अपनी स्वीकृति प्रदान करें।
        </p>

        {/* Optional Guest Name Input for Personalized Blessing */}
        <div className="mb-6 text-left">
          <label className="block font-devanagari text-xs text-[#936E2B] font-medium mb-1.5 ml-1">
            आपका शुभ नाम (वैकल्पिक):
          </label>
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="उदा. शर्मा परिवार / राजेश जी"
            className="w-full px-4 py-2.5 rounded-xl bg-[#FAF4EB] border border-[#C5A059]/50 text-[#2B211D] font-devanagari text-sm placeholder-[#936E2B]/50 focus:outline-none focus:ring-2 focus:ring-[#791724]/40 transition-all text-center"
          />
        </div>

        {/* Primary Devotional Acceptance Button */}
        <button
          onClick={handleRSVP}
          disabled={isSubmitted}
          className={`w-full py-4 px-6 rounded-full font-devanagari font-bold text-base md:text-lg tracking-wide transition-all duration-500 shadow-card-lux ${
            isSubmitted
              ? 'bg-gradient-to-r from-[#244617] to-[#3D6B2C] text-[#FFFDF9] scale-95 shadow-none'
              : 'bg-gradient-to-r from-[#791724] via-[#A32832] to-[#791724] text-[#FFFDF9] border border-[#E8CA82] hover:shadow-gold-glow hover:scale-[1.02] active:scale-95'
          }`}
        >
          {isSubmitted ? (
            <span className="flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 text-[#FFD700] fill-current animate-pulse" />
              <span>हार्दिक धन्यवाद! माँ की कृपा बनी रहे</span>
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <span>🌸</span>
              <span>हाँ, अवश्य पधारूँगा/पधारूँगी</span>
              <span>🌸</span>
            </span>
          )}
        </button>

        <p className="font-devanagari text-[11px] text-[#936E2B] mt-4 opacity-80">
          सादर निमंत्रक: विनोद एवं कल्पना टिकले
        </p>
      </div>

      {/* Diyas */}
      <div className="w-full max-w-sm flex justify-between px-8 py-2">
        <Diya />
        <Diya />
      </div>
    </div>
  );
}
