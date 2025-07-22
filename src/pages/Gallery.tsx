import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const images = [
  {
    src: '/public/profile-image.jpg',
    title: 'Profile Pic',
    date: '2024-07-01',
  },
  // Add more images as needed
];

const GalleryPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-background-secondary">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
              Explore a visual collection of moments, projects, and memories.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden shadow-lg group border border-card-border bg-card"
                style={{ aspectRatio: '4/3' }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-end">
                  <div className="w-full p-4">
                    <div className="text-white text-lg font-semibold">{img.title}</div>
                    <div className="text-white text-xs mt-1">{img.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;