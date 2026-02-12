
import React from 'react';
import { CONTACT_INFO } from '../constants';

export const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
      target="_blank" 
      className="fixed bottom-8 left-8 z-40 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
      <span className="absolute left-full ml-4 bg-white text-secondary px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
};
