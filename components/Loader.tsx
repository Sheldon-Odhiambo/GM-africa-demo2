
import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="loader-container animate-loader-bg">
      <div className="relative animate-[scale_2s_ease-in-out_infinite]">
        {/* Outer ring */}
        <div className="w-24 h-24 rounded-full border-4 border-amber-500/10 border-t-amber-500 animate-spin"></div>
        {/* Inner logo placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/50">
                <i className="fa-solid fa-sun text-white animate-pulse"></i>
            </div>
        </div>
      </div>
      <div className="mt-8 text-center animate-fade-up">
        <h2 className="text-white text-2xl font-black tracking-[0.3em] mb-2 drop-shadow-lg">GOODMORNING AFRICA</h2>
        <p className="text-amber-500 font-bold text-xs uppercase tracking-widest opacity-80 mb-4">Elite Safari Experiences</p>
        <div className="h-1 w-24 bg-white/10 mx-auto rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 w-full animate-[loaderSlide_1.5s_infinite]"></div>
        </div>
      </div>
      <style>{`
        @keyframes loaderSlide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
};
