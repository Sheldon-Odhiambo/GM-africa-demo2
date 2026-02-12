
import React, { useState } from 'react';
import { FLEET } from '../constants';

interface Props {
  onBookVehicle: (name: string) => void;
}

export const Fleet: React.FC<Props> = ({ onBookVehicle }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-primary font-black tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4">Our Fleet</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-black text-secondary italic">Ride in Comfort & Style</h3>
          </div>
          <p className="text-gray-500 max-w-md text-sm md:text-base">Our vehicles are maintained to the highest standards, ensuring your safety and comfort throughout your journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLEET.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="group bg-gray-50 rounded-[2rem] p-4 transition-all hover:bg-secondary hover:shadow-2xl"
              onMouseEnter={() => setHoveredId(vehicle.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-56 md:h-64 rounded-[1.5rem] overflow-hidden mb-5 shadow-inner">
                <img 
                  src={hoveredId === vehicle.id ? vehicle.hoverImage : vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-bold text-white uppercase tracking-widest">
                  {vehicle.type}
                </div>
              </div>
              
              <div className="px-4 pb-4">
                <h4 className="text-lg md:text-xl font-serif font-bold text-secondary group-hover:text-white mb-1 transition-colors">{vehicle.name}</h4>
                <div className="flex items-center gap-2 text-gray-500 group-hover:text-white/60 text-[11px] md:text-xs mb-5 transition-colors">
                  <i className="fa-solid fa-users text-primary"></i>
                  {vehicle.capacity}
                </div>
                <button 
                  onClick={() => onBookVehicle(vehicle.name)}
                  className="w-full py-3 bg-white border border-gray-200 rounded-xl font-bold text-secondary group-hover:bg-primary group-hover:border-primary group-hover:text-secondary transition-all shadow-sm text-xs"
                >
                  Select Vehicle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
