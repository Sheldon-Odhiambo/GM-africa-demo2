
import React from 'react';
import { CONTACT_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative z-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-amber-500 font-black uppercase text-xs tracking-[0.3em] mb-4 block">— Reach Out —</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Let's Plan Your Trip</h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-8 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            From car rentals to guided safaris across Kenya, our team is ready to provide top-tier support. Visit us or send a message today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-slate-50 rounded-[3rem] text-center group hover:bg-white hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-slate-100 animate-fade-up">
            <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-all group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white animate-float">
              <i className="fa-solid fa-phone text-4xl"></i>
            </div>
            <h3 className="text-2xl font-black mb-3 text-slate-900">Direct Call</h3>
            <p className="text-slate-600 font-bold tracking-tight text-xl mb-4">{CONTACT_INFO.phone}</p>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Available 8 AM - 6 PM</p>
          </div>

          <div className="p-10 bg-white rounded-[3rem] text-center border-4 border-amber-500 shadow-2xl scale-105 relative overflow-hidden group hover:bg-amber-50 transition-all duration-500 animate-fade-up stagger-1">
            <div className="absolute top-0 right-0 p-6">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,1)]"></div>
            </div>
            <div className="w-24 h-24 bg-amber-50 text-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-all group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white animate-wiggle">
              <i className="fa-brands fa-whatsapp text-5xl"></i>
            </div>
            <h3 className="text-2xl font-black mb-3 text-slate-900">WhatsApp</h3>
            <p className="text-slate-600 font-medium mb-8">Fastest response for safari bookings and urgent car hires.</p>
            <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-green-600 transition-all inline-block shadow-lg active:scale-95 border-b-4 border-green-700 hover:border-green-800"
            >
                Connect Now
            </a>
          </div>

          <div className="p-10 bg-slate-50 rounded-[3rem] text-center group hover:bg-white hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-slate-100 animate-fade-up stagger-2">
            <div className="w-24 h-24 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-all group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white animate-float">
              <i className="fa-solid fa-location-dot text-4xl"></i>
            </div>
            <h3 className="text-2xl font-black mb-3 text-slate-900">Our Office</h3>
            <p className="text-slate-600 font-medium leading-relaxed px-4">
              {CONTACT_INFO.location}<br/>Nakuru City, Kenya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
