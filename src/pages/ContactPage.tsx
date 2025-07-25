import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main id="main-content" className="flex-1 flex items-center justify-center">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;