import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Contact | Kanaad Bhat</title>
        <meta name="description" content="Get in touch with Kanaad Bhat. Send a message, connect on social media, or reach out via email for collaboration opportunities and inquiries." />
        <meta name="keywords" content="contact Kanaad Bhat, hire full stack developer, web development inquiry, software development contact" />
        <link rel="canonical" href="https://kanaad.in/contact" />
        <meta property="og:title" content="Contact | Kanaad Bhat" />
        <meta property="og:description" content="Get in touch with Kanaad Bhat. Send a message or connect on social media for collaboration opportunities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kanaad.in/contact" />
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