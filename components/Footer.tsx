
import React, { useState, useEffect } from 'react';
import { Logo, NAV_ITEMS, HERO_BACKGROUNDS, CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const footerBgs = [HERO_BACKGROUNDS[1], HERO_BACKGROUNDS[2]];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(prev => (prev + 1) % footerBgs.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative text-secondary pt-24 md:pt-32 pb-10 overflow-hidden min-h-[600px] flex flex-col justify-end">
      {/* Background Cinematic Layer */}
      <div className="absolute inset-0 z-0">
        {footerBgs.map((bg, idx) => (
          <div 
            key={bg}
            className={`absolute inset-0 transition-opacity duration-[5000ms] ease-in-out ${idx === bgIndex ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}`}
            style={{ 
              backgroundImage: `url(${bg})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
            }}
          />
        ))}
        {/* Dynamic Sunset Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/95 to-secondary/40 backdrop-blur-[1px]" />
      </div>

      {/* Savanna Silhouette Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none opacity-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-secondary">
          <path d="M0,120 L1200,120 L1200,80 Q1100,70 1000,90 T800,85 Q700,75 600,95 T400,90 Q300,80 200,100 T0,85 Z" />
          {/* Subtle Acacia Tree Silhouettes */}
          <path d="M150,100 Q160,70 180,75 T200,70 M175,100 L175,75" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M950,90 Q965,50 990,55 T1020,50 M985,90 L985,55" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          
          {/* Brand Story Column */}
          <div className="lg:col-span-5 space-y-6">
            <Logo className="scale-100 origin-left" dark={true} />
            <div className="space-y-3">
              <h4 className="text-2xl md:text-3xl font-serif font-black italic leading-tight">
                Every sunrise is a new <br />
                <span className="text-white bg-secondary px-2 not-italic">Invitation</span> to explore.
              </h4>
              <p className="text-secondary/80 text-base leading-relaxed max-w-md">
                Rooted in the heart of Nakuru City, we don't just provide tours; we create memories that pulse with the rhythm of the African wild. 
              </p>
            </div>
            
            <div className="flex items-center gap-3 pt-2">
               <div className="w-10 h-10 rounded-full border-2 border-secondary/20 flex items-center justify-center text-secondary">
                 <i className="fa-solid fa-location-dot text-sm"></i>
               </div>
               <div>
                 <p className="text-[8px] font-black uppercase tracking-widest opacity-60">HQ Location</p>
                 <p className="text-xs font-bold">{CONTACT_INFO.location}</p>
               </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="text-[9px] font-black uppercase tracking-[0.4em] text-secondary/40">Discover</h5>
              <ul className="space-y-3">
                {NAV_ITEMS.map(item => (
                  <li key={item.label}>
                    <a href={item.href} className="group relative py-1 text-xs font-bold transition-all hover:text-white">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-[9px] font-black uppercase tracking-[0.4em] text-secondary/40">Legal</h5>
              <ul className="space-y-3">
                {['Privacy', 'Terms', 'Safety', 'Cookies'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-xs font-bold opacity-70 hover:opacity-100 transition-all">{link} Policy</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-6 bg-white/20 backdrop-blur-md p-6 rounded-[2rem] border border-white/30 shadow-2xl">
            <div>
              <h5 className="text-secondary font-black text-lg font-serif italic mb-1">Join the Explorer's Club</h5>
              <p className="text-secondary/70 text-[10px] font-bold leading-relaxed">
                Receive secret safari deals and wildlife updates directly from our Nakuru dispatch center.
              </p>
            </div>

            {isSubscribed ? (
              <div className="bg-secondary text-primary p-4 rounded-xl flex items-center gap-3 animate-in zoom-in duration-500">
                <i className="fa-solid fa-heart text-xl animate-pulse"></i>
                <p className="text-[9px] font-black uppercase tracking-widest">Karibu! You're on the list.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email" 
                  className="w-full bg-white/50 border-2 border-transparent rounded-xl px-5 py-3.5 outline-none focus:bg-white focus:border-secondary transition-all placeholder:text-secondary/40 text-secondary font-bold text-xs"
                />
                <button type="submit" className="w-full py-3.5 bg-secondary text-primary font-black rounded-xl hover:bg-white hover:text-secondary transition-all shadow-xl text-[10px] tracking-widest uppercase">
                  SUBSCRIBE
                </button>
              </form>
            )}
            
            <div className="flex justify-between items-center pt-2 opacity-40">
              <span className="text-[8px] font-black uppercase tracking-widest italic">Since 2014</span>
              <div className="flex gap-4 text-sm">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-whatsapp"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <div className="px-2 py-1 bg-secondary text-primary text-[7px] font-black uppercase tracking-widest rounded-full">
              Nakuru Owned
            </div>
            <p className="text-secondary/50 text-[9px] tracking-widest uppercase font-black">
              &copy; {new Date().getFullYear()} Good Morning Africa Tours & Safaris
            </p>
          </div>
          
          <div className="flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all text-xl">
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-apple-pay"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};
