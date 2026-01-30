
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
    // Initial loading
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 1800);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Scroll reveal observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    window.addEventListener('scroll', handleScroll);
    
    if (!isLoading) {
      document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }

    return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
        revealObserver.disconnect();
    };
  }, [isLoading]);

  const handleBookService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsBookingOpen(true);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen bg-white selection:bg-primary selection:text-secondary">
      <Navbar scrolled={scrolled} onBookNow={() => handleBookService('')} />
      
      <main>
        <Hero onBookNow={() => handleBookService('')} />
        
        <div className="reveal">
          <Services onBookService={handleBookService} />
        </div>
        
        <div className="reveal">
          <Fleet onBookVehicle={handleBookService} />
        </div>
        
        <div className="reveal">
          <About />
        </div>
        
        <div className="reveal">
          <Contact />
        </div>
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
