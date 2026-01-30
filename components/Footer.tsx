import React from 'react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/80 pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-1 reveal">
            <a href="#home" className="block mb-8">
              {/* <img
                  src="/images/logo-removebg-preview.png" // your logo path
                  alt="Company Logo"
                  className="h-20 w-auto object-contain ml-6 lg:ml-8"
                /> */}
                <img
                src="/images/logo-removebg-preview.png"
                alt="Company Logo"
                className="h-16 w-auto object-contain scale-[1.4] lg:scale-[1.8] origin-left"
              />
            </a>

            <p className="text-white text-sm leading-relaxed mb-8 max-w-xs drop-shadow-md">
              Providing premium transportation and unforgettable tourism experiences across Kenya. Quality, reliability, and luxury in every mile with Goodmorning Africa.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-secondary hover:-translate-y-1 transition-all" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-secondary hover:-translate-y-1 transition-all" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href={CONTACT_INFO.tiktok} className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-secondary hover:-translate-y-1 transition-all" aria-label="TikTok">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <h4 className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-8 border-l-2 border-primary/40 pl-4">Navigation</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-white text-xs font-bold uppercase tracking-widest hover:text-primary transition-all flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <h4 className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-8 border-l-2 border-primary/40 pl-4">Quick Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-secondary transition-colors">
                  <i className="fa-solid fa-phone text-sm"></i>
                </div>
                <div className="text-white text-sm">
                  <span className="block text-white font-medium mb-1 uppercase text-[10px] tracking-widest opacity-60">Phone Support</span>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-primary transition-colors text-xs font-bold">{CONTACT_INFO.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-secondary transition-colors">
                  <i className="fa-solid fa-envelope text-sm"></i>
                </div>
                <div className="text-white text-sm">
                  <span className="block text-white font-medium mb-1 uppercase text-[10px] tracking-widest opacity-60">Email Inquiries</span>
                  <a href="mailto:info@goodmorningafrica.com" className="hover:text-primary transition-colors text-xs font-bold">info@goodmorningafrica.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Headquarters */}
          <div className="reveal" style={{ transitionDelay: '300ms' }}>
            <h4 className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-8 border-l-2 border-primary/40 pl-4">Headquarters</h4>
            <div className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-secondary transition-colors">
                <i className="fa-solid fa-location-dot text-sm"></i>
              </div>
              <div className="text-white text-xs font-bold tracking-tight">
                <span className="block text-white font-medium mb-1 uppercase text-[10px] tracking-widest opacity-60">Nakuru City</span>
                {CONTACT_INFO.location}
              </div>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl relative group h-24 grayscale hover:grayscale-0 transition-all duration-700">
               <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=400" alt="Nakuru" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125" />
               <div className="absolute inset-0 bg-primary/10 opacity-40"></div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white text-[9px] uppercase tracking-[0.3em] font-bold drop-shadow-md">
            &copy; {new Date().getFullYear()} Goodmorning Africa Tours. Excellence in Motion.
          </p>

          <div className="flex items-center gap-10">
            <a href="#" className="text-white text-[9px] uppercase tracking-widest hover:text-primary transition-colors font-bold">Privacy</a>
            <a href="#" className="text-white text-[9px] uppercase tracking-widest hover:text-primary transition-colors font-bold">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

