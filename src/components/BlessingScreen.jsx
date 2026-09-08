import React, { useState } from 'react';
import { Share2, Check, RotateCcw, Sparkles } from 'lucide-react';
import { LotusDivider, Diya } from './BackgroundElements';

export default function BlessingScreen({ onRestart }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '॥ श्री महालक्ष्मी गौरी पूजन एवं प्रसाद भोज आमंत्रण ॥',
        text: 'माँ महालक्ष्मी एवं गौरी माता के पावन पूजन एवं प्रसाद भोज पर आपका सपरिवार सादर आमंत्रण - श्री विनोदराव टिकले एवं श्रीमती कल्पना टिकले',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="w-full min-h-[100dvh] py-6 px-4 flex flex-col items-center justify-between z-20 max-w-xl mx-auto select-none">
      {/* Top Header */}
      <div className="w-full text-center space-y-1.5 pt-2">
        <div className="inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-[#381B0E]/85 border-2 border-[#F5C862]/60 shadow-md">
          <span className="text-[#FFE082] text-sm">✦</span>
          <h2 className="font-devanagari text-xl md:text-2xl font-bold gold-text-radiant">
            ॥ श्री महालक्ष्म्यै नमः ॥
          </h2>
          <span className="text-[#FFE082] text-sm">✦</span>
        </div>
        <p className="font-devanagari text-sm text-[#F5C862] font-semibold">
          पावन प्रार्थना एवं मंगल कामना
        </p>
      </div>

      {/* Main Divine Blessing Card */}
      <div className="w-full my-auto royal-glass-card rounded-3xl p-5 md:p-7 text-center space-y-5 border-2 border-[#F5C862]/60 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
        {/* Glowing Sanctum Idol Image */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full p-1 bg-gradient-to-tr from-[#F5C862] via-[#FFF2A8] to-[#B8860B] shadow-[0_0_35px_rgba(245,200,98,0.6)]">
          <img
            src="/assets/images/mahalakshmi-2.jpg"
            alt="माँ महालक्ष्मी एवं गौरी माता"
            className="w-full h-full object-cover rounded-full border-2 border-[#F5C862]"
          />
        </div>

        {/* Prayer Verses */}
        <div className="space-y-3.5 font-devanagari text-[#FFFDF8] text-center">
          <p className="text-xs md:text-sm text-[#F5C862] font-semibold">
            माँ महालक्ष्मी के चरणों में हमारी यही प्रार्थना है कि —
          </p>

          <div className="p-4 rounded-2xl bg-[#2E1408]/90 border border-[#F5C862]/50 text-sm md:text-base leading-relaxed space-y-1 text-[#FFFDF8] font-medium shadow-inner">
            <p>आपके जीवन में सुख हो,</p>
            <p>घर में समृद्धि हो,</p>
            <p>मन में शांति हो</p>
            <p className="text-[#FFF2A8] font-bold">और हर कदम पर माँ का आशीर्वाद हो।</p>
          </div>

          <p className="text-sm md:text-base text-[#FFFDF8] leading-relaxed pt-1">
            माँ महालक्ष्मी एवं गौरी माता<br />
            आपके परिवार को सदैव<br />
            <span className="text-[#FFF2A8] font-bold">सुख, सौभाग्य और समृद्धि</span> प्रदान करें।
          </p>
        </div>

        <LotusDivider />

        {/* Host Presentation with exact requested names */}
        <div className="space-y-2.5">
          <p className="font-devanagari text-base md:text-lg font-bold text-[#FFF2A8]">
            🙏 सादर आमंत्रण एवं शुभकामनाएँ 🙏
          </p>

          <div className="inline-block px-7 py-3 rounded-2xl bg-[#381B0E]/95 border-2 border-[#F5C862] shadow-lg">
            <p className="font-devanagari text-lg md:text-xl font-bold text-[#FFFDF8]">
              श्री विनोदराव टिकले एवं श्रीमती कल्पना टिकले
            </p>
            <p className="font-devanagari text-xs text-[#F5C862] font-semibold mt-1">
              सप्रेम निमंत्रण
            </p>
          </div>
        </div>

        {/* Share & Replay Buttons */}
        <div className="flex justify-center items-center gap-3 pt-3 border-t border-[#F5C862]/30">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs md:text-sm font-devanagari font-semibold text-[#FFF2A8] bg-[#381B0E] hover:bg-[#502410] border border-[#F5C862]/50 transition-all active:scale-95 shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-green-300">लिंक कॉपी हो गया!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-[#F5C862]" />
                <span>आमंत्रण साझा करें</span>
              </>
            )}
          </button>

          <button
            onClick={onRestart}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs md:text-sm font-devanagari font-semibold text-[#F5C862] bg-[#2E1408] hover:bg-[#381B0E] border border-[#F5C862]/40 transition-all active:scale-95 shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>पुनः देखें ↺</span>
          </button>
        </div>
      </div>

      {/* Prominently Visible & Clear Creator Credit for Vanshika Tikale */}
      <footer className="w-full flex justify-center items-center py-3 select-none">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1A0802]/95 border-2 border-[#F5C862] shadow-[0_0_20px_rgba(245,200,98,0.5)] text-center">
          <Sparkles className="w-4 h-4 text-[#F5C862] animate-pulse" />
          <p className="font-sans text-xs md:text-sm text-[#FFFDF8] font-semibold tracking-wide">
            Invitation crafted with love by <span className="text-[#FFF2A8] font-bold underline decoration-[#F5C862] underline-offset-2">Vanshika Tikale</span> ♡
          </p>
          <Sparkles className="w-4 h-4 text-[#F5C862] animate-pulse" />
        </div>
      </footer>
    </div>
  );
}
