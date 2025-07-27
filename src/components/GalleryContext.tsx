// src/context/GalleryContext.tsx
import React, { createContext, useContext, useState } from 'react';

type GalleryImage = {
  id: string;
  src: string;
  title: string;
};

type GalleryContextType = {
  images: GalleryImage[];
  selectedImage: GalleryImage | null;
  openModal: (image: GalleryImage) => void;
  closeModal: () => void;
  setImages: React.Dispatch<React.SetStateAction<GalleryImage[]>>;
};

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export const GalleryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  return (
    <GalleryContext.Provider value={{ images, selectedImage, openModal, closeModal, setImages }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGalleryContext = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error('useGalleryContext must be used within a GalleryProvider');
  }
  return context;
};
