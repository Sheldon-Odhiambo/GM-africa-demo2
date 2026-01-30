
import React from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onBookService: (title: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookService }) => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20 reveal">
          <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">What We Offer</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-secondary mb-6 leading-tight">Our Premium Services</h3>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className="reveal group relative overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-700 hover:-translate-y-4 cursor-pointer bg-secondary"
              style={{ transitionDelay: `${idx * 100}ms` }}
              onClick={() => onBookService(service.title)}
            >
              <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent transition-opacity group-hover:opacity-90"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-16 h-16 bg-primary flex items-center justify-center rounded-2xl mb-6 text-secondary text-2xl shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 hover:animate-bounce">
                  <i className={`fa-solid ${service.icon} group-hover:animate-wiggle`}></i>
                </div>
                <h4 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center text-primary text-xs font-black uppercase tracking-[0.2em]">
                  Explore Details <i className="fa-solid fa-arrow-right ml-3 group-hover:translate-x-3 transition-transform"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
