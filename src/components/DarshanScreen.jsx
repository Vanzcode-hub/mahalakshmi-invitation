import React, { useState } from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { LotusDivider, Diya } from './BackgroundElements';

export default function DarshanScreen({ onNext }) {
  const [photoIndex, setPhotoIndex] = useState(0);

  const photos = [
    {
      src: '/assets/images/mahalakshmi-1.jpg',
      label: 'श्री महालक्ष्मी व माता गौरीचे मंगलमय रूप',
    },
    {
      src: '/assets/images/mahalakshmi-2.jpg',
      label: 'आमच्या निवासस्थानी सजलेले मातेचे अलौकिक रूप',
    },
  ];

  return (
    <div className="w-full min-h-[100dvh] py-6 px-4 flex flex-col items-center justify-between z-20 max-w-xl mx-auto select-none">
      {/* Top Sacred Shloka */}
      <div className="w-full text-center space-y-1.5 pt-2">
        <div className="inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-[#381B0E]/85 border-2 border-[#F5C862]/60 shadow-md">
          <span className="text-[#FFE082] text-sm">✦</span>
          <h2 className="font-devanagari text-xl md:text-2xl font-bold gold-text-radiant">
            ॥ श्री महालक्ष्म्यै नमः ॥
          </h2>
          <span className="text-[#FFE082] text-sm">✦</span>
        </div>
        <p className="font-devanagari text-sm md:text-base text-[#F5C862] font-semibold tracking-wide">
          अलौकिक मंगल दर्शन
        </p>
      </div>

      {/* Main Darshan Card - Grand & Highly Visible */}
      <div className="w-full my-auto royal-glass-card rounded-3xl p-5 md:p-7 text-center space-y-5 border-2 border-[#F5C862]/60 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
        {/* Photo Container */}
        <div className="relative w-full max-w-[360px] md:max-w-[420px] mx-auto">
          <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-[#B8860B] via-[#FFF2A8] to-[#B8860B] shadow-[0_0_35px_rgba(245,200,98,0.45)] overflow-hidden">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/50">
              <img
                src={photos[photoIndex].src}
                alt="श्री महालक्ष्मी दर्शन"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-2.5 text-center">
                <p className="font-devanagari text-xs md:text-sm text-[#FFFDF8] font-bold drop-shadow">
                  {photos[photoIndex].label}
                </p>
              </div>
            </div>
          </div>

          {/* Photo Switcher */}
          <div className="flex justify-center items-center gap-3 mt-2.5">
            <button
              onClick={() => setPhotoIndex(0)}
              className={`px-4 py-1 rounded-full text-xs font-devanagari transition-all ${
                photoIndex === 0
                  ? 'bg-[#F5C862] text-[#140802] font-bold shadow-md scale-105'
                  : 'bg-[#381B0E] text-[#FFF4B8] hover:bg-[#502410] border border-[#F5C862]/40'
              }`}
            >
              दर्शन १
            </button>
            <button
              onClick={() => setPhotoIndex(1)}
              className={`px-4 py-1 rounded-full text-xs font-devanagari transition-all ${
                photoIndex === 1
                  ? 'bg-[#F5C862] text-[#140802] font-bold shadow-md scale-105'
                  : 'bg-[#381B0E] text-[#FFF4B8] hover:bg-[#502410] border border-[#F5C862]/40'
              }`}
            >
              दर्शन २
            </button>
          </div>
        </div>

        {/* Sacred Devotional Verses - Enhanced Visibility & Sizing in Marathi */}
        <div className="space-y-3.5 font-devanagari text-center px-2">
          <p className="text-base md:text-lg leading-relaxed text-[#FFFDF8] font-medium">
            दरवर्षीच्या परंपरेप्रमाणे,<br />
            याही वर्षी आमच्या घरी<br />
            <span className="text-[#FFF2A8] font-bold">श्री महालक्ष्मी व माता गौरी</span> च्या<br />
            पूजनाचा पावन व मंगल प्रसंग आला आहे.
          </p>

          <p className="text-sm md:text-base text-[#F5C862] leading-relaxed font-medium">
            माता महालक्ष्मीच्या असीम कृपेने,<br />
            सुख, समृद्धी व सौभाग्याने<br />
            आमचे अंगण पुन्हा एकदा धन्य होत आहे.
          </p>

          <p className="text-base md:text-lg text-[#FFFFFF] font-bold leading-relaxed pt-1">
            या मंगल प्रसंगाचा आनंद द्विगुणीत करण्यासाठी<br />
            आणि मातेचा कृपाप्रसाद घेण्यासाठी<br />
            आपणांस सपरिवार सस्नेह निमंत्रण!
          </p>

          <p className="text-xs md:text-sm text-[#FFF2A8] italic font-semibold pt-1">
            माता महालक्ष्मीचा वरदहस्त व कृपाछत्र<br />
            आपल्यावर व आपल्या परिवारावर सदैव राहो.
          </p>
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="w-full max-w-sm flex flex-col items-center z-20 pb-4 pt-2">
        <button
          onClick={onNext}
          className="w-full py-3.5 px-8 rounded-full text-base md:text-lg font-devanagari font-bold tracking-wide bg-gradient-to-r from-[#80131E] via-[#A81C2A] to-[#80131E] text-[#FFFDF8] border-2 border-[#F5C862] shadow-[0_12px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(245,200,98,0.7)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          <Sparkles className="w-5 h-5 text-[#FFF2A8] animate-pulse" />
          <span>✨ निमंत्रण पत्रिका पहा ✨</span>
          <ChevronRight className="w-5 h-5 text-[#FFF2A8] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
