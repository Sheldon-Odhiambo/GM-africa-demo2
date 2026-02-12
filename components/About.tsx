
import React from 'react';
import { Logo } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2" />
      
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        <div className="flex-1 relative">
          {/* Main Image Container */}
          <div className="relative z-10 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-secondary/50 group">
            <img 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200" 
              alt="Majestic Kenyan Safari" 
              className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
            />
            
            {/* Animated Overlays in front of image */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Sunbeam / Flare effect */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[60px] animate-pulse" />
              
              {/* Floating Icons Layer */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 text-primary/30 text-3xl animate-float" style={{ animationDelay: '0s' }}>
                  <i className="fa-solid fa-feather"></i>
                </div>
                <div className="absolute bottom-20 right-10 text-primary/20 text-5xl animate-float" style={{ animationDelay: '1.5s' }}>
                  <i className="fa-solid fa-leaf"></i>
                </div>
                <div className="absolute top-1/2 left-1/4 text-white/10 text-3xl animate-float" style={{ animationDelay: '0.8s' }}>
                  <i className="fa-solid fa-dove"></i>
                </div>
              </div>
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-60" />
          </div>

          {/* Floating Stats Box */}
          <div className="absolute -bottom-8 -left-8 w-40 h-40 md:w-48 md:h-48 bg-primary rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-center justify-center p-6 animate-float shadow-2xl z-20 overflow-hidden">
            {/* Pulsing Sunburst Background within the box */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-secondary/5 animate-spin-slow opacity-20 scale-150">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                  {[...Array(12)].map((_, i) => (
                    <rect key={i} x="48" y="0" width="4" height="100" transform={`rotate(${i * 30} 50 50)`} />
                  ))}
                </svg>
              </div>
            </div>
            
            <div className="text-secondary text-center relative z-10">
              <span className="text-4xl md:text-5xl font-black block leading-none">10+</span>
              <p className="font-sans font-black uppercase tracking-tighter text-[10px] md:text-xs mt-2">
                Years of <br /> Safari Magic
              </p>
            </div>
            <i className="fa-solid fa-sun text-secondary/10 text-7xl md:text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"></i>
          </div>
        </div>

        <div className="flex-1">
          <Logo className="mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
            Connecting You to the <span className="text-primary italic">Heart</span> of Africa
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
            Good Morning Africa Tours & Safaris was born from a passion for the African landscape. Based in Nakuru City, we've grown to become Kenya's most reliable travel partner, offering unparalleled access to the wild.
          </p>
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all duration-500">
                <i className="fa-solid fa-award text-lg md:text-xl"></i>
              </div>
              <h4 className="font-bold text-lg md:text-xl font-serif italic">Certified Guides</h4>
              <p className="text-xs md:text-sm text-white/50">Our experts know the hidden gems of the Savannah and the best vantage points.</p>
            </div>
            <div className="space-y-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all duration-500">
                <i className="fa-solid fa-leaf text-lg md:text-xl"></i>
              </div>
              <h4 className="font-bold text-lg md:text-xl font-serif italic">Eco-Conscious</h4>
              <p className="text-xs md:text-sm text-white/50">We believe in sustainable tourism and protecting the wildlife for future generations.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};
