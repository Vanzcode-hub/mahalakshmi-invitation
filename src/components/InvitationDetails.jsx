import React from 'react';
import { Calendar, Clock, MapPin, Map, CalendarPlus, ChevronRight } from 'lucide-react';
import { LotusDivider, Diya } from './BackgroundElements';
import PhotoGallery from './PhotoGallery';
import { devotionalAudio } from '../utils/audio';

export default function InvitationDetails({ onProceedToRSVP }) {
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

  const handleRSVPClick = () => {
    devotionalAudio.playSacredChime();
    if (onProceedToRSVP) onProceedToRSVP();
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between py-8 px-4 z-20 overflow-y-auto bg-mandala-pattern">
      {/* Top Header Card / Patrika Crown */}
      <div className="w-full max-w-xl text-center space-y-2">
        <div className="inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-[#FAF4EB] border border-[#C5A059]/60 shadow-sm">
          <span className="text-xs text-[#936E2B]">卐</span>
          <h1 className="font-devanagari text-lg md:text-2xl text-[#791724] font-bold tracking-wide">
            🌸 श्री महालक्ष्मी गौरी पूजन 🌸
          </h1>
          <span className="text-xs text-[#936E2B]">卐</span>
        </div>
        <p className="font-devanagari text-xs md:text-sm text-[#936E2B] font-medium">
          एवं स्नेहिल प्रसाद भोज आमंत्रण
        </p>
      </div>

      {/* Main Royal Patrika Invitation Card */}
      <div className="w-full max-w-xl my-5 p-6 md:p-8 rounded-3xl bg-[#FFFDF9]/95 backdrop-blur-md border-2 border-[#C5A059]/70 shadow-[0_20px_50px_rgba(121,23,36,0.15)] relative overflow-hidden">
        {/* Subtle Ornamental Filigree Border Accent */}
        <div className="absolute inset-1.5 rounded-[22px] border border-[#C5A059]/30 pointer-events-none" />

        {/* Date, Time & Venue Highlight Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#FAF4EB] border border-[#C5A059]/40 shadow-inner my-2 font-devanagari text-center">
          {/* Date */}
          <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-white/60 border border-[#C5A059]/20">
            <Calendar className="w-5 h-5 text-[#791724] mb-1" />
            <span className="text-xs text-[#5E4A40]">दिनांक</span>
            <span className="text-sm md:text-base font-bold text-[#791724]">
              18 सितंबर 2026
            </span>
          </div>

          {/* Time */}
          <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-white/60 border border-[#C5A059]/20">
            <Clock className="w-5 h-5 text-[#791724] mb-1" />
            <span className="text-xs text-[#5E4A40]">शुभ समय</span>
            <span className="text-sm md:text-base font-bold text-[#791724]">
              सायं 7:00 बजे
            </span>
          </div>

          {/* Venue */}
          <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-white/60 border border-[#C5A059]/20">
            <MapPin className="w-5 h-5 text-[#791724] mb-1" />
            <span className="text-xs text-[#5E4A40]">स्थान</span>
            <span className="text-sm md:text-base font-bold text-[#791724]">
              हमारा स्नेहिल निवास
            </span>
          </div>
        </div>

        {/* Complete Address Line */}
        <div className="text-center font-devanagari mt-3 mb-2 px-2">
          <p className="text-xs md:text-sm text-[#5E4A40]">
            📍 <span className="font-semibold text-[#2B211D]">सिंघानिया नगर, अरनी रोड, यवतमाल</span>
          </p>
          {/* Action pills for Maps & Calendar */}
          <div className="flex justify-center items-center gap-3 mt-2.5">
            <button
              onClick={handleDirections}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-devanagari font-medium text-[#791724] bg-[#F2E8D8] hover:bg-[#E8CA82]/50 border border-[#C5A059]/50 transition-colors"
            >
              <Map className="w-3.5 h-3.5" />
              <span>गूगल मैप्स पर देखें</span>
            </button>
            <button
              onClick={handleAddToCalendar}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-devanagari font-medium text-[#791724] bg-[#F2E8D8] hover:bg-[#E8CA82]/50 border border-[#C5A059]/50 transition-colors"
            >
              <CalendarPlus className="w-3.5 h-3.5" />
              <span>कैलेंडर में जोड़ें</span>
            </button>
          </div>
        </div>

        <LotusDivider />

        {/* Detailed Sacred Invitation Message */}
        <div className="space-y-4 text-center font-devanagari text-[#2B211D]">
          <p className="text-sm md:text-base leading-relaxed">
            माँ महालक्ष्मी एवं गौरी माता के<br />
            पावन पूजन एवं प्रसाद भोज के शुभ अवसर पर<br />
            आपकी स्नेहमयी उपस्थिति हमारे लिए<br />
            <span className="text-[#791724] font-semibold">अत्यंत हर्ष एवं सौभाग्य का विषय होगी।</span>
          </p>

          <p className="text-xs md:text-sm text-[#5E4A40] leading-relaxed">
            अतः आपसे सादर निवेदन है कि<br />
            इस शुभ अवसर पर पधारकर<br />
            माँ महालक्ष्मी का आशीर्वाद प्राप्त करें<br />
            एवं हमारे प्रसाद भोज को अपनी उपस्थिति से<br />
            सुस्वादु एवं मंगलमय बनाएँ।
          </p>

          {/* Highlighted Quote Box */}
          <div className="p-3.5 md:p-4 rounded-xl bg-gradient-to-r from-[#FFF5E6] via-[#FAF4EB] to-[#FFF5E6] border border-[#E8CA82] shadow-sm my-3">
            <p className="font-devanagari text-base md:text-lg text-[#791724] font-bold tracking-wide">
              "आपका आगमन ही हमारे लिए<br />
              सबसे सुंदर उपहार है।"
            </p>
          </div>
        </div>

        {/* Photo Gallery Component */}
        <PhotoGallery />
      </div>

      {/* Diyas */}
      <div className="w-full max-w-sm flex justify-between px-8 py-2">
        <Diya />
        <Diya />
      </div>

      {/* Proceed to RSVP CTA */}
      <div className="w-full max-w-sm flex flex-col items-center z-20 pb-4 pt-2">
        <button
          onClick={handleRSVPClick}
          className="w-full py-3.5 px-8 rounded-full text-base md:text-lg font-devanagari font-semibold tracking-wide bg-gradient-to-r from-[#791724] via-[#A32832] to-[#791724] text-[#FFFDF9] border border-[#E8CA82] shadow-card-lux hover:shadow-gold-glow hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          <span>🌸 उपस्थिति की पुष्टि करें 🌸</span>
          <ChevronRight className="w-4 h-4 text-[#E8CA82] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
