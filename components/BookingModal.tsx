import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

interface BookingModalProps {
  selectedService: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ selectedService, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    passengers: '1',
    serviceType: selectedService || 'Safari Tour',
    details: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (formData.name.trim().length < 2) {
      newErrors.name = 'Please enter a valid name (min. 2 characters)';
    }
    
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (!formData.date) {
      newErrors.date = 'Please select a date';
    } else if (selectedDate < today) {
      newErrors.date = 'Date cannot be in the past';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Generate a unique booking reference
    const bookingRef = `GMA-${Date.now().toString().slice(-6)}`;
    
    const message = `*GOODMORNING AFRICA BOOKING*%0A` +
      `----------------------------%0A` +
      `*Booking Ref:* ${bookingRef}%0A` +
      `*Service Type:* ${formData.serviceType}%0A` +
      `*Customer Name:* ${formData.name}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Passengers:* ${formData.passengers}%0A` +
      `*Additional Details:* ${formData.details || 'None provided'}%0A` +
      `----------------------------%0A` +
      `Hello! I'm interested in booking with Goodmorning Africa. Please assist.`;

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-all"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden animate-scale-in max-h-[90vh] overflow-y-auto">
        <div className="bg-amber-500 p-8 text-white relative sticky top-0 z-10">
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform duration-300"
          >
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
          <h2 className="text-2xl font-black mb-1">Secure Your Adventure</h2>
          <p className="text-amber-50 font-bold text-xs uppercase tracking-widest opacity-90">Goodmorning Africa Safaris</p>
        </div>

        <form onSubmit={handleWhatsAppRedirect} className="p-8 space-y-5">
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className={`w-full px-5 py-3 rounded-xl border-2 transition-all outline-none font-bold text-slate-900 ${
                errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-100 focus:border-amber-500'
              }`}
            />
            {errors.name && <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">{errors.name}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Service Type</label>
              <select
                name="serviceType"
                required
                value={formData.serviceType}
                onChange={handleInputChange}
                className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 focus:border-amber-500 transition-all outline-none font-bold text-slate-900 bg-white"
              >
                <option value="Safari Tour">Safari Tour</option>
                <option value="Airport Transfer">Airport Transfer</option>
                <option value="Car Hire">Car Hire</option>
                <option value="Event Transport">Event Transport</option>
                <option value="Hotel Booking">Hotel Booking</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Passengers</label>
              <input
                type="number"
                name="passengers"
                min="1"
                max="50"
                required
                value={formData.passengers}
                onChange={handleInputChange}
                className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 focus:border-amber-500 transition-all outline-none font-bold text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Preferred Date</label>
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleInputChange}
              className={`w-full px-5 py-3 rounded-xl border-2 transition-all outline-none font-bold text-slate-900 ${
                errors.date ? 'border-red-500 focus:border-red-500' : 'border-slate-100 focus:border-amber-500'
              }`}
            />
            {errors.date && <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">{errors.date}</p>}
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Additional Details</label>
            <textarea
              name="details"
              rows={2}
              value={formData.details}
              onChange={handleInputChange}
              placeholder="e.g. Flight number, pickup location..."
              className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 focus:border-amber-500 transition-all outline-none resize-none font-bold text-slate-900"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-xl shadow-xl flex items-center justify-center gap-4 transition-all active:scale-95 border-b-4 border-green-800"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            Confirm via WhatsApp
          </button>
          
          <p className="text-center text-[10px] text-slate-400 font-black uppercase tracking-widest">
            Instant Redirect to WhatsApp Support
          </p>
        </form>
      </div>
    </div>
  );
};