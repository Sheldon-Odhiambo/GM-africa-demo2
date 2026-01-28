import React from 'react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  scrolled: boolean;
  onBookNow: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, onBookNow }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-6'
    } animate-slide-down`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className={`flex flex-col transition-colors group ${
          scrolled ? 'text-stone-900' : 'text-white'
        }`}>
          <span className="text-xl md:text-2xl font-black tracking-tighter leading-none group-hover:text-amber-500 transition-colors">
            Goodmorning Africa
          </span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
            Safaris & Car Hire
          </span>
        </a>

        <div className="hidden lg:flex space-x-8 items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-black uppercase text-xs tracking-widest transition-all hover:text-amber-500 relative group ${
                scrolled ? 'text-stone-700' : 'text-white'
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button
            onClick={onBookNow}
            className="bg-amber-500 text-white px-8 py-2.5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-amber-600 transition-all shadow-lg hover:shadow-amber-500/30 flex items-center gap-2 transform hover:scale-105 active:scale-95"
          >
            <i className="fa-solid fa-calendar-check text-sm"></i>
            Book Now
          </button>
        </div>

        <div className="lg:hidden">
            <button 
              onClick={onBookNow}
              className={`p-2 px-6 rounded-xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 ${scrolled ? 'text-white bg-amber-500 shadow-lg' : 'text-white bg-amber-500/80 backdrop-blur-md'}`}>
                Book Now
            </button>
        </div>
      </div>
    </nav>
  );
};