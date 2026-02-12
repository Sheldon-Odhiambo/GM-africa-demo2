
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
  const [bookingStatus, setBookingStatus] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

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

  // Handle auto-hiding the status message
  useEffect(() => {
    if (bookingStatus) {
      const timer = setTimeout(() => {
        setBookingStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [bookingStatus]);

  const handleBookService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsBookingOpen(true);
  };

  const handleBookingComplete = (status: string) => {
    setBookingStatus(status);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen bg-white selection:bg-primary selection:text-secondary overflow-x-hidden">
      {/* Booking Status Notification */}
      {bookingStatus && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="bg-secondary border-2 border-primary px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-secondary">
              <i className="fa-solid fa-check font-bold"></i>
            </div>
            <div>
              <p className="text-white font-black tracking-widest text-xs uppercase">{bookingStatus}</p>
              <p className="text-primary/80 text-[10px] uppercase font-bold">Pending Confirmation</p>
            </div>
          </div>
        </div>
      )}

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
          onComplete={handleBookingComplete}
        />
      )}
    </div>
  );
};

export default App;
