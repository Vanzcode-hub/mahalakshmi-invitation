import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Map, CalendarPlus, Share2, Check, RotateCcw, Heart, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { LotusDivider, Diya } from './BackgroundElements';
import confetti from 'canvas-confetti';

export default function MainInvitation({ onRestart }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [hasRSVPed, setHasRSVPed] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const handleRSVPClick = () => {
    if (hasRSVPed) return;
    setHasRSVPed(true);

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#FFE082', '#E5B25D', '#A67C2E', '#FFFDF8'],
    });
  };

  const handleDirections = () => {
    const address = encodeURIComponent("Singhania Nagar, Arni Road, Yavatmal, Maharashtra, India");
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  const handleAddToCalendar = () => {
    const event = {
      title: "श्री महालक्ष्मी गौरी पूजन व महाप्रसाद भोजन | टिकले परिवार",
      description: "श्री महालक्ष्मी व माता गौरीच्या पावन पूजन व महाप्रसाद भोजनाच्या शुभ प्रसंगी सस्नेह निमंत्रण।",
      location: "आमचे निवासस्थान, सिंघानिया नगर, आर्णी रोड, यवतमाळ",
      startTime: "20260918T190000",
      endTime: "20260918T223000",
    };
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startTime}/${event.endTime}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    window.open(googleCalUrl, '_blank');
  };

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

  return (
    <div className="w-full min-h-screen py-8 px-4 flex flex-col items-center justify-start z-20 space-y-8 max-w-2xl mx-auto">
      {/* 1. TOP SANCTUM CROWN & DARSHAN SECTION */}
      <section className="w-full royal-glass-card rounded-3xl p-5 md:p-8 text-center space-y-6 relative overflow-hidden animate-[fadeIn_0.8s_ease-out]">
        {/* Sacred Shloka Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-[#381B0E]/60 border border-[#E5B25D]/40">
            <span className="text-[#FFE082] text-xs">✦</span>
            <h2 className="font-devanagari text-xl md:text-2xl font-bold gold-text-radiant">
              ॥ श्री महालक्ष्म्यै नमः ॥
            </h2>
            <span className="text-[#FFE082] text-xs">✦</span>
          </div>
          <p className="font-devanagari text-xs md:text-sm text-[#E5B25D] tracking-wide pt-1">
            अलौकिक मंगल दर्शन
          </p>
        </div>

        {/* Authentic Mahalakshmi Photo in Radiant Royal Gold Frame */}
        <div className="relative w-full max-w-md mx-auto">
          <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-[#A67C2E] via-[#FFE082] to-[#A67C2E] shadow-[0_0_35px_rgba(229,178,93,0.35)] overflow-hidden group">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/40">
              <img
                src={photos[photoIndex].src}
                alt="श्री महालक्ष्मी दर्शन"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 text-center">
                <p className="font-devanagari text-xs md:text-sm text-[#FFFDF8] font-medium drop-shadow">
                  {photos[photoIndex].label}
                </p>
              </div>
            </div>
          </div>

          {/* Photo Navigation Switcher */}
          <div className="flex justify-center items-center gap-3 mt-3">
            <button
              onClick={() => setPhotoIndex(0)}
              className={`px-3 py-1 rounded-full text-xs font-devanagari transition-all ${
                photoIndex === 0
                  ? 'bg-[#E5B25D] text-[#1A0D05] font-bold shadow-md'
                  : 'bg-[#381B0E]/80 text-[#F8E2B0] hover:bg-[#381B0E]'
              }`}
            >
              दर्शन १
            </button>
            <button
              onClick={() => setPhotoIndex(1)}
              className={`px-3 py-1 rounded-full text-xs font-devanagari transition-all ${
                photoIndex === 1
                  ? 'bg-[#E5B25D] text-[#1A0D05] font-bold shadow-md'
                  : 'bg-[#381B0E]/80 text-[#F8E2B0] hover:bg-[#381B0E]'
              }`}
            >
              दर्शन २
            </button>
          </div>
        </div>

        {/* Sacred Darshan Verses */}
        <div className="space-y-3.5 font-devanagari text-[#F8E2B0] text-center px-2">
          <p className="text-sm md:text-base leading-relaxed">
            दरवर्षीच्या परंपरेप्रमाणे,<br />
            याही वर्षी आमच्या घरी<br />
            <span className="text-[#FFE082] font-semibold">श्री महालक्ष्मी व माता गौरी</span> च्या<br />
            पूजनाचा पावन व मंगल प्रसंग आला आहे.
          </p>

          <p className="text-xs md:text-sm text-[#E5B25D] leading-relaxed">
            माता महालक्ष्मीच्या असीम कृपेने,<br />
            सुख, समृद्धी व सौभाग्याने<br />
            आमचे अंगण पुन्हा एकदा धन्य होत आहे.
          </p>

          <p className="text-sm md:text-base text-[#FFFDF8] font-semibold leading-relaxed">
            या मंगल प्रसंगाचा आनंद द्विगुणीत करण्यासाठी<br />
            आणि मातेचा कृपाप्रसाद घेण्यासाठी<br />
            आपणांस सपरिवार सस्नेह निमंत्रण!
          </p>

          <p className="text-xs md:text-sm text-[#FFE082] italic font-medium pt-1">
            माता महालक्ष्मीचा वरदहस्त व कृपाछत्र<br />
            आपल्यावर व आपल्या परिवारावर सदैव राहो.
          </p>
        </div>
      </section>

      {/* 2. INVITATION DETAILS PATRIKA CARD */}
      <section className="w-full royal-glass-card rounded-3xl p-5 md:p-8 space-y-6 relative overflow-hidden">
        {/* Section Heading */}
        <div className="text-center space-y-1">
          <h2 className="font-devanagari text-xl md:text-2xl font-bold gold-text-radiant">
            🌸 श्री महालक्ष्मी गौरी पूजन 🌸
          </h2>
          <p className="font-devanagari text-xs text-[#E5B25D]">
            व सस्नेह महाप्रसाद भोजन निमंत्रण
          </p>
        </div>

        {/* Date, Time & Venue Highlight Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3.5 rounded-2xl bg-[#2B150A]/70 border border-[#E5B25D]/40 font-devanagari text-center">
          {/* Date */}
          <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#1A0D05]/60 border border-[#E5B25D]/20">
            <Calendar className="w-5 h-5 text-[#FFE082] mb-1" />
            <span className="text-[11px] text-[#E5B25D]">शुभ दिनांक</span>
            <span className="text-sm md:text-base font-bold text-[#FFFDF8]">
              १८ सप्टेंबर २०२६
            </span>
          </div>

          {/* Time */}
          <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#1A0D05]/60 border border-[#E5B25D]/20">
            <Clock className="w-5 h-5 text-[#FFE082] mb-1" />
            <span className="text-[11px] text-[#E5B25D]">शुभ वेळ</span>
            <span className="text-sm md:text-base font-bold text-[#FFFDF8]">
              सायंकाळी ७:०० वा.
            </span>
          </div>

          {/* Venue */}
          <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#1A0D05]/60 border border-[#E5B25D]/20">
            <MapPin className="w-5 h-5 text-[#FFE082] mb-1" />
            <span className="text-[11px] text-[#E5B25D]">स्थळ</span>
            <span className="text-sm md:text-base font-bold text-[#FFFDF8]">
              स्नेहिल निवास
            </span>
          </div>
        </div>

        {/* Address & Quick Map/Calendar Buttons */}
        <div className="text-center font-devanagari space-y-3">
          <p className="text-sm md:text-base text-[#F8E2B0]">
            📍 <span className="font-semibold text-[#FFFDF8]">सिंघानिया नगर, आर्णी रोड, यवतमाळ</span>
          </p>

          <div className="flex justify-center items-center gap-3">
            <button
              onClick={handleDirections}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-devanagari font-medium text-[#FFE082] bg-[#381B0E] hover:bg-[#502410] border border-[#E5B25D]/40 transition-colors"
            >
              <Map className="w-3.5 h-3.5" />
              <span>गूगल मॅप्सवर पहा</span>
            </button>
            <button
              onClick={handleAddToCalendar}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-devanagari font-medium text-[#FFE082] bg-[#381B0E] hover:bg-[#502410] border border-[#E5B25D]/40 transition-colors"
            >
              <CalendarPlus className="w-3.5 h-3.5" />
              <span>कॅलेंडरमध्ये जोडा</span>
            </button>
          </div>
        </div>

        <LotusDivider />

        {/* Invitation Text */}
        <div className="space-y-3.5 text-center font-devanagari text-[#F8E2B0]">
          <p className="text-sm md:text-base leading-relaxed">
            माता महालक्ष्मी व गौरी पूजनाच्या<br />
            पावन पर्वावर आणि महाप्रसाद भोजनास<br />
            आपली स्नेहमयी उपस्थिती आमच्यासाठी<br />
            <span className="text-[#FFE082] font-semibold">अत्यंत आनंद व सौभाग्याची ठरेल.</span>
          </p>

          <p className="text-xs md:text-sm text-[#E5B25D] leading-relaxed">
            तरी आपण सर्वांनी सहकुटुंब सहपरिवार उपस्थित राहून<br />
            माता महालक्ष्मीचे दर्शन व कृपाप्रसाद ग्रहण करावा,<br />
            हीच नम्र विनंती.
          </p>

          {/* Highlighted Golden Quote */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#381B0E]/80 via-[#502410]/90 to-[#381B0E]/80 border border-[#E5B25D]/60 shadow-[0_0_20px_rgba(229,178,93,0.15)] my-4">
            <p className="font-devanagari text-base md:text-lg text-[#FFE082] font-bold tracking-wide">
              "आपले आगमन हेच आमच्यासाठी<br />
              सर्वात मोठे व सुंदर आशीर्वाद आहे."
            </p>
          </div>
        </div>
      </section>

      {/* 3. CLEAN RSVP / ACCEPTANCE SECTION */}
      <section className="w-full royal-glass-card rounded-3xl p-6 md:p-8 text-center space-y-4 relative overflow-hidden">
        <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-tr from-[#E5B25D] to-[#381B0E] p-0.5 shadow-[0_0_20px_rgba(229,178,93,0.4)] flex items-center justify-center">
          <span className="text-xl">🪷</span>
        </div>

        <h3 className="font-devanagari text-lg md:text-xl font-bold text-[#FFFDF8]">
          आपण या मंगल प्रसंगी उपस्थित राहणार का?
        </h3>

        <div className="max-w-md mx-auto pt-1">
          <button
            onClick={handleRSVPClick}
            disabled={hasRSVPed}
            className={`w-full py-3.5 px-6 rounded-full font-devanagari font-bold text-base md:text-lg tracking-wide transition-all duration-500 shadow-lg ${
              hasRSVPed
                ? 'bg-gradient-to-r from-[#1B4D20] to-[#2E6B34] text-[#FFFDF8] border border-[#66BB6A]'
                : 'bg-gradient-to-r from-[#701620] via-[#94202C] to-[#701620] text-[#FFFDF8] border-2 border-[#E5B25D] hover:shadow-[0_0_25px_rgba(229,178,93,0.6)] hover:scale-[1.02] active:scale-95'
            }`}
          >
            {hasRSVPed ? (
              <span className="flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-[#FFE082] fill-current animate-pulse" />
                <span>✨ मनःपूर्वक धन्यवाद! आपली वाट पाहत आहोत ✨</span>
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <span>🌸</span>
                <span>होय, मी नक्की येणार</span>
                <span>🌸</span>
              </span>
            )}
          </button>
        </div>
      </section>

      {/* 4. FINAL BLESSING & HOSTS SCREEN */}
      <section className="w-full royal-glass-card rounded-3xl p-6 md:p-8 text-center space-y-6 relative overflow-hidden">
        {/* Heading */}
        <div className="space-y-1">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-[#381B0E]/60 border border-[#E5B25D]/40">
            <span className="text-[#FFE082] text-xs">✦</span>
            <h2 className="font-devanagari text-lg md:text-xl font-bold gold-text-radiant">
              ॥ श्री महालक्ष्म्यै नमः ॥
            </h2>
            <span className="text-[#FFE082] text-xs">✦</span>
          </div>
          <p className="font-devanagari text-xs text-[#E5B25D]">
            पावन प्रार्थना व मंगल कामना
          </p>
        </div>

        {/* Prayer Verse */}
        <div className="space-y-3 font-devanagari text-[#F8E2B0] text-center">
          <p className="text-xs md:text-sm text-[#E5B25D] font-medium">
            माता महालक्ष्मीच्या चरणी आमची हीच प्रार्थना आहे की —
          </p>

          <div className="p-4 rounded-2xl bg-[#2B150A]/70 border border-[#E5B25D]/30 text-sm md:text-base leading-relaxed space-y-1 text-[#FFFDF8] font-medium">
            <p>आपल्या जीवनात सुख असो,</p>
            <p>घरात समृद्धी नांदावी,</p>
            <p>मनात शांतता लाभो</p>
            <p className="text-[#FFE082] font-semibold">आणि प्रत्येक पावलावर मातेचा आशीर्वाद असो.</p>
          </div>

          <p className="text-sm md:text-base text-[#F8E2B0] leading-relaxed pt-2">
            माता महालक्ष्मी व गौरी माता<br />
            आपल्या परिवारास सदैव<br />
            <span className="text-[#FFE082] font-semibold">सुख, समृद्धी आणि उत्तम आरोग्य</span> प्रदान करो.
          </p>
        </div>

        <LotusDivider />

        {/* Hosts Presentation */}
        <div className="pt-1 space-y-3">
          <p className="font-devanagari text-base md:text-lg font-bold text-[#FFE082]">
            🙏 सस्नेह निमंत्रक 🙏
          </p>

          <div className="inline-block px-8 py-3 rounded-2xl bg-[#381B0E]/90 border-2 border-[#E5B25D] shadow-lg">
            <p className="font-devanagari text-lg md:text-xl font-bold text-[#FFFDF8]">
              श्री विनोदराव टिकले व सौ. कल्पना टिकले
            </p>
            <p className="font-devanagari text-xs text-[#E5B25D] font-medium mt-0.5">
              सस्नेह निमंत्रक - टिकले परिवार, यवतमाळ
            </p>
          </div>
        </div>

        {/* Action Buttons: Share & Re-open Gate */}
        <div className="flex justify-center items-center gap-3 pt-4 border-t border-[#E5B25D]/20">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs md:text-sm font-devanagari font-medium text-[#FFE082] bg-[#381B0E] hover:bg-[#502410] border border-[#E5B25D]/40 transition-all active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-green-300">लिंक कॉपी झाली!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-[#FFE082]" />
                <span>निमंत्रण शेअर करा</span>
              </>
            )}
          </button>

          <button
            onClick={onRestart}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs md:text-sm font-devanagari font-medium text-[#E5B25D] bg-[#2B150A] hover:bg-[#381B0E] border border-[#E5B25D]/30 transition-all active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>पुन्हा पहा ↺</span>
          </button>
        </div>
      </section>

      {/* 5. DISCREET CREATOR CREDIT (Subtle, doesn't compete with parents) */}
      <footer className="w-full text-center py-4 select-none">
        <p className="font-sans text-[11px] text-[#E5B25D]/75 tracking-wider">
          Invitation crafted with love by <span className="font-medium text-[#FFE082]">Vanshika Tikale</span> ♡
        </p>
        <div className="flex justify-center items-center gap-12 mt-4">
          <Diya />
          <Diya />
        </div>
      </footer>
    </div>
  );
}
