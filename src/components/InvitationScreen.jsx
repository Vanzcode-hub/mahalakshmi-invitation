import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Map, CalendarPlus, ChevronLeft, Heart, Sparkles } from 'lucide-react';
import { LotusDivider } from './BackgroundElements';
import confetti from 'canvas-confetti';

export default function InvitationScreen({ onConfirmRSVP, onPrev }) {
  const [isAccepted, setIsAccepted] = useState(false);

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

  const handleRSVP = () => {
    if (isAccepted) return;
    setIsAccepted(true);

    confetti({
      particleCount: 55,
      spread: 75,
      origin: { y: 0.65 },
      colors: ['#FFE082', '#F5C862', '#D49B28', '#FFFDF9'],
    });

    // Automatically transition to Blessing & Hosts screen
    setTimeout(() => {
      if (onConfirmRSVP) onConfirmRSVP();
    }, 1300);
  };

  return (
    <div className="w-full min-h-[100dvh] py-6 px-4 flex flex-col items-center justify-between z-20 max-w-xl mx-auto select-none">
      {/* Top Header */}
      <div className="w-full text-center space-y-1.5 pt-2">
        <h2 className="font-devanagari text-2xl md:text-3xl font-bold gold-text-radiant drop-shadow-md">
          🌸 श्री महालक्ष्मी गौरी पूजन 🌸
        </h2>
        <p className="font-devanagari text-xs md:text-sm text-[#F5C862] font-semibold">
          एवं स्नेहिल प्रसाद भोज आमंत्रण
        </p>
      </div>

      {/* Main Grand Royal Patrika Card */}
      <div className="w-full my-auto royal-glass-card rounded-3xl p-5 md:p-7 space-y-5 border-2 border-[#F5C862]/60 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
        {/* Date, Time & Venue Highlight Grid - Grand Sizing */}
        <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-2xl bg-[#2E1408]/85 border border-[#F5C862]/50 font-devanagari text-center shadow-inner">
          {/* Date */}
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#140802]/70 border border-[#F5C862]/30">
            <Calendar className="w-5 h-5 text-[#FFF2A8] mb-1" />
            <span className="text-[11px] text-[#F5C862] font-medium">शुभ दिनांक</span>
            <span className="text-sm md:text-base font-bold text-[#FFFDF8] leading-tight mt-0.5">
              18 सितंबर 2026
            </span>
          </div>

          {/* Time */}
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#140802]/70 border border-[#F5C862]/30">
            <Clock className="w-5 h-5 text-[#FFF2A8] mb-1" />
            <span className="text-[11px] text-[#F5C862] font-medium">शुभ समय</span>
            <span className="text-sm md:text-base font-bold text-[#FFFDF8] leading-tight mt-0.5">
              सायं 7:00 बजे
            </span>
          </div>

          {/* Venue */}
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#140802]/70 border border-[#F5C862]/30">
            <MapPin className="w-5 h-5 text-[#FFF2A8] mb-1" />
            <span className="text-[11px] text-[#F5C862] font-medium">स्थान</span>
            <span className="text-sm md:text-base font-bold text-[#FFFDF8] leading-tight mt-0.5">
              स्नेहिल निवास
            </span>
          </div>
        </div>

        {/* Address Line & Quick Actions */}
        <div className="text-center font-devanagari space-y-2.5">
          <p className="text-sm md:text-base text-[#FFF4B8]">
            📍 <span className="font-bold text-[#FFFDF8]">सिंघानिया नगर, अरनी रोड, यवतमाल</span>
          </p>

          <div className="flex justify-center items-center gap-2.5 pt-0.5">
            <button
              onClick={handleDirections}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-devanagari font-semibold text-[#FFF2A8] bg-[#381B0E] hover:bg-[#502410] border border-[#F5C862]/50 shadow-sm transition-colors"
            >
              <Map className="w-3.5 h-3.5 text-[#F5C862]" />
              <span>गूगल मैप्स पर देखें</span>
            </button>
            <button
              onClick={handleAddToCalendar}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-devanagari font-semibold text-[#FFF2A8] bg-[#381B0E] hover:bg-[#502410] border border-[#F5C862]/50 shadow-sm transition-colors"
            >
              <CalendarPlus className="w-3.5 h-3.5 text-[#F5C862]" />
              <span>कैलेंडर में जोड़ें</span>
            </button>
          </div>
        </div>

        <LotusDivider />

        {/* Invitation Text */}
        <div className="space-y-3 text-center font-devanagari text-[#FFFDF8] px-2">
          <p className="text-sm md:text-base leading-relaxed">
            माँ महालक्ष्मी एवं गौरी माता के<br />
            पावन पूजन एवं प्रसाद भोज के शुभ अवसर पर<br />
            आपकी स्नेहमयी उपस्थिति हमारे लिए<br />
            <span className="text-[#FFF2A8] font-bold">अत्यंत हर्ष एवं सौभाग्य का विषय होगी।</span>
          </p>

          <p className="text-xs md:text-sm text-[#F5C862] leading-relaxed">
            अतः आपसे सादर निवेदन है कि<br />
            इस शुभ अवसर पर पधारकर<br />
            माँ महालक्ष्मी का आशीर्वाद प्राप्त करें<br />
            एवं हमारे प्रसाद भोज को अपनी उपस्थिति से<br />
            सुस्वादु एवं मंगलमय बनाएँ।
          </p>

          {/* Highlighted Quote Box - Large & Prominent */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#381B0E]/95 via-[#5A240E]/95 to-[#381B0E]/95 border-2 border-[#F5C862]/80 shadow-[0_0_20px_rgba(245,200,98,0.25)] my-3">
            <p className="font-devanagari text-base md:text-lg text-[#FFF2A8] font-bold tracking-wide leading-snug">
              "आपका आगमन ही हमारे लिए<br />
              सबसे सुंदर उपहार है।"
            </p>
          </div>
        </div>

        {/* Integrated RSVP Section directly on this invitation card */}
        <div className="pt-2 text-center space-y-3 border-t border-[#F5C862]/30">
          <p className="font-devanagari text-sm md:text-base font-bold text-[#FFFDF8]">
            क्या आप हमारे इस शुभ अवसर पर पधारेंगे?
          </p>

          <button
            onClick={handleRSVP}
            disabled={isAccepted}
            className={`w-full py-4 px-6 rounded-full font-devanagari font-bold text-base md:text-lg tracking-wide transition-all duration-500 shadow-[0_10px_25px_rgba(0,0,0,0.8)] ${
              isAccepted
                ? 'bg-gradient-to-r from-[#1B4D20] to-[#2E6B34] text-[#FFFDF8] border border-[#66BB6A] scale-95'
                : 'bg-gradient-to-r from-[#80131E] via-[#A81C2A] to-[#80131E] text-[#FFFDF8] border-2 border-[#F5C862] hover:shadow-[0_0_30px_rgba(245,200,98,0.7)] hover:scale-[1.02] active:scale-95'
            }`}
          >
            {isAccepted ? (
              <span className="flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-[#FFF2A8] fill-current animate-pulse" />
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
      </div>

      {/* Bottom Prev Button */}
      <div className="w-full max-w-sm flex items-center justify-start z-20 pb-3 pt-2">
        <button
          onClick={onPrev}
          className="py-2 px-4 rounded-full text-xs font-devanagari font-medium text-[#F5C862] bg-[#2E1408]/85 hover:bg-[#381B0E] border border-[#F5C862]/40 transition-all flex items-center gap-1 shadow-sm"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>दर्शन पर लौटें</span>
        </button>
      </div>
    </div>
  );
}
