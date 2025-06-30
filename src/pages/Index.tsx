
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ApproachSection from '../components/ApproachSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      <ApproachSection />
      <ServicesSection />
      <AboutSection />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
