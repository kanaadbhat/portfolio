import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MyWork from '@/components/MyWork';
import TechStack from '@/components/TechStack';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import { Helmet } from 'react-helmet-async';

const WorkPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Projects & Work | Kanaad Bhat</title>
        <meta name="description" content="Explore my portfolio of projects including Vendora, buildguild, and Apex. View my technical skills, achievements, and certifications." />
        <meta name="keywords" content="Kanaad Bhat projects, web development portfolio, Flutter, React.js, Node.js, MongoDB, full stack projects" />
        <link rel="canonical" href="https://kanaad.in/work" />
        <meta property="og:title" content="Projects & Work | Kanaad Bhat" />
        <meta property="og:description" content="Explore my portfolio of projects including Vendora, buildguild, and Apex. View my technical skills and achievements." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kanaad.in/work" />
      </Helmet>
      <Header />
      <main id="main-content" className="flex-1">
        <MyWork />
        <TechStack />
        <Achievements />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
};

export default WorkPage;