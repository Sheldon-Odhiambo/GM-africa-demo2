
import React from 'react';
import { FLEET } from '../constants';

export const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Premium Fleet</h2>
            <div className="w-20 h-1.5 bg-amber-500"></div>
          </div>
          <p className="text-slate-600 max-w-md">
            Meticulously maintained vehicles ensuring your comfort and safety on every journey across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLEET.map((car) => (
            <div key={car.id} className="group relative overflow-hidden rounded-2xl bg-slate-900 aspect-[4/5] shadow-lg">
              {/* Primary Image */}
              <img
                src={car.image}
                alt={car.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0 opacity-80"
              />
              {/* Hover Image */}
              <img
                src={car.hoverImage}
                alt={car.name}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 scale-110 group-hover:scale-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white z-10 w-full transform transition-transform group-hover:-translate-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2 block">
                  {car.type}
                </span>
                <h3 className="text-2xl font-bold mb-1">{car.name}</h3>
                <p className="text-slate-300 text-sm flex items-center gap-2">
                  <i className="fa-solid fa-user-group text-amber-500"></i> {car.capacity}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
