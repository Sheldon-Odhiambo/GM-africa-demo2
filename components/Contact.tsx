
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Car Hire',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppContact = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Goodmorning Africa! 👋%0A%0AMessage from Website Contact Form:%0A👤 Name: ${formData.name}%0A📞 Phone: ${formData.phone}%0A🛠️ Service: ${formData.service}%0A💬 Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="reveal">
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-secondary mb-8">Get In Touch</h3>
            <p className="text-secondary/60 mb-12 leading-relaxed">
              Have questions about our fleet or ready to book your next safari? Our team is available 24/7 to assist you via WhatsApp for immediate response.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-primary text-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <i className="fa-solid fa-phone group-hover:animate-bounce"></i>
                </div>
                <div>
                  <span className="block text-secondary/50 text-xs uppercase tracking-widest mb-1">Call Us</span>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-bold text-secondary hover:text-primary transition-colors">{CONTACT_INFO.phone}</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-primary text-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <i className="fa-solid fa-location-dot group-hover:animate-pulse"></i>
                </div>
                <div>
                  <span className="block text-secondary/50 text-xs uppercase tracking-widest mb-1">Our Office</span>
                  <p className="text-xl font-bold text-secondary">{CONTACT_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-primary text-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <i className="fa-brands fa-tiktok group-hover:rotate-12 transition-transform"></i>
                </div>
                <div>
                  <span className="block text-secondary/50 text-xs uppercase tracking-widest mb-1">Follow Us</span>
                  <a href={CONTACT_INFO.tiktok} className="text-xl font-bold text-secondary hover:text-primary transition-colors">@goodmorningafrica</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 reveal" style={{ transitionDelay: '200ms' }}>
            <form className="space-y-6" onSubmit={handleWhatsAppContact}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2">Full Name</label>
                  <input 
                    required name="name" type="text" placeholder="John Doe" 
                    value={formData.name} onChange={handleChange}
                    className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2">Phone Number</label>
                  <input 
                    required name="phone" type="tel" placeholder="+254..." 
                    value={formData.phone} onChange={handleChange}
                    className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2">Service Type</label>
                <select 
                  name="service" value={formData.service} onChange={handleChange}
                  className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all appearance-none"
                >
                  <option>Car Hire</option>
                  <option>Airport Pickup</option>
                  <option>Safari Tour</option>
                  <option>Event Transport</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  required name="message" rows={4} placeholder="How can we help you?" 
                  value={formData.message} onChange={handleChange}
                  className="w-full bg-slate-50 border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#25D366] text-white font-bold uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-[#128C7E] transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
              >
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
