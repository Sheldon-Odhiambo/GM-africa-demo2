
import React from 'react';
import { Service, NavItem, FleetItem, ContactInfo } from './types';

export const Logo: React.FC<{ className?: string, dark?: boolean }> = ({ className, dark }) => (
  <div className={`flex items-center gap-4 group transition-all duration-500 ${className}`}>
    {/* Icon Part: Recreating the Sun + Zebra aesthetic */}
    <div className="relative flex items-center justify-center">
      <div className={`relative w-14 h-14 flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110`}>
        {/* Sun Element */}
        <div className={`absolute -left-2 w-10 h-10 rounded-full ${dark ? 'bg-primary' : 'bg-primary'} opacity-80 animate-pulse`}></div>
        {/* Zebra Placeholder / Sunrays - Replicating the shape from image */}
        <div className="relative z-10 text-secondary text-3xl transform -rotate-12">
           <i className={`fa-solid fa-zebra ${dark ? 'text-secondary' : 'text-white'}`}></i>
        </div>
      </div>
    </div>
    
    {/* Text Part: Hierarchical layout from image */}
    <div className="flex flex-col">
      <span className={`text-[10px] tracking-[0.3em] font-sans font-extrabold uppercase leading-none ${dark ? 'text-secondary/60' : 'text-white/60'}`}>Good Morning</span>
      <div className="flex flex-col">
        <span className={`text-2xl md:text-3xl font-serif font-black tracking-tighter leading-none uppercase ${dark ? 'text-secondary' : 'text-white'}`}>
          <span className="text-primary italic">F</span>RICA
        </span>
        <span className={`text-[8px] tracking-[0.4em] font-sans font-black uppercase leading-none mt-1 ${dark ? 'text-primary' : 'text-primary'}`}>
          Tours & Safaris
        </span>
      </div>
    </div>
  </div>
);

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'car-hire',
    title: 'Car Hire & Courtesy Cars',
    description: 'A wide range of reliable vehicles for your personal or business needs.',
    icon: 'fa-car-side',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'airport',
    title: 'Airport Pickups & Drop-offs',
    description: 'Punctual and comfortable transfers to and from major airports.',
    icon: 'fa-plane-departure',
    image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bnb',
    title: 'BnB & Hotel Accommodation',
    description: 'We help you find the perfect stay across Kenya\'s best locations.',
    icon: 'fa-house-chimney-window',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'events',
    title: 'Events Transport',
    description: 'Professional transportation for weddings, conferences, and special occasions.',
    icon: 'fa-calendar-check',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tours',
    title: 'Tours & Safaris',
    description: 'Expert-guided tours to the Maasai Mara, Lake Nakuru, and beyond.',
    icon: 'fa-binoculars',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800'
  }
];

export const FLEET: FleetItem[] = [
  {
    id: '1',
    name: 'Executive Sedan',
    type: 'Luxury',
    capacity: '4 Passengers',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Luxury SUV',
    type: 'Comfort',
    capacity: '7 Passengers',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Safari Van',
    type: '4x4 Tour',
    capacity: '8 Passengers',
    image: 'https://images.unsplash.com/photo-1532939163844-547f958e91b4?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Mini Bus',
    type: 'Group',
    capacity: '14 Passengers',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800'
  }
];

export const HERO_BACKGROUNDS = [
  'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1523805081446-ed9a990d0df1?auto=format&fit=crop&q=80&w=2000'
];

export const CONTACT_INFO: ContactInfo = {
  phone: '0729 488 606',
  whatsapp: '254729488606',
  location: 'Nakuru City, Next to Goodmorning Africa Motors',
  tiktok: 'https://tiktok.com/@goodmorningafrica',
};
