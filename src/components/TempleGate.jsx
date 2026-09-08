import React, { useState } from 'react';
import { Diya, ToranHeader } from './BackgroundElements';
import { bgMusic } from '../utils/audioManager';
import confetti from 'canvas-confetti';

export default function TempleGate({ onOpenGate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);

    // Start background music
    bgMusic.play();

    // Golden sparkle burst
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFE082', '#F5C862', '#D49B28', '#FFFDF9'],
    });

    setIsOpen(true);

    // Smooth transition
    setTimeout(() => {
      if (onOpenGate) onOpenGate();
    }, 2000);
  };

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-between py-6 px-4 z-20 overflow-hidden select-none max-w-xl mx-auto">
      {/* Top Header */}
      <div className="w-full flex flex-col items-center text-center pt-2">
        <ToranHeader />
        
        <div className="mt-3 space-y-1.5">
          <h1 className="font-devanagari text-2xl md:text-4xl font-bold tracking-wider gold-text-radiant drop-shadow-lg">
            ॥ श्री महालक्ष्म्यै नमः ॥
          </h1>
          <p className="font-devanagari text-base md:text-xl text-[#FFF4B8] font-medium drop-shadow-md">
            माता महालक्ष्मी व गौरीच्या आगमन प्रसंगी
          </p>
          <p className="font-traditional text-xl md:text-2xl text-[#F5C862] tracking-wide drop-shadow">
            सस्नेह निमंत्रण
          </p>
        </div>
      </div>

      {/* Temple Gate Main Visual Focus - Grand Proportions */}
      <div className="relative my-auto w-full max-w-[340px] md:max-w-[400px] aspect-[3/4] flex items-center justify-center p-2">
        {/* Ornate Arch Frame */}
        <div className="absolute inset-0 rounded-t-[150px] md:rounded-t-[180px] rounded-b-3xl border-[4px] border-[#F5C862] bg-[#140802]/95 shadow-[0_0_50px_rgba(245,200,98,0.45)] flex flex-col overflow-hidden p-2">
          {/* Top Arch Carving */}
          <div className="w-full h-12 flex items-center justify-center border-b-2 border-[#F5C862]/60 bg-gradient-to-b from-[#421D0D] to-[#140802]">
            <span className="font-devanagari text-sm md:text-base text-[#FFF2A8] font-bold tracking-widest drop-shadow">
              卐 शुभ लाभ 卐
            </span>
          </div>

          {/* Door Frame Inner Area */}
          <div className="relative flex-1 w-full flex overflow-hidden rounded-b-2xl bg-gradient-to-b from-[#240D04] to-[#0A0401]">
            
            {/* Sanctum Reveal (Inside Gate) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-tr from-[#F5C862] via-[#FFF2A8] to-[#B8860B] shadow-[0_0_30px_rgba(245,200,98,0.6)] overflow-hidden">
                <img
                  src="/assets/images/mahalakshmi-1.jpg"
                  alt="श्री महालक्ष्मी दर्शन"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <p className="font-devanagari text-xs md:text-sm text-[#FFF2A8] mt-3 font-bold drop-shadow">
                ॥ ॐ श्रीं ह्रीं क्लीं महालक्ष्म्यै नमः ॥
              </p>
            </div>

            {/* Realistic 3D Opening Temple Doors */}
            <div className="absolute inset-0 perspective-gate flex">
              {/* Left Door */}
              <div
                className={`w-1/2 h-full bg-gradient-to-r from-[#2B1005] via-[#4D1F0A] to-[#61280E] border-r-2 border-[#F5C862] shadow-2xl p-2.5 flex flex-col justify-between door-left ${
                  isOpen ? 'door-open-left' : ''
                }`}
              >
                <div className="w-full h-16 rounded-xl border border-[#FFF2A8]/40 bg-[#381607]/80 shadow-inner flex items-center justify-center">
                  <span className="text-[#FFF2A8] text-xl">🪷</span>
                </div>
                <div className="w-full h-24 rounded-xl border-2 border-[#F5C862] bg-[#421A08] shadow-inner flex flex-col items-center justify-center relative">
                  <div className="w-10 h-10 rounded-full border-2 border-[#FFF2A8] bg-[#140802] flex items-center justify-center text-[#FFF2A8] font-devanagari text-lg font-bold">
                    श्री
                  </div>
                  <div className="mt-2 w-4 h-4 rounded-full bg-[#F5C862] shadow border border-[#FFF2A8]" />
                </div>
                <div className="w-full h-16 rounded-xl border border-[#FFF2A8]/40 bg-[#381607]/80 shadow-inner flex items-center justify-center">
                  <span className="text-[#FFF2A8] text-xl">🪷</span>
                </div>
              </div>

              {/* Right Door */}
              <div
                className={`w-1/2 h-full bg-gradient-to-l from-[#2B1005] via-[#4D1F0A] to-[#61280E] border-l-2 border-[#F5C862] shadow-2xl p-2.5 flex flex-col justify-between door-right ${
                  isOpen ? 'door-open-right' : ''
                }`}
              >
                <div className="w-full h-16 rounded-xl border border-[#FFF2A8]/40 bg-[#381607]/80 shadow-inner flex items-center justify-center">
                  <span className="text-[#FFF2A8] text-xl">🪷</span>
                </div>
                <div className="w-full h-24 rounded-xl border-2 border-[#F5C862] bg-[#421A08] shadow-inner flex flex-col items-center justify-center relative">
                  <div className="w-10 h-10 rounded-full border-2 border-[#FFF2A8] bg-[#140802] flex items-center justify-center text-[#FFF2A8] font-devanagari text-lg font-bold">
                    ॐ
                  </div>
                  <div className="mt-2 w-4 h-4 rounded-full bg-[#F5C862] shadow border border-[#FFF2A8]" />
                </div>
                <div className="w-full h-16 rounded-xl border border-[#FFF2A8]/40 bg-[#381607]/80 shadow-inner flex items-center justify-center">
                  <span className="text-[#FFF2A8] text-xl">🪷</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Diyas at Doorstep */}
        <div className="absolute -bottom-2 left-4 z-30">
          <Diya />
        </div>
        <div className="absolute -bottom-2 right-4 z-30">
          <Diya />
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="w-full max-w-sm flex flex-col items-center z-20 pb-4 pt-2">
        <button
          onClick={handleOpenClick}
          disabled={isOpen || isOpening}
          className={`w-full py-4 px-8 rounded-full text-lg md:text-xl font-devanagari font-bold tracking-wide transition-all duration-500 shadow-[0_12px_30px_rgba(0,0,0,0.8)] ${
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
