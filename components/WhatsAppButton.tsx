
import React from 'react';
import { CONTACT_INFO } from '../constants';

export const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[45] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
    >
      <i className="fa-brands fa-whatsapp"></i>
      <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-lg text-secondary text-xs font-bold uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Chat with us
      </div>
    </a>
  );
};
