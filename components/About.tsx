import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800" 
                alt="Elephant Safari" 
                className="w-full h-80 object-cover rounded-3xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=800" 
                alt="Lion" 
                className="w-full h-80 object-cover rounded-3xl translate-y-8"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-amber-500 text-white p-10 rounded-full shadow-2xl hidden md:block animate-float">
               <div className="text-center">
                  <span className="text-4xl font-black block">10+</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Years Exp</span>
               </div>
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">— About Us —</h2>
            <h3 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 leading-tight">Professional & Trusted Drivers at Your Service</h3>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Goodmorning Africa is Nakuru's leading travel partner. We pride ourselves on delivering "The Best in Travel Service" through our dedicated team of professional drivers and tour guides who know the terrain inside out.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Friendly Rates for every budget', 'Professional & Trusted Drivers', 'Customized Safari Packages', '24/7 Customer Support'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-stone-800 font-semibold group">
                  <div className="bg-amber-100 text-amber-600 p-1 rounded-full group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-stone-900 hover:bg-stone-800 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl active:scale-95">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};