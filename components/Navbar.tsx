import React, { useState } from 'react';
import { NAV_ITEMS, Logo } from '../constants';

interface NavbarProps {
  scrolled: boolean;
  onBookNow: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, onBookNow }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700
        bg-white/80 backdrop-blur-md ${scrolled ? 'py-3 shadow-lg' : 'py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 bg-secondary text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
        </button>

        {/* Brand Identity - Centered on Mobile */}
        <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          <a
            href="#home"
            className="flex-shrink-0 block ml-6 lg:ml-10"
          >
            {/* Logo wrapper controls navbar height */}
            <div className="h-12 flex items-center">
              <img
                src="/images/logo-removebg-preview.png"
                alt="Company Logo"
                className="h-16 w-auto object-contain scale-[1.4] lg:scale-[1.8] origin-left"
              />
            </div>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-xs font-bold tracking-[0.2em] uppercase transition-all hover:text-primary relative group text-secondary"
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

        {/* Mobile Right Icon */}
        <div className="lg:hidden w-12 h-12 flex items-center justify-center">
          <button onClick={onBookNow} className="text-xl text-secondary transition-colors">
            <i className="fa-solid fa-calendar-check"></i>
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] bg-secondary/95 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.85, 0, 0.15, 1)] 
        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-12 px-6 relative">
          
          <button
            className="absolute top-6 left-6 w-12 h-12 bg-white/5 rounded-2xl text-white text-2xl"
            onClick={() => setIsOpen(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* Mobile Logo */}
          <Logo className="mb-4 scale-125" />

          <div className="flex flex-col items-center gap-4 w-full">
            {NAV_ITEMS.map((item, idx) => (
              <a 
                key={item.href} 
                href={item.href}
                className={`text-white text-3xl font-serif font-bold tracking-tight hover:text-primary transition-all duration-300 transform 
                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
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
