
import React, { useState, useEffect } from 'react';
import { HERO_BACKGROUNDS } from '../constants';

interface Props {
  onBookNow: () => void;
}

export const Hero: React.FC<Props> = ({ onBookNow }) => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(prev => (prev + 1) % HERO_BACKGROUNDS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Fixed Background Slider */}
      <div className="fixed inset-0 z-0">
        {HERO_BACKGROUNDS.map((bg, idx) => (
          <div 
            key={bg}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${idx === bgIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
            style={{ 
              backgroundImage: `url(${bg})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              backgroundAttachment: 'fixed',
              transition: 'opacity 2s ease-in-out, transform 8s linear' 
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl pt-24 md:pt-32">
          {/* Badge moved down using mt-12 */}
          <div className="flex items-center gap-3 mt-12 mb-6 animate-float">
            <span className="px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase rounded-full">
              Trusted African Safaris
            </span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-serif font-black text-white leading-tight mb-6">
            Experience the <br />
            <span className="text-primary italic">Soul</span> of Kenya
          </h1>
          
          <p className="text-base md:text-lg text-white/80 max-w-xl mb-10 leading-relaxed font-light">
            From the roaring plains of the Maasai Mara to the vibrant city life of Nakuru, we provide premium transport and tailor-made safaris for the modern explorer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <button 
              onClick={onBookNow}
              className="px-8 py-4 md:px-10 md:py-5 bg-primary text-secondary font-black rounded-full hover:bg-secondary hover:text-primary hover:scale-105 active:scale-95 transition-all shadow-2xl text-sm md:text-base flex items-center justify-center gap-3"
            >
              START YOUR ADVENTURE
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            <a 
              href="#services"
              className="px-8 py-4 md:px-10 md:py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-primary hover:text-secondary transition-all text-sm md:text-base text-center"
            >
              OUR SERVICES
            </a>
          </div>
        </div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-12 right-12 hidden lg:flex gap-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl z-10">
        <div className="text-center">
          <p className="text-2xl font-black text-primary">150+</p>
          <p className="text-[9px] text-white/60 tracking-widest uppercase">Destinations</p>
        </div>
        <div className="w-px h-10 bg-white/10" />
        <div className="text-center">
          <p className="text-2xl font-black text-primary">2.5k</p>
          <p className="text-[9px] text-white/60 tracking-widest uppercase">Happy Travelers</p>
        </div>
        <div className="w-px h-10 bg-white/10" />
        <div className="text-center">
          <p className="text-2xl font-black text-primary">24/7</p>
          <p className="text-[9px] text-white/60 tracking-widest uppercase">Support</p>
        </div>
      </div>
    </section>
  );
};
