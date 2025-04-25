import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section className="bg-white py-12 md:py-24 border-b border-gray-200">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#0a3d62] shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" 
              alt="Pascal Brassier" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="md:w-2/3 md:pl-12">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a3d62] mb-3">Pascal Brassier, PhD</h2>
            <p className="text-xl text-[#4a4a4a] mb-2">Maître de Conférences en Sciences de Gestion</p>
            <p className="text-lg text-[#800020] font-medium mb-4">ESC Clermont Business School</p>
          </div>
          <p className="text-lg text-[#4a4a4a] mb-6">
            Spécialiste en Marketing, Communication et Management. Plus de 20 ans d'expérience en enseignement et recherche avec un focus sur le marketing expérientiel et l'innovation.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="bg-[#0a3d62] text-white py-2 px-6 rounded-md hover:bg-[#2c3e50] transition duration-300 shadow-md">
              <Link href="#contact">
                Contact
              </Link>
            </Button>
            <Button variant="outline" className="bg-white text-[#0a3d62] border border-[#0a3d62] py-2 px-6 rounded-md hover:bg-[#f5f5f5] transition duration-300 shadow-md">
              <i className="fas fa-download mr-2"></i>CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
