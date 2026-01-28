import React from 'react';
import { CONTACT_INFO } from '../constants';

export const WhatsAppButton: React.FC = () => {
  return (
    <>
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-all group animate-whatsapp border-4 border-white"
        title="Book Now via WhatsApp"
      >
        <i className="fa-brands fa-whatsapp text-4xl group-hover:scale-110 transition-transform"></i>
        
        {/* Visual cue to match navbar Book Now */}
        <div className="absolute right-full mr-5 bg-stone-900 text-white text-[10px] font-black py-2.5 px-6 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none shadow-2xl uppercase tracking-[0.2em] flex items-center gap-3 border border-white/10">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          Book Adventure Now
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-stone-900 rotate-45 border-t border-r border-white/10"></div>
        </div>
      </a>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-whatsapp { 
          animation: whatsappPulse 2s infinite, bounce-slow 4s ease-in-out infinite; 
        }
      `}</style>
    </>
  );
};