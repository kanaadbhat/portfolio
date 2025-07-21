import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MyWork from '@/components/MyWork';
import TechStack from '@/components/TechStack';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';

const WorkPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
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