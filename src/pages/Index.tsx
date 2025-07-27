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
        <title>Kanaad Bhat | Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer passionate about building innovative applications and solving real-world challenges. Explore my skills, experience, and education." />
        <meta name="keywords" content="Kanaad Bhat, Full Stack Developer, Web Development, Portfolio, Software Engineer" />
        <link rel="canonical" href="https://kanaad.in/" />
        <meta property="og:title" content="Kanaad Bhat | Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer passionate about building innovative applications and solving real-world challenges." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kanaad.in/" />
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
