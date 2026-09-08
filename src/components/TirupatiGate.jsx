import React, { useState } from 'react';
import { Diya } from './BackgroundElements';
import { bgMusic } from '../utils/audioManager';
import confetti from 'canvas-confetti';

export default function TirupatiGate({ onOpenGate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);

    // Start background music
    bgMusic.play();

    // Subtle gold spark burst
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#FFE082', '#F5C862', '#D49B28', '#FFFDF9'],
    });

    setIsOpen(true);

    // Transition smoothly to Darshan screen
    setTimeout(() => {
      if (onOpenGate) onOpenGate();
    }, 2200);
  };

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-between py-5 px-3 z-20 overflow-hidden select-none max-w-xl mx-auto">
      {/* Top Sacred Shloka & Tirupati Temple Crest */}
      <div className="w-full flex flex-col items-center text-center pt-2">
        {/* Sacred Tirupati Gopuram Kalasams */}
        <div className="flex items-end justify-center gap-3 mb-1">
          <div className="w-3.5 h-6 bg-gradient-to-t from-[#B8860B] via-[#F5C862] to-[#FFF2A8] rounded-[50%_50%_0_0] shadow-md border-t border-[#FFF2A8]" />
          <div className="w-4.5 h-8 bg-gradient-to-t from-[#B8860B] via-[#F5C862] to-[#FFF2A8] rounded-[50%_50%_0_0] shadow-lg border-t-2 border-[#FFF2A8]" />
          <div className="w-3.5 h-6 bg-gradient-to-t from-[#B8860B] via-[#F5C862] to-[#FFF2A8] rounded-[50%_50%_0_0] shadow-md border-t border-[#FFF2A8]" />
        </div>

        {/* Sacred Texts */}
        <div className="space-y-1">
          <h1 className="font-devanagari text-2xl md:text-4xl font-bold tracking-wider gold-text-radiant drop-shadow-lg">
            ॥ श्री महालक्ष्म्यै नमः ॥
          </h1>
          <p className="font-devanagari text-base md:text-xl text-[#FFF4B8] font-medium drop-shadow-md">
            माता महालक्ष्मी व गौरीच्या आगमन प्रसंगी
          </p>
          <p className="font-traditional text-lg md:text-2xl text-[#F5C862] tracking-wide drop-shadow">
            सस्नेह निमंत्रण
          </p>
        </div>
      </div>

      {/* Main Tirupati Bangaru Vakili (Golden Gate) */}
      <div className="relative my-auto w-full max-w-[360px] md:max-w-[420px] aspect-[4/5] flex items-center justify-center p-2">
        {/* Outer Dravidian Temple Arch with Carved Golden Pillars */}
        <div className="absolute inset-0 rounded-t-3xl rounded-b-2xl border-[4px] border-[#F5C862] bg-[#140802] shadow-[0_0_50px_rgba(245,200,98,0.5)] flex flex-col overflow-hidden">
          
          {/* Top Temple Gopuram Relief Beam (Makara Thoranam with Shankha-Chakra-Namam) */}
          <div className="w-full h-14 bg-gradient-to-b from-[#3D1A0A] via-[#502410] to-[#2A1005] border-b-2 border-[#F5C862] flex items-center justify-between px-3 shadow-md">
            {/* Left Shankha */}
            <div className="text-[#FFE082] text-xs font-bold flex items-center gap-1">
              <span>🐚</span>
              <span className="hidden sm:inline text-[10px] text-[#F5C862]">शंख</span>
            </div>

            {/* Center Sacred Emblem */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#140802]/90 border border-[#F5C862]/60 shadow-inner">
              <span className="font-devanagari text-xs md:text-sm font-bold text-[#FFF2A8] tracking-widest">
                卐 श्री महालक्ष्मी 卐
              </span>
            </div>

            {/* Right Chakra */}
            <div className="text-[#FFE082] text-xs font-bold flex items-center gap-1">
              <span className="hidden sm:inline text-[10px] text-[#F5C862]">चक्र</span>
              <span>𑁍</span>
            </div>
          </div>

          {/* Door Frame Inner Chamber */}
          <div className="relative flex-1 w-full flex overflow-hidden bg-gradient-to-b from-[#2E1408] via-[#140802] to-[#0A0401]">
            
            {/* Sanctum Reveal (Behind the open doors) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,224,130,0.5)_0%,_transparent_75%)] animate-pulse" />
              <div className="relative z-10 text-center">
                <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full p-1 bg-gradient-to-tr from-[#F5C862] via-[#FFF2A8] to-[#B8860B] shadow-[0_0_35px_rgba(245,200,98,0.7)] overflow-hidden">
                  <img
                    src="/assets/images/mahalakshmi-1.jpg"
                    alt="श्री महालक्ष्मी दर्शन"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <p className="font-devanagari text-xs md:text-sm text-[#FFF2A8] mt-2.5 font-bold drop-shadow">
                  ॥ ॐ श्रीं ह्रीं क्लीं महालक्ष्म्यै नमः ॥
                </p>
              </div>
            </div>

            {/* 3D Tirupati Bangaru Vakili Golden Gilded Doors */}
            <div className="absolute inset-0 perspective-gate flex">
              
              {/* Left Door - Gold Plated Kavacham Panels */}
              <div
                className={`w-1/2 h-full bg-gradient-to-r from-[#240D04] via-[#4A1D08] to-[#5C260D] border-r-2 border-[#F5C862] shadow-2xl p-2 flex flex-col justify-between door-left ${
                  isOpen ? 'door-open-left' : ''
                }`}
              >
                {/* 3 Grid Gold Plates (Tirupati Temple style) */}
                <div className="w-full h-[30%] rounded-lg border-2 border-[#F5C862] bg-gradient-to-tr from-[#3D1A0A] to-[#692C0E] p-1 shadow-inner flex flex-col items-center justify-center">
                  <div className="w-full h-full rounded border border-[#FFF2A8]/40 flex items-center justify-center">
                    <span className="text-[#FFF2A8] text-base md:text-lg">🐚</span>
                  </div>
                </div>

                <div className="w-full h-[36%] my-1.5 rounded-lg border-2 border-[#F5C862] bg-gradient-to-tr from-[#4A1E0B] via-[#753210] to-[#3D1A0A] p-1 shadow-inner flex flex-col items-center justify-center relative">
                  <div className="w-full h-full rounded border border-[#FFF2A8]/50 flex flex-col items-center justify-center">
                    <div className="w-9 h-9 md:w-11 md:h-11 rounded-full border-2 border-[#FFF2A8] bg-[#140802]/80 flex items-center justify-center text-[#FFF2A8] font-devanagari text-base font-bold shadow-[0_0_10px_rgba(245,200,98,0.5)]">
                      श्री
                    </div>
                    {/* Brass Lion Ring Handle */}
                    <div className="mt-2 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-[#FFF2A8] bg-gradient-to-b from-[#F5C862] to-[#805518] shadow-md flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFF2A8]" />
                    </div>
                  </div>
                </div>

                <div className="w-full h-[30%] rounded-lg border-2 border-[#F5C862] bg-gradient-to-tr from-[#3D1A0A] to-[#692C0E] p-1 shadow-inner flex flex-col items-center justify-center">
                  <div className="w-full h-full rounded border border-[#FFF2A8]/40 flex items-center justify-center">
                    <span className="text-[#FFF2A8] text-base md:text-lg">🪷</span>
                  </div>
                </div>
              </div>

              {/* Right Door - Gold Plated Kavacham Panels */}
              <div
                className={`w-1/2 h-full bg-gradient-to-l from-[#240D04] via-[#4A1D08] to-[#5C260D] border-l-2 border-[#F5C862] shadow-2xl p-2 flex flex-col justify-between door-right ${
                  isOpen ? 'door-open-right' : ''
                }`}
              >
                {/* 3 Grid Gold Plates (Tirupati Temple style) */}
                <div className="w-full h-[30%] rounded-lg border-2 border-[#F5C862] bg-gradient-to-tl from-[#3D1A0A] to-[#692C0E] p-1 shadow-inner flex flex-col items-center justify-center">
                  <div className="w-full h-full rounded border border-[#FFF2A8]/40 flex items-center justify-center">
                    <span className="text-[#FFF2A8] text-base md:text-lg">𑁍</span>
                  </div>
                </div>

                <div className="w-full h-[36%] my-1.5 rounded-lg border-2 border-[#F5C862] bg-gradient-to-tl from-[#4A1E0B] via-[#753210] to-[#3D1A0A] p-1 shadow-inner flex flex-col items-center justify-center relative">
                  <div className="w-full h-full rounded border border-[#FFF2A8]/50 flex flex-col items-center justify-center">
                    <div className="w-9 h-9 md:w-11 md:h-11 rounded-full border-2 border-[#FFF2A8] bg-[#140802]/80 flex items-center justify-center text-[#FFF2A8] font-devanagari text-base font-bold shadow-[0_0_10px_rgba(245,200,98,0.5)]">
                      ॐ
                    </div>
                    {/* Brass Lion Ring Handle */}
                    <div className="mt-2 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-[#FFF2A8] bg-gradient-to-b from-[#F5C862] to-[#805518] shadow-md flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFF2A8]" />
                    </div>
                  </div>
                </div>

                <div className="w-full h-[30%] rounded-lg border-2 border-[#F5C862] bg-gradient-to-tl from-[#3D1A0A] to-[#692C0E] p-1 shadow-inner flex flex-col items-center justify-center">
                  <div className="w-full h-full rounded border border-[#FFF2A8]/40 flex items-center justify-center">
                    <span className="text-[#FFF2A8] text-base md:text-lg">🪷</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Diyas at threshold */}
        <div className="absolute -bottom-3 left-4 z-30">
          <Diya />
        </div>
        <div className="absolute -bottom-3 right-4 z-30">
          <Diya />
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="w-full max-w-sm flex flex-col items-center z-20 pb-4 pt-2">
        <button
          onClick={handleOpenClick}
          disabled={isOpen || isOpening}
          className={`w-full py-3.5 px-8 rounded-full text-lg md:text-xl font-devanagari font-bold tracking-wide transition-all duration-500 shadow-[0_12px_30px_rgba(0,0,0,0.8)] ${
            isOpen
              ? 'opacity-0 scale-95 pointer-events-none'
              : 'bg-gradient-to-r from-[#80131E] via-[#A81C2A] to-[#80131E] text-[#FFFDF8] border-2 border-[#F5C862] hover:shadow-[0_0_30px_rgba(245,200,98,0.7)] hover:scale-[1.02] active:scale-95'
          }`}
        >
          {isOpening ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin text-base">✨</span>
              द्वार उघडत आहेत...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <span>🌸</span>
              <span>द्वार उघडा</span>
              <span>🌸</span>
            </span>
          )}
        </button>

        <p className="font-devanagari text-xs md:text-sm text-[#F5C862] mt-2 font-medium drop-shadow-md">
          पावन दर्शन व निमंत्रणासाठी स्पर्श करा
        </p>
      </div>
    </div>
  );
}
