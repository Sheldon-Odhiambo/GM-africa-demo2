
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative reveal">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800" 
                alt="Luxury Safari" 
                className="rounded-[2rem] shadow-2xl mt-12 hover:scale-105 transition-transform duration-700"
              />
              <img 
                src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=800" 
                alt="Car Interior" 
                className="rounded-[2rem] shadow-2xl hover:-translate-y-4 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-10 right-10 bg-secondary p-8 rounded-3xl shadow-2xl border border-primary/20 hidden md:block group">
              <span className="block text-4xl font-serif text-primary mb-1 group-hover:scale-110 transition-transform">10+</span>
              <span className="text-white/60 text-xs uppercase tracking-widest">Years Experience</span>
            </div>
          </div>

          <div className="lg:w-1/2 reveal" style={{ transitionDelay: '300ms' }}>
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Legacy</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">Goodmorning Africa: <br/><span className="italic text-primary">Elevating Travel</span></h3>
            <p className="text-secondary/70 text-lg leading-relaxed mb-8 font-light">
              Founded with a passion for excellence, Goodmorning Africa Tours & Car Hire has grown from a local fleet to a premier destination for luxury transportation in Kenya. Based in Nakuru City, we pride ourselves on reliability, safety, and a deep knowledge of the Kenyan landscape.
            </p>
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                  <i className="fa-solid fa-map-location-dot transition-transform group-hover:rotate-12"></i>
                </div>
                <div>
                  <h5 className="font-bold text-secondary">Expert Local Guides</h5>
                  <p className="text-secondary/60 text-sm">Professional drivers who know every corner of the Rift Valley.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                  <i className="fa-solid fa-shield-halved transition-transform group-hover:animate-pulse"></i>
                </div>
                <div>
                  <h5 className="font-bold text-secondary">Pristine Fleet</h5>
                  <p className="text-secondary/60 text-sm">Every vehicle undergoes rigorous multi-point safety inspections.</p>
                </div>
              </div>
            </div>
            <button className="text-secondary font-black uppercase tracking-[0.3em] flex items-center gap-4 hover:text-primary transition-all group">
              About Us 
              <div className="w-12 h-0.5 bg-secondary group-hover:bg-primary group-hover:w-20 transition-all"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
