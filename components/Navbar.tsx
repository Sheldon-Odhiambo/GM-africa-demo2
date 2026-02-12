
import React, { useState } from 'react';
import { Logo, NAV_ITEMS } from '../constants';

interface Props {
  scrolled: boolean;
  onBookNow: () => void;
}

export const Navbar: React.FC<Props> = ({ scrolled, onBookNow }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative z-[60]">
        <a href="#home" onClick={() => setMobileMenuOpen(false)}>
          <Logo dark={scrolled} className="scale-90 md:scale-100 origin-left" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map(item => (
            <a 
              key={item.label} 
              href={item.href} 
              className={`text-[11px] font-bold uppercase tracking-widest transition-colors hover:text-primary ${scrolled ? 'text-secondary' : 'text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={onBookNow}
            className="px-6 py-2.5 bg-primary text-secondary font-black rounded-full hover:bg-secondary hover:text-primary active:scale-95 transition-all shadow-lg text-[10px] tracking-widest"
          >
            BOOK NOW
          </button>
        </div>

        {/* Mobile Actions Container */}
        <div className="lg:hidden flex items-center gap-3">
          {/* NEW: Mobile Quick Book Button */}
          <button 
            onClick={onBookNow}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-black text-[9px] uppercase tracking-widest transition-all shadow-lg active:scale-95 ${
              scrolled 
                ? 'bg-primary text-secondary' 
                : 'bg-white/10 backdrop-blur-md border border-white/30 text-white'
            }`}
          >
            <i className="fa-solid fa-calendar-check animate-pulse"></i>
            Book
          </button>

          {/* Mobile Toggle Button */}
          <button 
            className={`flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 ${scrolled ? 'text-secondary' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-secondary transition-all duration-500 z-[70] ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-6 py-4 md:py-6 border-b border-white/10">
          <Logo dark={false} className="scale-90" />
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-primary group"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.3em] group-hover:mr-2 transition-all">Close</span>
            <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-secondary transition-all">
              <i className="fa-solid fa-xmark text-lg"></i>
            </div>
          </button>
        </div>

        {/* Decorative Background for Mobile Menu */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square border-[40px] border-primary rounded-full animate-pulse"></div>
        </div>

        <div className="flex flex-col justify-between h-[calc(100%-80px)] px-8 py-10 relative z-10 overflow-y-auto">
          <div className="space-y-1">
             <p className="text-primary/60 text-[9px] font-black uppercase tracking-[0.4em] mb-4">Explore Africa</p>
             {NAV_ITEMS.map((item, idx) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-serif font-black text-white hover:text-primary transition-all mb-4 hover:translate-x-4 transform duration-300"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 space-y-6">
            <button 
              onClick={() => { onBookNow(); setMobileMenuOpen(false); }}
              className="w-full py-4 bg-primary text-secondary font-black rounded-2xl text-lg shadow-2xl hover:bg-white transition-all transform active:scale-95"
            >
              BOOK NOW
            </button>
            
            <div className="flex justify-center gap-6 pb-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary transition-colors">
                <i className="fa-brands fa-whatsapp text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary transition-colors">
                <i className="fa-brands fa-tiktok text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary transition-colors">
                <i className="fa-solid fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
