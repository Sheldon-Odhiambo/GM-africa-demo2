
import React from 'react';
import { CONTACT_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20">
            <h2 className="text-primary font-black tracking-[0.3em] uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl font-serif font-black text-secondary mb-12 italic">Let's Plan Your Journey</h3>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <i className="fa-solid fa-location-dot text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-secondary">Our Office</h4>
                  <p className="text-gray-500">{CONTACT_INFO.location}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <i className="fa-solid fa-phone text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-secondary">Call Us Directly</h4>
                  <p className="text-gray-500">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <i className="fa-solid fa-envelope text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-secondary">Email Inquiries</h4>
                  <p className="text-gray-500">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-gray-200 flex gap-6">
              <a href={CONTACT_INFO.tiktok} target="_blank" className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 min-h-[400px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.034637731998!2d36.059437!3d-0.292926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298d92849e771d%3A0x6d11b51e0892095!2sNakuru%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000" 
              className="absolute inset-0 w-full h-full grayscale border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
