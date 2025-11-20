import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import About from './components/About';
import Brands from './components/Brands';
import Footer from './components/Footer';
import Demo from './components/Demo';
import EssentialElements from './components/EssentialElements ';
import ScrollTop from './components/ScrollTop';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
useEffect(() => {
  AOS.init({
    duration: 800,
    once: false,
    mirror: true,
    offset: 100,
  });
}, []);

useEffect(() => {
  const handleScroll = () => {
    AOS.refresh();
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero />
      <Demo/>
      <Services />
      <Booking />
      <EssentialElements/>
      <About />
      <Brands />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
