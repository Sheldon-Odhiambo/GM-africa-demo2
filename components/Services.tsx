import React from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onBookService: (title: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookService }) => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto"></div>
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg font-medium">
            Whether it's for business, leisure, or special events, we have the perfect transport solution for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:scale-[1.03] hover:-rotate-1 transition-all duration-500 group border border-slate-100 animate-fade-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-56 overflow-hidden relative">
                {/* Primary Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                />
                {/* Hover Image */}
                <img
                  src={service.hoverImage}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100 scale-110 group-hover:scale-100"
                />
                <div className="absolute top-6 right-6 bg-amber-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center z-10 shadow-lg transform rotate-3 group-hover:rotate-12 transition-transform">
                  <i className={`fa-solid ${service.icon} text-xl`}></i>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 mb-8 line-clamp-2 font-medium">
                  {service.description}
                </p>
                <button
                  onClick={() => onBookService(service.title)}
                  className="text-amber-600 font-black uppercase text-sm tracking-widest flex items-center gap-3 hover:gap-5 transition-all group/btn"
                >
                  Book Now 
                  <i className="fa-solid fa-arrow-right transition-transform group-hover/btn:translate-x-1"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};