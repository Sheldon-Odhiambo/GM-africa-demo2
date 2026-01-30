
import React from 'react';
import { FLEET } from '../constants';

interface FleetProps {
  onBookVehicle: (name: string) => void;
}

export const Fleet: React.FC<FleetProps> = ({ onBookVehicle }) => {
  return (
    <section id="fleet" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 reveal">
          <div className="max-w-xl">
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">The Collection</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Experience Unmatched Comfort</h3>
            <p className="text-white/50 text-lg">
              From business trips to wilderness adventures, we have the perfect vehicle for every occasion in our meticulously maintained fleet.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-40 h-[1px] bg-primary/30"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {FLEET.map((item, idx) => (
            <div 
              key={item.id} 
              className="reveal group flex flex-col bg-white/[0.03] rounded-[2.5rem] overflow-hidden hover:bg-white/[0.08] transition-all duration-500 border border-white/5"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110" 
                />
                <div className="absolute top-6 left-6 bg-primary text-secondary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                  {item.type}
                </div>
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-3xl font-serif text-white">{item.name}</h4>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary">
                    <i className="fa-solid fa-car-side"></i>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-white/50 text-sm mb-8">
                  <span className="flex items-center gap-2">
                    <i className="fa-solid fa-user-group text-primary"></i> {item.capacity}
                  </span>
                  <span className="flex items-center gap-2">
                    <i className="fa-solid fa-shield-check text-primary"></i> Fully Insured
                  </span>
                </div>
                
                {/* Revealable Button Section */}
                <div className="relative overflow-hidden pt-2">
                  <button 
                    onClick={() => onBookVehicle(`Vehicle Hire: ${item.name}`)}
                    className="w-full py-5 bg-primary text-secondary font-black uppercase tracking-[0.3em] rounded-2xl transform transition-all duration-500 hover:bg-white hover:scale-[1.02] shadow-2xl flex items-center justify-center gap-4 group/btn"
                  >
                    <span>Book This Vehicle</span>
                    <i className="fa-solid fa-chevron-right text-xs group-hover/btn:translate-x-2 transition-transform"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
