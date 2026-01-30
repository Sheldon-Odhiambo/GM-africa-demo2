
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  hoverImage: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FleetItem {
  id: string;
  name: string;
  type: string;
  capacity: string;
  image: string;
  hoverImage: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  location: string;
  tiktok: string;
}
