
import React, { useState, useEffect } from 'react';
import { HERO_BACKGROUNDS } from '../constants';

interface HeroProps {
  onBookNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % HERO_BACKGROUNDS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Dynamic Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {HERO_BACKGROUNDS.map((bg, index) => (
          <img
            key={bg}
            src={bg}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ${
              index === currentBg ? 'opacity-100' : 'opacity-0'
            } scale-105 animate-[pulse_15s_infinite_alternate]`}
            alt="Majestic African Landscape"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <span className="inline-block bg-amber-500 text-white px-5 py-1.5 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-6 shadow-xl shadow-amber-500/30">
              Welcome to the wild
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[0.9] drop-shadow-2xl">
              GOODMORNING<br/>
              <span className="text-amber-500">AFRICA</span>
            </h1>
          </div>
          
          <p className="text-xl text-slate-100 mb-8 max-w-2xl font-medium leading-relaxed animate-fade-up stagger-1 drop-shadow-lg">
            Where every sunrise brings a new adventure. Experience elite car hire and breathtaking safaris across Kenya's iconic savanna with the travel masters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-2">
            <button
              onClick={onBookNow}
              className="bg-amber-500 text-white px-10 py-5 rounded-2xl text-lg font-black hover:bg-amber-600 hover:scale-105 active:scale-95 transition-all transform hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-3 group border-b-4 border-amber-700 hover:border-amber-800"
            >
              <i className="fa-solid fa-calendar-check group-hover:rotate-12 transition-transform"></i>
              Book Your Adventure
            </button>
            <a
              href="#services"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl text-lg font-black hover:bg-white/20 hover:scale-105 transition-all text-center flex items-center justify-center"
            >
              View Packages
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6 animate-fade-up stagger-3">
            <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+35}`} className="w-12 h-12 rounded-full border-2 border-amber-500 shadow-xl" alt="Customer" />
                ))}
            </div>
            <p className="text-slate-100 text-sm font-bold tracking-tight">
                Trusted by <span className="text-amber-500">5,000+</span> elite explorers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
