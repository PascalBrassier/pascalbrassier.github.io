import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TabsSection from "@/components/sections/TabsSection";
import ContactSection from "@/components/sections/ContactSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Dr. Pascal Brassier | Academic Profile</title>
        <meta name="description" content="Professional academic portfolio of Dr. Pascal Brassier, professor at ESC Clermont Business School, specialist in Marketing, Communication and Management." />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TabsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
