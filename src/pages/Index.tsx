
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ApproachSection from '../components/ApproachSection';
import ServicesSection from '../components/ServicesSection';
import ResourcesSection from '../components/ResourcesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ApproachSection />
      <ServicesSection />
      <ResourcesSection />
      <ContactSection />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
