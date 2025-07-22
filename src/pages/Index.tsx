import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Profile from '@/components/Profile';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

const Index = () => {
  return (
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
  );
};

export default Index;
