import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Contact | Kanaad Bhat</title>
        <meta name="description" content="Contact Kanaad Bhat for full stack development, DevOps, collaboration opportunities, and project inquiries." />
        <meta name="keywords" content="contact Kanaad Bhat, hire full stack developer, DevOps engineer, collaboration, project inquiry" />
        <link rel="canonical" href="https://kanaad.in/contact" />
        <meta property="og:title" content="Contact | Kanaad Bhat" />
        <meta property="og:description" content="Contact Kanaad Bhat for full stack development, DevOps, collaboration opportunities, and project inquiries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kanaad.in/contact" />
        <meta property="og:site_name" content="Kanaad Bhat" />
      </Helmet>
      <Header />
      <main id="main-content" className="flex-1 flex items-center justify-center">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;