import React from 'react';

export function Diya({ className = "" }) {
  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Flame */}
      <div className="relative mb-[-4px] z-10">
        <div className="diya-flame w-3.5 h-6 bg-gradient-to-t from-[#FF7A00] via-[#FFD200] to-[#FFF9E6] rounded-[50%_50%_35%_35%/60%_60%_40%_40%] shadow-[0_0_12px_#FFA500]" />
        <div className="absolute inset-0 bg-[#FFEA79] rounded-full blur-[2px] opacity-75 diya-flame" />
      </div>
      {/* Brass Lamp Base */}
      <svg className="w-10 h-5 drop-shadow-md" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8C4 8 8 18 20 18C32 18 36 8 36 8C36 8 30 11 20 11C10 11 4 8 4 8Z" fill="url(#brass-grad)" stroke="#936E2B" strokeWidth="0.8"/>
        <path d="M14 18H26V20H14V18Z" fill="#936E2B"/>
        <ellipse cx="20" cy="8" rx="16" ry="3.5" fill="#791724" opacity="0.6"/>
        <ellipse cx="20" cy="8" rx="14" ry="2.5" fill="url(#oil-grad)"/>
        <defs>
          <linearGradient id="brass-grad" x1="4" y1="8" x2="36" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EAD498"/>
            <stop offset="0.5" stopColor="#C5A059"/>
            <stop offset="1" stopColor="#795210"/>
          </linearGradient>
          <linearGradient id="oil-grad" x1="6" y1="8" x2="34" y2="8" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A85820"/>
            <stop offset="0.5" stopColor="#FFBF40"/>
            <stop offset="1" stopColor="#A85820"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function TempleBell({ className = "" }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Chain */}
      <div className="w-0.5 h-16 bg-gradient-to-b from-[#C5A059] to-[#795210]" />
      {/* Bell body */}
      <div className="relative">
        <svg className="w-7 h-8 drop-shadow-md animate-[pulseSubtle_4s_ease-in-out_infinite]" viewBox="0 0 28 32" fill="none">
          <circle cx="14" cy="4" r="3" stroke="#C5A059" strokeWidth="1.5" fill="#FAF4EB"/>
          <path d="M8 8H20C20 8 22 18 25 24H3C6 18 8 8 8 8Z" fill="url(#bell-gold)" stroke="#936E2B" strokeWidth="0.8"/>
          <ellipse cx="14" cy="24" rx="11" ry="3" fill="#795210"/>
          <circle cx="14" cy="27" r="2.5" fill="#C5A059"/>
          <defs>
            <linearGradient id="bell-gold" x1="3" y1="8" x2="25" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FAF4EB"/>
              <stop offset="0.3" stopColor="#E8CA82"/>
              <stop offset="0.7" stopColor="#C5A059"/>
              <stop offset="1" stopColor="#795210"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export function ToranHeader() {
  return (
    <div className="w-full overflow-hidden flex justify-center items-start pointer-events-none select-none py-1">
      <div className="flex items-center space-x-2 md:space-x-4 opacity-85">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Mango Leaf + Marigold Garland */}
            <div className="w-4 h-6 md:w-5 md:h-7 bg-gradient-to-b from-[#3D6B2C] to-[#244617] rounded-[0%_100%_40%_100%/0%_100%_40%_100%] transform rotate-45 shadow-sm" />
            <div className="-mt-1 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-gradient-to-tr from-[#FF6F00] via-[#FFA000] to-[#FFD54F] shadow-sm" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function LotusDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-4 opacity-80">
      <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent via-[#C5A059] to-[#C5A059]" />
      <span className="text-[#791724] text-base md:text-lg">🪷</span>
      <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent via-[#C5A059] to-[#C5A059]" />
    </div>
  );
}
