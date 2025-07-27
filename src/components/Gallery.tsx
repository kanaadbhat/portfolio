import React from 'react';
import { useGalleryContext } from "@/components/GalleryContext";
import galleryImages from "@/data/galleryImages";

const Gallery: React.FC = () => {
  const { openModal } = useGalleryContext();
  
  return (
    <section id="gallery" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-4">
          <span className="inline-block bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm mb-2">KB</span>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Gallery
          </h2>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            A visual collection of moments, projects, and memories.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-lg group border border-card-border bg-card cursor-pointer"
              style={{ aspectRatio: '4/3' }}
              onClick={() => openModal(img)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-end">
                <div className="w-full p-4">
                  <div className="text-white text-lg font-semibold">{img.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;