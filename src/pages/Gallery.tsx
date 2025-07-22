import React , { useState }from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate} from 'react-router-dom'; // Keep if you use navigate elsewhere
import Masonry from 'react-masonry-css'; // Import the Masonry component
import { X } from 'lucide-react';

//images
import apex_award from '@/assets/apex_award.jpeg';
import buildguild_award from '@/assets/buildguild_award.jpeg';
import equinox_award from '@/assets/equinox_award.jpeg';
import iot from '@/assets/iot.jpeg';
import iot_award from '@/assets/iot_award.jpeg';
import iste_committee from '@/assets/iste_committee.jpeg';
import msp_award from '@/assets/msp_award.jpeg';
import msp_group from '@/assets/msp_group.jpeg';
import msp_moment_1 from '@/assets/msp_moment_1.jpeg';
import msp_moment_2 from '@/assets/msp_moment_2.jpeg';
import msp_trophy from '@/assets/msp_trophy.jpeg';
import rotaract from '@/assets/rotaract.jpeg';
import equinox_trophy from '@/assets/equinox_trophy.jpeg';
import neuron_host from '@/assets/neuron_host.jpg';
import rotaract_installation from '@/assets/rotaract_installation.jpg';
import engg_explo from '@/assets/engg_explo.jpg';
import cybersecurity from '@/assets/cybersecurity.jpg';

const images = [
  {
    src: apex_award,
    title: 'PBL Competition Award Ceremony - Apex',
  },
  {
    src: buildguild_award,
    title: 'PBL Competition Award Ceremony - buildguild',
  },
  {
    src: equinox_award,
    title: 'Equinox Web Battles Award Ceremony',
  },
  {
    src: iot,
    title: 'IoT Project of Smart Water management System',
  },
  {
    src: iot_award,
    title: 'PBL Competition Award Ceremony - Smart Water Management system',
  },
  {
    src: iste_committee,
    title: 'ISTE Core Committee Installation Ceremony',
  },
  {
    src: msp_award,
    title: "Master student's Program Award Ceremony",
  },
  {
    src: msp_group,
    title: 'MSP 2024 Speakers',
  },
  {
    src: msp_moment_1,
    title: 'MSP Clicks',
  },
  {
    src: msp_moment_2,
    title: 'MSP Clicks',
  },
  {
    src: msp_trophy,
    title: 'MSP 2024 Trophy',
  },
  {
    src: rotaract,
    title: 'RAC NNH Appreciation Certificate',
  },
  {
    src: neuron_host,
    title: 'Round Host for Neuron Quiz Competition',
  },
  {
    src: rotaract_installation,
    title: 'RAC NNH Installation Ceremony',
  },
  {
    src: engg_explo,
    title: 'First Year Engineering Exploration project',
  },
  {
    src: equinox_trophy,
    title: 'Equinox Web Battles Trophy',
  },
  {
    src: cybersecurity,
    title: 'Anchoring at Cybersecurity Awareness session',
  },
];

// Define breakpoints for the masonry columns
const breakpointColumnsObj = {
  default: 4, // Default number of columns for large screens
  1100: 3,    // 3 columns on screens <= 1100px
  700: 2,     // 2 columns on screens <= 700px
  500: 1      // 1 column on screens <= 500px (mobile)
};

const GalleryPage: React.FC = () => {
  const navigate = useNavigate();
  // State to manage the currently selected image for the modal
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const openModal = (image: { src: string; title: string }) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = ''; // Restore scrolling
  };

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

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden shadow-lg group border border-card-border bg-card mb-6 cursor-pointer"
                onClick={() => openModal(img)} // Click handler to open modal
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-end">
                  <div className="w-full p-4">
                    <div className="text-white text-lg font-semibold">{img.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </main>
      <Footer />

      {/* Image Modal (Lightbox) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm"
          onClick={closeModal} // Close when clicking outside the image
        >
          <div
            className="relative bg-background-secondary rounded-lg p-4 shadow-2xl max-w-full lg:max-w-4xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking on content
          >
            <button
              onClick={closeModal}
              className="absolute m-5 top-3 right-3 text-white hover:text-gray-300 transition-colors duration-200 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70"
              aria-label="Close image"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-md" // object-contain ensures full image is visible
            />
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