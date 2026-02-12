
import React, { useState, useEffect } from 'react';
import { Logo } from '../constants';

export const Loader: React.FC = () => {
  const [destIndex, setDestIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const destinations = [
    "Maasai Mara", 
    "Amboseli", 
    "Nakuru City", 
    "Tsavo East", 
    "Samburu",
    "Great Rift Valley"
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setDestIndex(prev => (prev + 1) % destinations.length);
    }, 1200);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        const jump = Math.floor(Math.random() * 5) + 1;
        return Math.min(100, prev + jump);
      });
    }, 100);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-secondary flex flex-col items-center justify-center z-[100] overflow-hidden">
      {/* Cinematic Savanna Grain/Noise Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Elegant Sunrise Gradient - Animated Shift */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_var(--tw-gradient-stops))] from-primary/30 via-secondary to-secondary transition-colors duration-1000"></div>
      
      {/* Dual-Layer Kinetic Sunrays */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Layer 1: Clockwise Fast */}
        <div className="absolute w-[1000px] h-[1000px] animate-spin-slow opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-current">
            {[...Array(36)].map((_, i) => (
              <rect key={i} x="49.8" y="0" width="0.4" height="100" transform={`rotate(${i * 10} 50 50)`} />
            ))}
          </svg>
        </div>
        {/* Layer 2: Counter-Clockwise Slow */}
        <div className="absolute w-[800px] h-[800px] animate-spin-reverse opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-current">
            {[...Array(12)].map((_, i) => (
              <rect key={i} x="49.5" y="0" width="1" height="100" transform={`rotate(${i * 30} 50 50)`} />
            ))}
          </svg>
        </div>
      </div>

      {/* Central Branding Hub */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Glowing Aura behind Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 blur-[100px] rounded-full animate-pulse-slow"></div>
        
        <div className="relative animate-float transition-all duration-1000 scale-125 md:scale-150 mb-16">
          <Logo className="mb-4" />
        </div>
        
        <div className="flex flex-col items-center gap-8 mt-4">
          {/* Progress Section */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-primary font-black tracking-[0.8em] text-[10px] uppercase opacity-40 mb-1">
              Initializing Safari
            </span>
            <div className="text-white font-serif italic text-3xl md:text-4xl font-black transition-all duration-700 transform">
               <span key={destIndex} className="inline-block animate-text-reveal">
                 {destinations[destIndex]}
               </span>
            </div>
          </div>

          {/* Loading Bar & Percentage */}
          <div className="w-48 md:w-64 flex flex-col items-center gap-4">
            <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
               <div 
                 className="absolute top-0 left-0 h-full bg-primary transition-all duration-300 ease-out"
                 style={{ width: `${progress}%` }}
               />
            </div>
            <div className="flex items-center gap-4">
               <div className="w-1 h-1 rounded-full bg-primary/40 animate-ping"></div>
               <span className="text-primary font-black font-sans text-xs tracking-widest">
                 {progress}%
               </span>
               <div className="w-1 h-1 rounded-full bg-primary/40 animate-ping" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 80s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 120s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.03); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes text-reveal {
          0% { opacity: 0; transform: translateY(10px) scale(0.95); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        .animate-text-reveal {
          animation: text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.5); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
