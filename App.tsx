import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Fleet } from './components/Fleet';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Loader } from './components/Loader';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for cinematic feel
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
    };
  }, []);

  const handleBookService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsBookingOpen(true);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen bg-white animate-scale-in">
      <Navbar scrolled={scrolled} onBookNow={() => handleBookService('')} />
      
      <main>
        <Hero onBookNow={() => handleBookService('')} />
        <Services onBookService={handleBookService} />
        <Fleet />
        <About />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
      
      {isBookingOpen && (
        <BookingModal 
          selectedService={selectedService} 
          onClose={() => setIsBookingOpen(false)} 
        />
      )}
    </div>
  );
};

export default App;