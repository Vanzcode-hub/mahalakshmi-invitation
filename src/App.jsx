import React, { useState, useEffect } from 'react';
import TirupatiGate from './components/TirupatiGate';
import DarshanScreen from './components/DarshanScreen';
import InvitationScreen from './components/InvitationScreen';
import BlessingScreen from './components/BlessingScreen';
import AudioController from './components/AudioController';

const STEPS = {
  GATE: 'gate',
  DARSHAN: 'darshan',
  INVITATION: 'invitation',
  BLESSING: 'blessing',
};

export default function App() {
  const [currentStep, setCurrentStep] = useState(STEPS.GATE);
  const [isAudioActive, setIsAudioActive] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const handleGateOpen = () => {
    setIsAudioActive(true);
    setCurrentStep(STEPS.DARSHAN);
  };

  const navItems = [
    { key: STEPS.DARSHAN, label: 'दर्शन' },
    { key: STEPS.INVITATION, label: 'निमंत्रण' },
    { key: STEPS.BLESSING, label: 'आशीर्वाद' },
  ];

  return (
    <main className="relative min-h-[100dvh] w-full royal-gold-bg text-[#FFFDF8] flex flex-col items-center justify-between overflow-x-hidden selection:bg-[#F5C862] selection:text-[#140802]">
      {/* Floating Background Music Controller */}
      <AudioController
        isAudioActive={isAudioActive}
        onToggle={(state) => setIsAudioActive(state)}
      />

      {/* Top Breadcrumb Navigation (Visible after opening gate) */}
      {currentStep !== STEPS.GATE && (
        <nav className="fixed top-3 left-3 z-40" aria-label="निमंत्रण टप्पे">
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#140802]/90 backdrop-blur-md border border-[#F5C862]/50 shadow-lg">
            {navItems.map((item) => {
              const isActive = currentStep === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => setCurrentStep(item.key)}
                  className={`text-xs font-devanagari px-3 py-1 rounded-full transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#80131E] to-[#A81C2A] text-[#FFF2A8] font-bold shadow border border-[#F5C862]/60'
                      : 'text-[#F5C862]/80 hover:text-[#FFF2A8]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>
      )}

      {/* Step-by-Step Screen Views */}
      <div className="w-full flex-1 flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
        {currentStep === STEPS.GATE && (
          <TirupatiGate onOpenGate={handleGateOpen} />
        )}

        {currentStep === STEPS.DARSHAN && (
          <DarshanScreen onNext={() => setCurrentStep(STEPS.INVITATION)} />
        )}

        {currentStep === STEPS.INVITATION && (
          <InvitationScreen
            onConfirmRSVP={() => setCurrentStep(STEPS.BLESSING)}
            onPrev={() => setCurrentStep(STEPS.DARSHAN)}
          />
        )}

        {currentStep === STEPS.BLESSING && (
          <BlessingScreen onRestart={() => setCurrentStep(STEPS.GATE)} />
        )}
      </div>
    </main>
  );
}
