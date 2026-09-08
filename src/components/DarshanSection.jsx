import React, { useState } from 'react';
import { LotusDivider, Diya } from './BackgroundElements';
import { Sparkles, ChevronRight } from 'lucide-react';
import { devotionalAudio } from '../utils/audio';

export default function DarshanSection({ onNext }) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const photos = [
    {
      src: '/assets/images/mahalakshmi-1.jpg',
      caption: 'श्री महालक्ष्मी व माता गौरीचे मंगलमय रूप',
    },
    {
      src: '/assets/images/mahalakshmi-2.jpg',
      caption: 'आमच्या निवासस्थानी सजलेले मातेचे अलौकिक रूप',
    },
  ];

  const handleNextClick = () => {
    devotionalAudio.playSacredChime();
    if (onNext) onNext();
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between py-8 px-4 z-20 overflow-y-auto bg-mandala-pattern">
      {/* Top Sacred Shloka Header */}
      <div className="w-full max-w-2xl text-center space-y-2 animate-[fadeIn_1.2s_ease-out]">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-[#FAF4EB] border border-[#C5A059]/40 shadow-sm">
          <span className="text-xs text-[#936E2B]">✦</span>
          <h2 className="font-devanagari text-lg md:text-xl text-[#791724] font-bold tracking-wider">
            ॥ श्री महालक्ष्म्यै नमः ॥
          </h2>
          <span className="text-xs text-[#936E2B]">✦</span>
        </div>
        <p className="font-traditional text-sm md:text-base text-[#936E2B] tracking-wide">
          अलौकिक मंगल दर्शन
        </p>
      </div>

      {/* Main Devotional Darshan Card with Halo & User's Authentic Photos */}
      <div className="w-full max-w-xl my-6 flex flex-col items-center">
        {/* Glowing Halo Around the Sanctum Photo Frame */}
        <div className="relative w-full p-3 rounded-2xl bg-[#FAF4EB]/90 backdrop-blur-md border border-[#C5A059]/60 shadow-[0_15px_40px_rgba(121,23,36,0.12)]">
          {/* Ornamental Frame Corners */}
          <div className="absolute top-2 left-2 text-[#C5A059] text-xs">╔</div>
          <div className="absolute top-2 right-2 text-[#C5A059] text-xs">╗</div>
          <div className="absolute bottom-2 left-2 text-[#C5A059] text-xs">╚</div>
          <div className="absolute bottom-2 right-2 text-[#C5A059] text-xs">╝</div>

          {/* Photo Display with Soft Golden Aura */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-inner border border-[#C5A059]/40 group">
            <img
              src={photos[activePhotoIndex].src}
              alt="श्री महालक्ष्मी दर्शन"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Soft Ambient Gold Overlay at Bottom */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2B211D]/80 via-[#2B211D]/30 to-transparent p-3 text-center">
              <p className="font-devanagari text-xs md:text-sm text-[#FFFDF9] font-medium drop-shadow-sm">
                {photos[activePhotoIndex].caption}
              </p>
            </div>
          </div>

          {/* Subtle Photo Switcher Dots */}
          <div className="flex justify-center items-center gap-2 mt-3">
            {photos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhotoIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activePhotoIndex === idx
                    ? 'w-6 h-2 bg-[#791724]'
                    : 'w-2 h-2 bg-[#C5A059]/50 hover:bg-[#C5A059]'
                }`}
                title={`दर्शन प्रतिमा ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Lotus Divider */}
        <LotusDivider />

        {/* Sacred Invitation Verses */}
        <div className="w-full space-y-4 text-center px-4 font-devanagari">
          <p className="text-base md:text-lg text-[#2B211D] leading-relaxed font-medium">
            दरवर्षीच्या परंपरेप्रमाणे,<br />
            याही वर्षी आमच्या घरी<br />
            <span className="text-[#791724] font-semibold">श्री महालक्ष्मी व माता गौरी</span> च्या<br />
            पूजनाचा पावन व मंगल प्रसंग आला आहे.
          </p>

          <p className="text-sm md:text-base text-[#5E4A40] leading-relaxed">
            माता महालक्ष्मीच्या असीम कृपेने,<br />
            सुख, समृद्धी व सौभाग्याने<br />
            आमचे अंगण पुन्हा एकदा धन्य होत आहे.
          </p>

          <p className="text-base md:text-lg text-[#791724] font-semibold leading-relaxed">
            या मंगल प्रसंगाचा आनंद द्विगुणीत करण्यासाठी<br />
            आणि मातेचा कृपाप्रसाद घेण्यासाठी<br />
            आपणांस सपरिवार सस्नेह निमंत्रण!
          </p>

          <p className="text-xs md:text-sm text-[#936E2B] italic font-medium pt-1">
            माता महालक्ष्मीचा वरदहस्त व कृपाछत्र<br />
            आपल्यावर व आपल्या परिवारावर सदैव राहो.
          </p>
        </div>
      </div>

      {/* Diyas flanking bottom */}
      <div className="w-full max-w-sm flex justify-between px-8 py-2">
        <Diya />
        <Diya />
      </div>

      {/* Bottom CTA Action Button */}
      <div className="w-full max-w-sm flex flex-col items-center z-20 pb-4 pt-2">
        <button
          onClick={handleNextClick}
          className="w-full py-3.5 px-8 rounded-full text-base md:text-lg font-devanagari font-semibold tracking-wide bg-gradient-to-r from-[#791724] via-[#A32832] to-[#791724] text-[#FFFDF9] border border-[#E8CA82] shadow-card-lux hover:shadow-gold-glow hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          <Sparkles className="w-4 h-4 text-[#E8CA82] animate-pulse" />
          <span>✨ निमंत्रण पत्रिका पहा ✨</span>
          <ChevronRight className="w-4 h-4 text-[#E8CA82] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
