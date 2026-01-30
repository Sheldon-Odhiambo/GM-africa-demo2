
import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, SERVICES, FLEET } from '../constants';

interface BookingModalProps {
  selectedService: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ selectedService, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    passengers: '',
    requirements: ''
  });

  const serviceDetail = SERVICES.find(s => s.title === selectedService) || 
                  FLEET.find(f => `Vehicle Hire: ${f.name}` === selectedService);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Goodmorning Africa! 👋%0A%0AI would like to make a booking for:%0A*${selectedService || 'General Inquiry'}*%0A%0A*Booking Details:*%0A👤 Name: ${formData.name}%0A📞 Phone: ${formData.phone}%0A📅 Date: ${formData.date}%0A👥 Passengers: ${formData.passengers}%0A📝 Requirements: ${formData.requirements || 'None'}%0A%0APlease let me know the availability. Thanks!`;
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-secondary/95 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-scale-in flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Detail Image/Info Side */}
        <div className="md:w-5/12 relative bg-secondary overflow-hidden min-h-[250px] md:min-h-full">
          {serviceDetail ? (
            <>
              <img 
                src={serviceDetail.image} 
                alt={selectedService} 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <span className="inline-block bg-primary text-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                  Authentic Experience
                </span>
                <h4 className="text-3xl font-serif mb-3 leading-tight uppercase">{selectedService}</h4>
                <p className="text-white/70 text-sm leading-relaxed font-light italic">
                  {('description' in serviceDetail ? serviceDetail.description : '') || 'Premium transport solutions tailored to your journey across the beautiful African landscape.'}
                </p>
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-secondary">
               <i className="fa-solid fa-sun-bright text-primary text-6xl mb-6 opacity-40 animate-pulse"></i>
               <h4 className="text-2xl font-serif text-white mb-4">Africa Awaits</h4>
               <p className="text-white/50 text-sm">Tell us your destination and we will take you there in style.</p>
            </div>
          )}
        </div>

        {/* Booking Form Side */}
        <div className="md:w-7/12 p-8 md:p-12 overflow-y-auto">
          <button className="absolute top-6 right-6 text-secondary/30 hover:text-secondary transition-colors" onClick={onClose}>
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-secondary mb-1">Secure Your Trip</h3>
            <p className="text-primary uppercase tracking-widest text-[10px] font-black">Direct WhatsApp Booking</p>
          </div>

          <form className="space-y-4" onSubmit={handleWhatsAppSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-secondary/60 uppercase tracking-widest mb-2 ml-1">Your Name</label>
                <input 
                  required name="name" type="text" placeholder="Full Name" 
                  value={formData.name} onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-secondary/60 uppercase tracking-widest mb-2 ml-1">Phone</label>
                <input 
                  required name="phone" type="tel" placeholder="Mobile Number" 
                  value={formData.phone} onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" 
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-secondary/60 uppercase tracking-widest mb-2 ml-1">Travel Date</label>
                <input 
                  required name="date" type="date" 
                  value={formData.date} onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-secondary/60 uppercase tracking-widest mb-2 ml-1">Pax</label>
                <input 
                  required name="passengers" type="number" placeholder="Count" 
                  value={formData.passengers} onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" 
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-secondary/60 uppercase tracking-widest mb-2 ml-1">Details</label>
              <textarea 
                name="requirements" placeholder="Safari preferences or special needs..." 
                rows={2} value={formData.requirements} onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-secondary text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-primary transition-all duration-300 flex items-center justify-center gap-3 mt-6 shadow-xl shadow-secondary/10">
              <i className="fa-brands fa-whatsapp text-2xl text-[#25D366]"></i>
              Confirm & Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
