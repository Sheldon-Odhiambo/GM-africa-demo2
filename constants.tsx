
import React from 'react';
import { Service, NavItem, FleetItem, ContactInfo } from './types';

export const Logo: React.FC<{ className?: string, dark?: boolean }> = ({ className, dark }) => (
  <div className={`flex items-center gap-3 group transition-all duration-500 ${className}`}>
    {/* Logo Image Placeholder - Represents the Safari Brand */}
    <div className="h-12 flex items-center">
              <img
                src="/images/logo-removebg-preview.png"
                alt="Company Logo"
                className="h-16 w-auto object-contain scale-[1.4] lg:scale-[1.8] origin-left"
              />
            </div>
    
    {/* Text Layout */}
    {/* <div className="flex flex-col">
      <span className={`text-[8px] md:text-[9px] tracking-[0.2em] font-sans font-black uppercase leading-none ${dark ? 'text-secondary' : 'text-white'}`}>
        GOOD MORNING
      </span>
      <div className="flex flex-col">
        <span className={`text-xl md:text-2xl font-serif font-black tracking-[-0.02em] leading-tight uppercase ${dark ? 'text-secondary' : 'text-white'}`}>
          AFRICA
        </span>
        <span className={`text-[7px] md:text-[8px] tracking-[0.3em] font-sans font-black uppercase leading-none mt-0.5 text-primary`}>
          TOURS & SAFARIS
        </span>
      </div>
    </div> */}
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
    id: 'game-drives',
    title: 'Game Drives',
    description: 'Breathtaking wildlife adventures through Kenya\'s iconic parks like Maasai Mara and Amboseli.',
    icon: 'fa-binoculars',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1523805081446-ed9a990d0df1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'group-travel',
    title: 'Group Travel',
    description: 'Perfectly coordinated group excursions for families, schools, and social clubs across East Africa.',
    icon: 'fa-people-group',
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'corporate-travel',
    title: 'Corporate Travel',
    description: 'Professional transportation solutions for business meetings, staff retreats, and team building events.',
    icon: 'fa-building-user',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'car-hire',
    title: 'Car Hire',
    description: 'A premium range of reliable vehicles from compact cars to rugged 4x4s for your personal use.',
    icon: 'fa-key',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hotel-booking',
    title: 'Hotel Booking',
    description: 'We handle your accommodation needs, securing the best rates at top-tier hotels and luxury lodges.',
    icon: 'fa-bed',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'executive-rides',
    title: 'Executive Rides',
    description: 'Luxury chauffeur-driven services for VIP guests, diplomats, and high-profile transfers.',
    icon: 'fa-crown',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=800'
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
  'https://images.unsplash.com/photo-1523805081446-ed9a990d0df1?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000'
];

export const CONTACT_INFO: ContactInfo = {
  phone: '0729 488 606',
  whatsapp: '254729488606',
  location: 'Nakuru City, Next to Sakinya Motors',
  tiktok: 'https://tiktok.com/@goodmorningafrica',
  email: 'goodmorningafrica756@gmail.com'
};
