import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Profile from '@/components/Profile';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kanaad Bhat | Full Stack Developer & DevOps Engineer</title>
        <meta name="description" content="Portfolio of Kanaad Bhat, a Full Stack Developer & DevOps Engineer focused on React, Node.js, AWS, Docker, Terraform, and production-ready applications." />
        <meta name="keywords" content="Kanaad Bhat, Full Stack Developer, DevOps Engineer, React, Node.js, AWS, Docker, Terraform, Portfolio" />
        <link rel="canonical" href="https://kanaad.in/" />
        <meta property="og:title" content="Kanaad Bhat | Full Stack Developer | DevOps Engineer" />
        <meta property="og:description" content="Portfolio of Kanaad Bhat, a Full Stack Developer & DevOps Engineer focused on scalable applications and cloud infrastructure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kanaad.in/" />
        <meta property="og:site_name" content="Kanaad Bhat" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kanaad Bhat | Full Stack Developer & DevOps Engineer" />
        <meta name="twitter:description" content="Portfolio of Kanaad Bhat, focused on React, Node.js, AWS, Docker, Terraform, and production-ready applications." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main id="main-content" className="flex-1">
          <Intro />
          <Profile />
          <Experience />
          <Education />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
