import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Masonry from "react-masonry-css";
import { X } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useGalleryContext } from "@/components/GalleryContext";
import galleryImages from "@/data/galleryImages";
import { Helmet } from 'react-helmet-async';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const GalleryPage: React.FC = () => {
 const { images, setImages, selectedImage, openModal, closeModal } = useGalleryContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const imageId = searchParams.get('image');
  const navigate = useNavigate();

  useEffect(() => {
    setImages(galleryImages); // Load once
  }, []);

  useEffect(() => {
    if (imageId && images.length > 0) {
      const found = images.find((img) => img.id === imageId);
      if (found) openModal(found);
    }
  }, [imageId, images]);

  const handleCloseModal = () => {
    closeModal();
    if (imageId) {
      navigate('/gallery', { replace: true });
    }
  };


  return (
    <div className="min-h-screen flex flex-col bg-background-secondary">
      <Helmet>
        <title>Gallery | Kanaad Bhat</title>
        <meta name="description" content="Explore a visual collection of moments, projects, and memories from Kanaad Bhat's professional journey and achievements." />
        <meta name="keywords" content="Kanaad Bhat gallery, portfolio gallery, project images, achievements, awards" />
        <link rel="canonical" href="https://kanaad.in/gallery" />
        <meta property="og:title" content="Gallery | Kanaad Bhat" />
        <meta property="og:description" content="Explore a visual collection of moments, projects, and memories from Kanaad Bhat's professional journey." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kanaad.in/gallery" />
      </Helmet>
      <Header />
      <main id="main-content" className="flex-1">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
              Explore a visual collection of moments, projects, and memories.
            </p>
          </div>

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden shadow-lg group border border-card-border bg-card mb-6 cursor-pointer"
                onClick={() => openModal(img)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-end">
                  <div className="w-full p-4">
                    <div className="text-white text-lg font-semibold">
                      {img.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </main>
      <Footer />

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-background-secondary rounded-lg p-4 shadow-2xl max-w-full lg:max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute m-5 top-3 right-3 text-white hover:text-gray-300 transition-colors duration-200 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70"
              aria-label="Close image"
            >
              <X size={24} />
            </button>
            <div className="flex-1 overflow-hidden flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[75vh] object-contain rounded-md"
              />
            </div>
            <div className="mt-4 text-center text-foreground-secondary text-lg font-semibold">
              {selectedImage.title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
