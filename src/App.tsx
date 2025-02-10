import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Youtube, Globe, Star, ArrowRight } from 'lucide-react';

// Lazy Load Gallery Component
const Gallery = lazy(() => import('./components/Gallery'));

function App() {
  const [showNav, setShowNav] = useState(true);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    let prevScroll = window.pageYOffset;
    const handleScroll = () => {
      let currentScroll = window.pageYOffset;
      setShowNav(prevScroll > currentScroll || currentScroll < 50);
      prevScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const destinations = [
    {
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      title: "Tokyo, Japan",
      rating: 4.9,
      price: "$2,499",
      description: "Experience the perfect blend of tradition and modernity",
    },
    {
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80",
      title: "Venice, Italy",
      rating: 4.8,
      price: "$1,899",
      description: "Explore the romantic canals and historic architecture",
    },
    {
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
      title: "Santorini, Greece",
      rating: 4.9,
      price: "$2,199",
      description: "Stunning sunsets and pristine white architecture",
    }
  ];

  return (
    <div className="min-h-screen bg-[#eef1ff]">
      {/* Floating Navbar - Adjusted to Match Screenshot */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-lg z-50 shadow-lg px-8 py-4 rounded-full flex items-center justify-between w-[800px]"
      >
        <div className="flex items-center space-x-2">
          <Globe className="w-6 h-6 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">Mundo Travel</span>
        </div>
        <div className="flex space-x-6">
          <a href="#gallery" className="text-gray-700 hover:text-blue-500 transition">Gallery</a>
          <a href="#travel-tips" className="text-gray-700 hover:text-blue-500 transition">Travel Tips</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500 transition">Contact Us</a>
        </div>
        <a
          href="https://www.youtube.com/@TheMundoTravel"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 text-black px-5 py-2 rounded-full flex items-center space-x-2"
        >
          <Youtube className="w-4 h-4 text-blue-600" />
          <span>Subscribe</span>
        </a>
      </motion.div>

      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center text-white text-center px-6"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Explore The World With Us
          </h1>
          <p className="text-lg text-white/90 mt-4">
            Join us on unforgettable journeys across the globe.
          </p>
        </motion.div>
      </div>

      {/* Travel Gallery Section */}
      <Suspense fallback={<p>Loading Gallery...</p>}>
        <Gallery />
      </Suspense>

      {/* Popular Destinations Section */}
      <div id="destinations" className="py-24 bg-[#eef1ff]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Popular Destinations</h2>
          <p className="text-gray-600 mt-2">Carefully curated for unforgettable experiences.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
          {destinations.map((destination, index) => (
            <motion.div 
              key={index}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img src={destination.image} alt={destination.title} className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity" />
              <div className="p-6">
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-bold">{destination.rating}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{destination.title}</h3>
                <p className="text-gray-600 mt-2">{destination.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-xl font-bold text-blue-600">{destination.price}</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
                    Explore <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
