
import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-secondary flex flex-col items-center justify-center">
      <div className="relative">
        {/* Spinner */}
        <div className="w-28 h-28 border-[6px] border-primary/20 border-t-primary rounded-full animate-spin"></div>
        {/* Center Sunrise */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-primary rounded-full blur-[2px] animate-pulse flex items-center justify-center shadow-[0_0_40px_rgba(214,143,91,0.8)]">
             <i className="fa-solid fa-zebra text-secondary text-sm"></i>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <div className="overflow-hidden">
          <h2 className="font-serif text-3xl text-white tracking-[0.3em] uppercase animate-slide-up">GOODMORNING</h2>
        </div>
        <div className="overflow-hidden">
          <h2 className="font-serif text-3xl text-primary tracking-[0.5em] uppercase animate-slide-up font-black" style={{ animationDelay: '0.2s' }}>AFRICA</h2>
        </div>
        <p className="mt-6 text-white/40 text-[10px] tracking-[0.6em] uppercase font-bold animate-pulse">Africa Awaits Your Discovery</p>
      </div>
    </div>
  );
};
