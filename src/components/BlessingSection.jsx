import React, { useState } from 'react';
import { LotusDivider, Diya } from './BackgroundElements';
import { RotateCcw, Share2, Check, Sparkles, Heart } from 'lucide-react';
import { devotionalAudio } from '../utils/audio';

export default function BlessingSection({ guestName = '', onRestart }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '॥ श्री महालक्ष्मी गौरी पूजन व महाप्रसाद भोजन आमंत्रण ॥',
        text: 'श्री महालक्ष्मी व माता गौरीच्या पावन पूजन व महाप्रसाद भोजनास आपले सपरिवार सस्नेह निमंत्रण - श्री विनोदराव टिकले व सौ. कल्पना टिकले',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleRestartClick = () => {
    devotionalAudio.playTempleBell(432);
    if (onRestart) onRestart();
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between py-8 px-4 z-20 overflow-y-auto bg-mandala-pattern">
      {/* Top Sacred Shloka */}
      <div className="w-full max-w-xl text-center space-y-2 animate-[fadeIn_1s_ease-out]">
        <div className="inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-[#FAF4EB] border border-[#C5A059]/60 shadow-sm">
          <span className="text-xs text-[#936E2B]">✦</span>
          <h2 className="font-devanagari text-lg md:text-2xl text-[#791724] font-bold tracking-wider">
            ॥ श्री महालक्ष्म्यै नमः ॥
          </h2>
          <span className="text-xs text-[#936E2B]">✦</span>
        </div>
        <p className="font-traditional text-xs md:text-sm text-[#936E2B] tracking-wide">
          पावन प्रार्थना व मंगल कामना
        </p>
      </div>

      {/* Main Divine Blessing Card with Glowing Aura */}
      <div className="w-full max-w-xl my-4 p-6 md:p-8 rounded-3xl bg-[#FFFDF9]/95 backdrop-blur-md border-2 border-[#C5A059]/70 shadow-[0_20px_50px_rgba(121,23,36,0.18)] text-center relative overflow-hidden">
        {/* Glowing Aura behind Sanctum Image */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-5 rounded-full p-1.5 bg-gradient-to-tr from-[#C5A059] via-[#FAF4EB] to-[#C5A059] shadow-gold-glow-lg">
          <div className="absolute inset-0 bg-[#FFD700]/20 rounded-full blur-xl animate-pulse" />
          <img
            src="/assets/images/mahalakshmi-2.jpg"
            alt="श्री महालक्ष्मी व माता गौरी"
            className="w-full h-full object-cover rounded-full relative z-10 border border-[#C5A059]"
          />
        </div>

        {/* Personalized Guest Welcome if provided */}
        {guestName && (
          <div className="mb-4 inline-block px-4 py-1 rounded-full bg-[#FAF4EB] border border-[#C5A059]/40 text-[#791724] font-devanagari text-xs md:text-sm font-semibold">
            ✨ प्रिय {guestName}, आपल्या स्वीकृतीबद्दल मनःपूर्वक धन्यवाद ✨
          </div>
        )}

        {/* Devotional Prayer Verses */}
        <div className="space-y-4 font-devanagari text-[#2B211D]">
          <p className="text-sm md:text-base text-[#936E2B] font-semibold">
            माता महालक्ष्मीच्या चरणी आमची हीच प्रार्थना आहे की —
          </p>

          <div className="p-4 rounded-2xl bg-gradient-to-b from-[#FAF4EB] to-[#F2E8D8]/50 border border-[#C5A059]/40 text-sm md:text-base leading-relaxed space-y-1 text-[#2B211D] font-medium">
            <p>आपल्या जीवनात सुख असो,</p>
            <p>घरात समृद्धी नांदावी,</p>
            <p>मनात शांतता लाभो,</p>
            <p className="text-[#791724] font-semibold">आणि प्रत्येक पावलावर मातेचा आशीर्वाद असो.</p>
          </div>

          <p className="text-sm md:text-base text-[#5E4A40] leading-relaxed pt-2">
            माता महालक्ष्मी व गौरी माता<br />
            आपल्या परिवारास सदैव<br />
            <span className="text-[#791724] font-semibold">सुख, समृद्धी आणि उत्तम आरोग्य</span> प्रदान करो.
          </p>

          <LotusDivider />

          {/* Salutation & Hosts */}
          <div className="pt-1">
            <p className="text-base md:text-lg font-bold text-[#791724] tracking-wide mb-3">
              🙏 सस्नेह निमंत्रक 🙏
            </p>

            <div className="inline-block px-6 py-2.5 rounded-2xl bg-[#FAF4EB] border border-[#C5A059]/60 shadow-sm">
              <p className="text-base md:text-lg font-bold text-[#791724]">
                श्री विनोदराव टिकले व सौ. कल्पना टिकले
              </p>
              <p className="text-xs text-[#936E2B] font-medium mt-0.5">
                सस्नेह निमंत्रक - टिकले परिवार, यवतमाळ
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons: Share & Replay */}
        <div className="flex justify-center items-center gap-3 mt-6 pt-4 border-t border-[#C5A059]/30">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs md:text-sm font-devanagari font-medium text-[#791724] bg-[#FAF4EB] hover:bg-[#F2E8D8] border border-[#C5A059]/60 shadow-sm transition-all active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-700" />
                <span className="text-green-700">लिंक कॉपी झाली!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-[#791724]" />
                <span>निमंत्रण शेअर करा</span>
              </>
            )}
          </button>

          <button
            onClick={handleRestartClick}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs md:text-sm font-devanagari font-medium text-[#5E4A40] bg-[#FAF4EB] hover:bg-[#F2E8D8] border border-[#C5A059]/60 shadow-sm transition-all active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>पुन्हा पहा ↺</span>
          </button>
        </div>
      </div>

      {/* Subtle, Respectful Creator Credit (does not compete with parents' names) */}
      <div className="w-full text-center py-2 select-none">
        <p className="font-sans text-[11px] text-[#936E2B]/80 tracking-wider">
          Invitation crafted with love by <span className="font-medium text-[#791724]/90">Vanshika Tikale</span> ♡
        </p>
      </div>

      {/* Bottom Diyas */}
      <div className="w-full max-w-sm flex justify-between px-8">
        <Diya />
        <Diya />
      </div>
    </div>
  );
}
