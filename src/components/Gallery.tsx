import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=800&q=80"
];

const Gallery = () => {
  return (
    <div id="gallery" className="py-24 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Travel Gallery</h2>
        <p className="text-gray-600 mt-2">A glimpse of breathtaking destinations.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg group hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
