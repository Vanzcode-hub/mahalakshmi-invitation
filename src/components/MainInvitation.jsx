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
      label: 'माँ महालक्ष्मी एवं गौरी माता का मंगलमयी स्वरूप',
    },
    {
      src: '/assets/images/mahalakshmi-2.jpg',
      label: 'हमारे निवास पर सजी माँ की पावन झाँकी',
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
      title: "श्री महालक्ष्मी गौरी पूजन एवं प्रसाद भोज | टिकले परिवार",
      description: "माँ महालक्ष्मी एवं गौरी माता के पावन पूजन एवं प्रसाद भोज के शुभ अवसर पर स्नेहिल आमंत्रण।",
      location: "हमारा स्नेहिल निवास, सिंघानिया नगर, अरनी रोड, यवतमाल",
      startTime: "20260918T190000",
      endTime: "20260918T223000",
    };
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startTime}/${event.endTime}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    window.open(googleCalUrl, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '॥ श्री महालक्ष्मी गौरी पूजन एवं प्रसाद भोज आमंत्रण ॥',
        text: 'माँ महालक्ष्मी एवं गौरी माता के पावन पूजन एवं प्रसाद भोज पर आपका सपरिवार सादर आमंत्रण - विनोद एवं कल्पना टिकले',
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
            अलौकिक पावन दर्शन
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
            हर वर्ष की मंगलमयी परंपरा के साथ,<br />
            इस वर्ष भी हमारे घर<br />
            <span className="text-[#FFE082] font-semibold">माँ महालक्ष्मी एवं गौरी माता</span> के<br />
            पावन पूजन का शुभ अवसर आया है।
          </p>

          <p className="text-xs md:text-sm text-[#E5B25D] leading-relaxed">
            माँ महालक्ष्मी की कृपा,<br />
            सुख, समृद्धि एवं सौभाग्य से<br />
            हमारा आँगन पुनः धन्य होने जा रहा है।
          </p>

          <p className="text-sm md:text-base text-[#FFFDF8] font-semibold leading-relaxed">
            इस शुभ अवसर की प्रसन्नता को<br />
            आपके साथ बाँटने के लिए<br />
            आपको सपरिवार सादर आमंत्रित करते हैं।
          </p>

          <p className="text-xs md:text-sm text-[#FFE082] italic font-medium pt-1">
            माँ महालक्ष्मी का आशीर्वाद<br />
            सदैव आपके एवं आपके परिवार पर बना रहे।
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
            एवं स्नेहिल प्रसाद भोज आमंत्रण
          </p>
        </div>

        {/* Date, Time & Venue Highlight Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3.5 rounded-2xl bg-[#2B150A]/70 border border-[#E5B25D]/40 font-devanagari text-center">
          {/* Date */}
          <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#1A0D05]/60 border border-[#E5B25D]/20">
            <Calendar className="w-5 h-5 text-[#FFE082] mb-1" />
            <span className="text-[11px] text-[#E5B25D]">शुभ दिनांक</span>
            <span className="text-sm md:text-base font-bold text-[#FFFDF8]">
              18 सितंबर 2026
            </span>
          </div>

          {/* Time */}
          <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#1A0D05]/60 border border-[#E5B25D]/20">
            <Clock className="w-5 h-5 text-[#FFE082] mb-1" />
            <span className="text-[11px] text-[#E5B25D]">शुभ समय</span>
            <span className="text-sm md:text-base font-bold text-[#FFFDF8]">
              सायं 7:00 बजे
            </span>
          </div>

          {/* Venue */}
          <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#1A0D05]/60 border border-[#E5B25D]/20">
            <MapPin className="w-5 h-5 text-[#FFE082] mb-1" />
            <span className="text-[11px] text-[#E5B25D]">स्थान</span>
            <span className="text-sm md:text-base font-bold text-[#FFFDF8]">
              हमारा स्नेहिल निवास
            </span>
          </div>
        </div>

        {/* Address & Quick Map/Calendar Buttons */}
        <div className="text-center font-devanagari space-y-3">
          <p className="text-sm md:text-base text-[#F8E2B0]">
            📍 <span className="font-semibold text-[#FFFDF8]">सिंघानिया नगर, अरनी रोड, यवतमाल</span>
          </p>

          <div className="flex justify-center items-center gap-3">
            <button
              onClick={handleDirections}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-devanagari font-medium text-[#FFE082] bg-[#381B0E] hover:bg-[#502410] border border-[#E5B25D]/40 transition-colors"
            >
              <Map className="w-3.5 h-3.5" />
              <span>गूगल मैप्स पर देखें</span>
            </button>
            <button
              onClick={handleAddToCalendar}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-devanagari font-medium text-[#FFE082] bg-[#381B0E] hover:bg-[#502410] border border-[#E5B25D]/40 transition-colors"
            >
              <CalendarPlus className="w-3.5 h-3.5" />
              <span>कैलेंडर में जोड़ें</span>
            </button>
          </div>
        </div>

        <LotusDivider />

        {/* Invitation Text */}
        <div className="space-y-3.5 text-center font-devanagari text-[#F8E2B0]">
          <p className="text-sm md:text-base leading-relaxed">
            माँ महालक्ष्मी एवं गौरी माता के<br />
            पावन पूजन एवं प्रसाद भोज के शुभ अवसर पर<br />
            आपकी स्नेहमयी उपस्थिति हमारे लिए<br />
            <span className="text-[#FFE082] font-semibold">अत्यंत हर्ष एवं सौभाग्य का विषय होगी।</span>
          </p>

          <p className="text-xs md:text-sm text-[#E5B25D] leading-relaxed">
            अतः आपसे सादर निवेदन है कि<br />
            इस शुभ अवसर पर पधारकर<br />
            माँ महालक्ष्मी का आशीर्वाद प्राप्त करें<br />
            एवं हमारे प्रसाद भोज को अपनी उपस्थिति से<br />
            सुस्वादु एवं मंगलमय बनाएँ।
          </p>

          {/* Highlighted Golden Quote */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#381B0E]/80 via-[#502410]/90 to-[#381B0E]/80 border border-[#E5B25D]/60 shadow-[0_0_20px_rgba(229,178,93,0.15)] my-4">
            <p className="font-devanagari text-base md:text-lg text-[#FFE082] font-bold tracking-wide">
              "आपका आगमन ही हमारे लिए<br />
              सबसे सुंदर उपहार है।"
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
          क्या आप हमारे इस शुभ अवसर पर पधारेंगे?
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
                <span>✨ आपकी मंगल उपस्थिति की प्रतीक्षा रहेगी ✨</span>
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
            पावन प्रार्थना एवं मंगल कामना
          </p>
        </div>

        {/* Prayer Verse */}
        <div className="space-y-3 font-devanagari text-[#F8E2B0] text-center">
          <p className="text-xs md:text-sm text-[#E5B25D] font-medium">
            माँ महालक्ष्मी के चरणों में हमारी यही प्रार्थना है कि —
          </p>

          <div className="p-4 rounded-2xl bg-[#2B150A]/70 border border-[#E5B25D]/30 text-sm md:text-base leading-relaxed space-y-1 text-[#FFFDF8] font-medium">
            <p>आपके जीवन में सुख हो,</p>
            <p>घर में समृद्धि हो,</p>
            <p>मन में शांति हो</p>
            <p className="text-[#FFE082] font-semibold">और हर कदम पर माँ का आशीर्वाद हो।</p>
          </div>

          <p className="text-sm md:text-base text-[#F8E2B0] leading-relaxed pt-2">
            माँ महालक्ष्मी एवं गौरी माता<br />
            आपके परिवार को सदैव<br />
            <span className="text-[#FFE082] font-semibold">सुख, सौभाग्य और समृद्धि</span> प्रदान करें।
          </p>
        </div>

        <LotusDivider />

        {/* Hosts Presentation */}
        <div className="pt-1 space-y-3">
          <p className="font-devanagari text-base md:text-lg font-bold text-[#FFE082]">
            🙏 सादर आमंत्रण एवं शुभकामनाएँ 🙏
          </p>

          <div className="inline-block px-8 py-3 rounded-2xl bg-[#381B0E]/90 border-2 border-[#E5B25D] shadow-lg">
            <p className="font-devanagari text-lg md:text-xl font-bold text-[#FFFDF8]">
              विनोद टिकले एवं कल्पना टिकले
            </p>
            <p className="font-devanagari text-xs text-[#E5B25D] font-medium mt-0.5">
              सप्रेम निमंत्रण
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
                <span className="text-green-300">लिंक कॉपी हो गया!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-[#FFE082]" />
                <span>आमंत्रण साझा करें</span>
              </>
            )}
          </button>

          <button
            onClick={onRestart}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs md:text-sm font-devanagari font-medium text-[#E5B25D] bg-[#2B150A] hover:bg-[#381B0E] border border-[#E5B25D]/30 transition-all active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>पुनः द्वार देखें ↺</span>
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
