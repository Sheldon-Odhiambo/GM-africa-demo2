
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 
        Fixed Background Implementation:
        The 'fixed' position ensures the container is relative to the viewport.
        Removing 'scale' and 'transform' transitions to satisfy the 'should not move' requirement.
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {HERO_BACKGROUNDS.map((bg, index) => (
          <div 
            key={bg}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentBg ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              backgroundImage: `url('${bg}')`,
            }}
          ></div>
        ))}
        {/* Dynamic Multi-directional Gradient for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/40 to-secondary lg:bg-gradient-to-r lg:from-secondary/90 lg:via-secondary/50 lg:to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full pt-32 pb-20">
        <div className="max-w-4xl">
          <div className="overflow-hidden mb-6">
            <span className="inline-block bg-primary/20 text-primary border border-primary/50 px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] animate-slide-up" style={{ animationFillMode: 'forwards' }}>
              Explore Kenya in Style
            </span>
          </div>
          
          <div className="overflow-hidden mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              The Ultimate <br />
              <span className="text-primary italic">Travel</span> Experience.
            </h1>
          </div>

          <div className="overflow-hidden mb-12">
            <p className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed font-light animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Luxury car hire, professional airport transfers, and breathtaking safari tours. We redefine transportation in the heart of Nakuru.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <button 
              onClick={onBookNow}
              className="group bg-primary text-secondary px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-2xl shadow-primary/20 flex items-center justify-center gap-3"
            >
              Start Your Journey
              <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
            </button>
            <a 
              href="#fleet"
              className="px-10 py-5 rounded-2xl border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-center"
            >
              View Our Fleet
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent animate-bounce"></div>
      </div>
    </section>
  );
};
