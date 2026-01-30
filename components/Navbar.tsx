
import React, { useState } from 'react';
import { NAV_ITEMS, Logo } from '../constants';

interface NavbarProps {
  scrolled: boolean;
  onBookNow: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, onBookNow }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'glass-effect py-3 shadow-lg translate-y-0' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Mobile-Unique Menu Trigger */}
        <button 
          className={`lg:hidden w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${scrolled ? 'bg-secondary text-primary' : 'bg-white/10 text-white backdrop-blur-md border border-white/20'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
        </button>

        {/* Brand Identity - Centered on Mobile */}
        <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          <a href="#home" className="flex-shrink-0 block transform hover:scale-105 transition-transform">
            <Logo dark={scrolled} className="scale-90 lg:scale-100" />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className={`text-xs font-bold tracking-[0.2em] uppercase transition-all hover:text-primary relative group ${scrolled ? 'text-secondary' : 'text-white'}`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button 
            onClick={onBookNow}
            className="bg-primary text-secondary px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-secondary hover:text-white transition-all duration-500 shadow-xl shadow-primary/20"
          >
            Book Trip
          </button>
        </div>

        {/* Placeholder for symmetry on mobile */}
        <div className="lg:hidden w-12 h-12 flex items-center justify-center">
            <button onClick={onBookNow} className={`text-xl transition-colors ${scrolled ? 'text-secondary' : 'text-white'}`}>
                <i className="fa-solid fa-calendar-check"></i>
            </button>
        </div>
      </div>

      {/* Unique Mobile Fullscreen Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[60] bg-secondary/95 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.85, 0, 0.15, 1)] ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-12 px-6 relative">
          <button className="absolute top-6 left-6 w-12 h-12 bg-white/5 rounded-2xl text-white text-2xl" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          
          <Logo className="mb-4 scale-125" />
          
          <div className="flex flex-col items-center gap-4 w-full">
            {NAV_ITEMS.map((item, idx) => (
              <a 
                key={item.href} 
                href={item.href}
                className={`text-white text-3xl font-serif font-bold tracking-tight hover:text-primary transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${200 + idx * 100}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <button 
            onClick={() => {
              setIsOpen(false);
              onBookNow();
            }}
            className="mt-8 bg-primary text-secondary px-12 py-5 rounded-2xl text-lg font-black uppercase tracking-[0.3em] hover:bg-white transition-all shadow-2xl"
          >
            Quick Booking
          </button>

          <div className="absolute bottom-12 flex gap-8 text-white/40 text-2xl">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-tiktok"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};
