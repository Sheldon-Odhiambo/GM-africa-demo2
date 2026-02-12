
import React, { useState, useEffect, useRef } from 'react';
import { SERVICES } from '../constants';

interface Props {
  onBookService: (title: string) => void;
}

type ServiceId = 'game-drives' | 'group-travel' | 'corporate-travel' | 'car-hire' | 'hotel-booking' | 'executive-rides';

export const Services: React.FC<Props> = ({ onBookService }) => {
  const [activeExperience, setActiveExperience] = useState<ServiceId | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Wildlife Data
  const WILDLIFE = [
    { id: 'lion', name: 'Lion', park: 'Maasai Mara', icon: 'fa-paw', desc: 'King of the Savannah' },
    { id: 'elephant', name: 'Elephant', park: 'Amboseli', icon: 'fa-mountain-sun', desc: 'Majestic Giants of Amboseli' },
    { id: 'rhino', name: 'Rhino', park: 'Ol Pejeta', icon: 'fa-shield-halved', desc: 'Protected Ancient Guardians' },
    { id: 'leopard', name: 'Leopard', park: 'Samburu', icon: 'fa-cat', desc: 'Shadow Hunters of the North' }
  ];

  // Specialty Safari Carousel Data
  const SPECIALTY_SAFARIS = [
    {
      id: 'sunrise',
      title: 'Golden Sunrise Safari',
      desc: 'Witness the Savannah wake up in a spectacular glow.',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'night',
      title: 'Mystical Night Drive',
      desc: 'Discover the nocturnal secrets of the bush.',
      image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'birds',
      title: 'Bird Watcher\'s Paradise',
      desc: 'Explore the vibrant colors of Kenya\'s rare birdlife.',
      image: 'https://images.unsplash.com/photo-1444464666168-49d633b867ad?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'cultural',
      title: 'Cultural Village Tour',
      desc: 'Connect with the rich heritage of the Maasai people.',
      image: 'https://images.unsplash.com/photo-1489440543286-a69330151c0b?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const [selectedAnimal, setSelectedAnimal] = useState<typeof WILDLIFE[0] | null>(null);

  // Group Planner State
  const [groupSize, setGroupSize] = useState(10);
  const getGroupRecommendation = (size: number) => {
    if (size <= 7) return { car: 'Luxury SUV', desc: 'Ideal for small families and VIP privacy.', icon: 'fa-car-side' };
    if (size <= 14) return { car: 'Safari Van / Cruiser', desc: 'Standard safari configuration with pop-up roofs.', icon: 'fa-van-shuttle' };
    if (size <= 28) return { car: 'Coaster Mini-Bus', desc: 'Perfect for mid-sized groups and school trips.', icon: 'fa-bus' };
    return { car: 'Large Executive Coach', desc: 'Heavy-duty group transport for corporate events.', icon: 'fa-bus-simple' };
  };

  // Corporate State
  const [corpSteps, setCorpSteps] = useState({ airport: true, hotel: false, conference: true, dinner: false });

  // Scroll to top of section when an experience opens
  useEffect(() => {
    if (activeExperience && sectionRef.current) {
      const offset = 80;
      const elementPosition = sectionRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  }, [activeExperience]);

  const handleBookingClick = (title: string) => {
    onBookService(title);
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 280;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" ref={sectionRef} className="py-12 md:py-24 bg-gray-50 overflow-hidden min-h-[800px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-primary font-black tracking-[0.3em] uppercase text-[9px] md:text-xs mb-3">Our Excellence</h2>
          <h3 className="text-2xl md:text-4xl font-serif font-black text-secondary mb-3 italic">Interactive Experiences</h3>
          <p className="text-gray-500 leading-relaxed text-xs md:text-sm">Tap a service to customize your travel plans instantly.</p>
        </div>

        {activeExperience ? (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row h-full max-h-[90vh] lg:max-h-[800px] overflow-y-auto lg:overflow-visible">
              {/* Sidebar Header */}
              <div className="lg:w-1/4 bg-secondary p-5 md:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 sticky top-0 lg:relative z-20">
                <div>
                  <button 
                    onClick={() => setActiveExperience(null)}
                    className="text-primary text-[9px] md:text-[10px] font-black uppercase tracking-widest flex items-center gap-2 mb-4 lg:mb-8 transition-all active:scale-95"
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                    Back to All Services
                  </button>
                  <div className="hidden lg:block space-y-2">
                    {SERVICES.map(s => (
                      <button
                        key={s.id}
                        onClick={() => setActiveExperience(s.id as ServiceId)}
                        className={`w-full text-left p-3 rounded-xl transition-all ${activeExperience === s.id ? 'bg-primary text-secondary shadow-lg' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
                      >
                        <p className="font-serif font-bold text-sm">{s.title}</p>
                      </button>
                    ))}
                  </div>
                  {/* Mobile Header Title */}
                  <div className="lg:hidden flex items-center justify-between">
                    <h4 className="text-white text-lg font-serif font-bold italic">
                      {SERVICES.find(s => s.id === activeExperience)?.title}
                    </h4>
                    <i className={`fa-solid ${SERVICES.find(s => s.id === activeExperience)?.icon} text-primary/40 text-xl`}></i>
                  </div>
                </div>
              </div>

              {/* Interaction Content */}
              <div className="lg:w-3/4 p-4 md:p-8 lg:p-12 relative overflow-y-auto lg:max-h-[800px]">
                
                {/* 1. GAME DRIVES */}
                {activeExperience === 'game-drives' && (
                  <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="max-w-md text-left">
                        <h4 className="text-xl md:text-2xl font-serif font-black text-secondary mb-1 italic">Wildlife Safari Explorer</h4>
                        <p className="text-gray-500 text-[9px] md:text-[10px]">Track a specific giant or book a specialty experience.</p>
                      </div>
                      <button 
                        onClick={() => handleBookingClick('General Game Drive Safari')}
                        className="bg-primary text-secondary font-black px-4 py-2.5 md:px-5 md:py-3 rounded-xl text-[9px] md:text-[10px] uppercase tracking-widest shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 border-2 border-primary hover:bg-transparent"
                      >
                        <i className="fa-solid fa-van-shuttle"></i>
                        Book General Safari
                      </button>
                    </div>

                    {/* Specialty Carousel */}
                    <div className="relative group">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-primary">Specialty Experiences</h5>
                        <div className="flex gap-2">
                          <button onClick={() => scrollCarousel('left')} className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-secondary hover:bg-primary transition-colors">
                            <i className="fa-solid fa-chevron-left text-[9px]"></i>
                          </button>
                          <button onClick={() => scrollCarousel('right')} className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-secondary hover:bg-primary transition-colors">
                            <i className="fa-solid fa-chevron-right text-[9px]"></i>
                          </button>
                        </div>
                      </div>
                      
                      <div 
                        ref={carouselRef}
                        className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x no-scrollbar"
                      >
                        {SPECIALTY_SAFARIS.map((safari) => (
                          <div 
                            key={safari.id}
                            onClick={() => handleBookingClick(safari.title)}
                            className="flex-shrink-0 w-[180px] md:w-[220px] snap-start group/card cursor-pointer"
                          >
                            <div className="relative h-32 md:h-44 rounded-xl overflow-hidden mb-2">
                              <img src={safari.image} alt={safari.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                              <div className="absolute bottom-2 left-2 right-2">
                                <span className="bg-primary text-secondary text-[6px] font-black uppercase px-2 py-0.5 rounded-full mb-1 inline-block">Quick Book</span>
                                <h6 className="text-white font-serif font-bold italic text-[10px] md:text-xs">{safari.title}</h6>
                              </div>
                            </div>
                            <p className="text-gray-500 text-[8px] md:text-[9px] px-1 leading-tight line-clamp-2">{safari.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Responsive Grid for Tracker + Result */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                      <div className="space-y-4">
                        <h5 className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-primary">Track Wildlife</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {WILDLIFE.map(animal => (
                            <button 
                              key={animal.id}
                              onClick={() => setSelectedAnimal(animal)}
                              className={`p-3 md:p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${selectedAnimal?.id === animal.id ? 'border-primary bg-primary/5 shadow-md' : 'border-gray-100 bg-white hover:border-primary/30'}`}
                            >
                              <div className={`w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center text-base md:text-xl ${selectedAnimal?.id === animal.id ? 'bg-primary text-secondary' : 'bg-gray-100 text-gray-300'}`}>
                                <i className={`fa-solid ${animal.icon}`}></i>
                              </div>
                              <p className="font-black text-secondary uppercase text-[7px] md:text-[8px] tracking-widest">{animal.name}</p>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div ref={resultRef} className="bg-primary/10 rounded-[1.2rem] p-4 md:p-6 border-2 border-primary/20 shadow-xl relative overflow-hidden h-full flex flex-col justify-center transition-all duration-500">
                        <i className={`fa-solid ${selectedAnimal?.icon || 'fa-binoculars'} absolute -right-6 -bottom-6 text-[8rem] text-primary/5 rotate-12`}></i>
                        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left gap-4">
                          {selectedAnimal ? (
                            <>
                              <div className="space-y-1">
                                <span className="px-2 py-0.5 bg-primary text-secondary text-[7px] font-black uppercase rounded-full inline-block">Recommendation</span>
                                <h5 className="text-lg md:text-2xl font-serif font-black text-secondary italic">{selectedAnimal.park}</h5>
                                <p className="text-secondary/70 text-[8px] md:text-[10px] font-medium max-w-xs mx-auto md:mx-0">
                                  {selectedAnimal.desc}. Immerse yourself in the heart of the wild.
                                </p>
                              </div>
                              <button 
                                onClick={() => handleBookingClick(`Safari: ${selectedAnimal.park} (${selectedAnimal.name})`)}
                                className="w-full md:w-auto px-5 py-3 bg-secondary text-primary font-black rounded-xl shadow-lg uppercase text-[8px] md:text-[9px] tracking-widest active:scale-95 transition-all"
                              >
                                Book {selectedAnimal.name} Safari
                              </button>
                            </>
                          ) : (
                            <div className="space-y-3">
                              <h5 className="text-base md:text-lg font-serif font-black text-secondary italic">Custom Adventure</h5>
                              <p className="text-secondary/70 text-[8px] md:text-[10px] max-w-xs">Not sure where to start? Let our expert guides find the best active migration and predator sightings for you.</p>
                              <button 
                                onClick={() => handleBookingClick('General Game Drive Safari')}
                                className="w-full md:w-auto px-5 py-3 bg-secondary text-primary font-black rounded-xl shadow-lg uppercase text-[8px] md:text-[9px] tracking-widest active:scale-95 transition-all"
                              >
                                Book General Adventure
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. GROUP TRAVEL */}
                {activeExperience === 'group-travel' && (
                  <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500">
                    <div>
                      <h4 className="text-xl md:text-2xl font-serif font-black text-secondary italic mb-1">Group Logistics</h4>
                      <p className="text-gray-500 text-[9px] md:text-[10px]">Adjust passenger count for vehicle recommendations.</p>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-[1rem] p-4 md:p-8 shadow-sm">
                      <div className="flex flex-col items-center gap-4 mb-6">
                        <div className="flex items-center gap-4">
                          <button onClick={() => setGroupSize(Math.max(1, groupSize - 1))} className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-gray-100 flex items-center justify-center text-sm md:text-xl text-secondary hover:bg-primary transition-colors active:scale-90"><i className="fa-solid fa-minus"></i></button>
                          <div className="text-center min-w-[40px] md:min-w-[60px]">
                            <p className="text-2xl md:text-5xl font-serif font-black text-secondary">{groupSize}</p>
                            <p className="text-[6px] md:text-[8px] font-black text-primary uppercase tracking-widest">Passengers</p>
                          </div>
                          <button onClick={() => setGroupSize(groupSize + 1)} className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-gray-100 flex items-center justify-center text-sm md:text-xl text-secondary hover:bg-primary transition-colors active:scale-90"><i className="fa-solid fa-plus"></i></button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                        <div className="bg-primary/5 rounded-xl p-4 border-2 border-primary/10">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-secondary"><i className={`fa-solid ${getGroupRecommendation(groupSize).icon} text-sm`}></i></div>
                            <div>
                              <span className="text-[6px] md:text-[7px] font-black text-primary uppercase tracking-[0.2em]">Recommendation</span>
                              <h5 className="text-sm md:text-lg font-serif font-bold text-secondary italic">{getGroupRecommendation(groupSize).car}</h5>
                            </div>
                          </div>
                          <p className="text-gray-500 text-[8px] md:text-[10px] mb-4 leading-tight">{getGroupRecommendation(groupSize).desc}</p>
                          <button onClick={() => handleBookingClick(`Group Travel: ${groupSize} Pax`)} className="w-full py-3 bg-secondary text-primary font-black rounded-lg text-[8px] md:text-[9px] uppercase tracking-[0.2em] shadow-lg active:scale-95 transition-all">BOOK GROUP TRIP</button>
                        </div>
                        <div className="hidden lg:block relative rounded-xl overflow-hidden aspect-video"><img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Group Bus" /><div className="absolute inset-0 bg-secondary/10"></div></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. CORPORATE HUB */}
                {activeExperience === 'corporate-travel' && (
                  <div className="space-y-5 md:space-y-8 animate-in fade-in duration-500">
                    <h4 className="text-xl md:text-2xl font-serif font-black text-secondary italic">Business Logistics</h4>
                    <div className="flex flex-col lg:flex-row gap-4">
                      <div className="flex-1 space-y-2">
                        {['airport', 'hotel', 'conference', 'dinner'].map(key => (
                          <label key={key} className="flex items-center gap-3 p-2.5 rounded-lg border border-gray-100 bg-white active:scale-[0.98] transition-all cursor-pointer shadow-sm">
                            <input type="checkbox" checked={(corpSteps as any)[key]} onChange={() => setCorpSteps(prev => ({ ...prev, [key]: !(prev as any)[key] }))} className="w-3.5 h-3.5 accent-primary" />
                            <span className="font-bold text-secondary capitalize text-[8px] md:text-[10px]">{key.replace('conference', 'Events Shuttles')}</span>
                          </label>
                        ))}
                      </div>
                      <div className="lg:w-60 bg-secondary rounded-xl p-5 text-white text-center shadow-xl">
                        <h6 className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-primary mb-3">Request Summary</h6>
                        <button onClick={() => handleBookingClick(`Corporate: Custom Request`)} className="w-full py-3 bg-primary text-secondary font-black rounded-lg text-[8px] md:text-[9px] uppercase tracking-widest active:scale-95 transition-all">GET CORPORATE QUOTE</button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. CAR HIRE HUB */}
                {activeExperience === 'car-hire' && (
                  <div className="space-y-5 animate-in fade-in duration-500">
                    <h4 className="text-xl md:text-2xl font-serif font-black text-secondary italic">Premium Car Hire</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[{ name: 'Safari Cruiser', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400' }, { name: 'VIP Sedan', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=400' }].map(car => (
                        <div key={car.name} className="relative rounded-xl overflow-hidden shadow-lg aspect-[16/10] bg-secondary active:scale-95 transition-all cursor-pointer" onClick={() => handleBookingClick(`Rental: ${car.name}`)}>
                          <img src={car.img} className="absolute inset-0 w-full h-full object-cover opacity-60" alt={car.name} />
                          <div className="absolute inset-0 p-4 flex flex-col justify-end">
                            <h5 className="text-xs md:text-sm font-serif font-bold text-white mb-2 italic">{car.name}</h5>
                            <button className="w-full py-2 bg-primary text-secondary font-black rounded-lg text-[7px] md:text-[8px] uppercase tracking-widest">Book Vehicle</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. HOTEL HUB */}
                {activeExperience === 'hotel-booking' && (
                  <div className="space-y-5 animate-in fade-in duration-500">
                    <h4 className="text-xl md:text-2xl font-serif font-black text-secondary italic">Accommodation Match</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {['Lodges', 'Beach', 'Boutique', 'City'].map(vibe => (
                        <button key={vibe} onClick={() => handleBookingClick(`Hotel: ${vibe}`)} className="p-3.5 rounded-xl border border-gray-100 bg-white hover:border-primary transition-all text-center active:scale-95 shadow-sm">
                          <i className={`fa-solid ${vibe === 'Lodges' ? 'fa-tree' : vibe === 'Beach' ? 'fa-umbrella-beach' : 'fa-hotel'} text-sm text-primary/40 mb-1`}></i>
                          <span className="block font-bold text-secondary text-[8px] md:text-[10px]">{vibe}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 6. EXECUTIVE HUB */}
                {activeExperience === 'executive-rides' && (
                  <div className="animate-in fade-in duration-500 h-full flex flex-col justify-center min-h-[220px]">
                    <div className="bg-secondary rounded-xl p-6 md:p-8 text-center text-white shadow-2xl relative overflow-hidden">
                       <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary/10 rounded-full blur-[50px]"></div>
                       <div className="relative z-10 space-y-3">
                         <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-secondary mx-auto mb-1"><i className="fa-solid fa-crown text-sm"></i></div>
                         <h4 className="text-lg md:text-2xl font-serif font-black text-primary italic">Executive VIP Tier</h4>
                         <p className="text-white/60 text-[8px] md:text-[10px] max-w-xs mx-auto">Chauffeur-driven luxury for high-profile transfers and diplomatic missions.</p>
                         <button onClick={() => handleBookingClick(`Executive: VIP Tier`)} className="w-full py-3.5 bg-primary text-secondary font-black rounded-lg shadow-xl text-[8px] md:text-[10px] uppercase tracking-widest active:scale-95 transition-all">BOOK CHAUFFEUR</button>
                       </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="group relative h-[220px] md:h-[350px] rounded-[1.2rem] md:rounded-[2rem] overflow-hidden shadow-lg cursor-pointer bg-secondary active:scale-[0.98] transition-transform"
                onClick={() => setActiveExperience(service.id as ServiceId)}
              >
                <div 
                  className="absolute inset-0 transition-all duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/10 to-transparent" />
                
                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl flex items-center justify-center mb-3 transform transition-transform group-hover:rotate-12">
                    <i className={`fa-solid ${service.icon} text-secondary text-base md:text-xl`}></i>
                  </div>
                  <h4 className="text-sm md:text-lg font-serif font-bold text-white mb-1 italic">{service.title}</h4>
                  <button className="flex items-center gap-2 text-primary font-black tracking-widest uppercase text-[6px] md:text-[8px] group-hover:gap-4 transition-all">
                    Plan Experience
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
