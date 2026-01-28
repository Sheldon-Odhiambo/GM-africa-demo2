import React from 'react';
import { CONTACT_INFO, NAV_ITEMS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Adventure CTA Block - Updated to remove email and add direct value/action */}
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-[3rem] p-8 md:p-14 mb-20 flex flex-col lg:flex-row items-center justify-between shadow-2xl transform -translate-y-12 border-4 border-white/10">
          <div className="mb-10 lg:mb-0 lg:max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-stone-900/20 px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest mb-4">
              <i className="fa-solid fa-sun-bright animate-pulse"></i> Wake Up To Africa
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-none tracking-tighter">The Savannah is Calling.</h3>
            <p className="text-amber-50 text-lg font-medium opacity-90 max-w-lg mb-8">Ready to witness the great migration? Our travel experts are standing by to curate your perfect itinerary.</p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {[
                { icon: 'fa-shield-check', text: 'Verified Guides' },
                { icon: 'fa-jeep', text: '4x4 Custom Fleet' },
                { icon: 'fa-bolt', text: 'Instant Booking' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
                  <i className={`fa-solid ${item.icon} text-white text-xs`}></i>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-auto">
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-900 text-white px-12 py-6 rounded-[2rem] font-black uppercase text-sm tracking-[0.2em] hover:bg-stone-800 transition-all shadow-2xl active:scale-95 whitespace-nowrap flex items-center justify-center gap-4 group border-b-4 border-stone-700"
            >
              <i className="fa-brands fa-whatsapp text-2xl group-hover:rotate-12 transition-transform"></i>
              Consult an Expert
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <a href="#home" className="flex flex-col mb-8 group">
              <span className="text-2xl font-black tracking-tighter leading-none transition-colors group-hover:text-amber-500">
                Goodmorning Africa
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
                Travel & Safaris
              </span>
            </a>
            <p className="text-stone-400 leading-relaxed mb-8 font-medium">
              We guide you through the heart of the savannah with professional drivers and local expertise. Your adventure starts here.
            </p>
            <div className="flex gap-4">
              {[
                { icon: 'fa-facebook-f', href: '#' },
                { icon: 'fa-instagram', href: '#' },
                { icon: 'fa-tiktok', href: CONTACT_INFO.tiktok }
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:scale-110 transition-all duration-300 group">
                  <i className={`fa-brands ${social.icon} group-hover:rotate-12`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500 mb-8 border-l-4 border-amber-500 pl-4">Navigation</h4>
            <ul className="space-y-4 font-bold text-stone-400 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white flex items-center gap-3 transition-all group">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-amber-500 transition-all"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500 mb-8 border-l-4 border-amber-500 pl-4">Contact Info</h4>
            <ul className="space-y-6 font-bold text-stone-400 text-sm">
              <li className="flex gap-4 items-start">
                <i className="fa-solid fa-location-dot text-amber-500 mt-1"></i>
                <span className="leading-tight">{CONTACT_INFO.location}</span>
              </li>
              <li className="flex items-center gap-4">
                <i className="fa-solid fa-phone text-amber-500"></i>
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-4">
                <i className="fa-solid fa-envelope text-amber-500"></i>
                <span className="lowercase">explore@goodmorningafrica.com</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-[2rem] bg-stone-900/50 border border-white/5 relative overflow-hidden group">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500 mb-6">Service Hours</h4>
            <div className="space-y-4 text-xs font-bold text-stone-400">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Mon - Fri:</span>
                <span className="text-white">8:00 - 18:00</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Saturday:</span>
                <span className="text-white">9:00 - 16:00</span>
              </div>
              <div className="flex items-center gap-2 text-green-500 pt-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Safari Support 24/7
              </div>
            </div>
            <i className="fa-solid fa-compass absolute -bottom-4 -right-4 text-8xl text-white/5 transform group-hover:rotate-45 transition-transform duration-1000"></i>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-stone-500 text-[10px] font-black uppercase tracking-[0.3em] text-center md:text-left gap-6">
          <p>&copy; {new Date().getFullYear()} Goodmorning Africa. Crafted for Explorers.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};