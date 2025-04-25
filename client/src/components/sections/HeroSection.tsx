import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section className="bg-gradient-light py-16 md:py-28 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-noise-pattern"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/30 to-transparent rounded-full filter blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/30 to-transparent rounded-full filter blur-3xl -ml-48 -mb-48"></div>
      
      <div className="container flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/3 mb-12 md:mb-0 flex justify-center">
          <div className="relative group animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30 group-hover:opacity-40 transition-all duration-500 scale-105"></div>
            <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" 
                alt="Pascal Brassier" 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
        <div className="md:w-2/3 md:pl-12 text-center md:text-left">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Pascal Brassier, PhD</span>
            </h1>
            <p className="text-xl text-foreground mb-2">Maître de Conférences en Sciences de Gestion</p>
            <p className="text-lg font-medium mb-4 text-secondary">Université Clermont Auvergne</p>
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 animate-slide-up">
            Spécialiste en <span className="font-semibold text-foreground">B2B selling, negotiation & sales management</span>. 
            Plus de 20 ans d'expérience en enseignement et recherche avec un focus sur les stratégies de négociation commerciale et développement des compétences de vente.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-slide-up">
            <Button asChild className="btn-fancy bg-gradient">
              <Link href="#contact">
                <span className="relative z-10 px-2">Contact</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="card-hover backdrop-blur-sm bg-white/80 border border-primary text-primary hover:text-primary">
              <a href="#" download>
                <i className="fas fa-download mr-2"></i>CV
              </a>
            </Button>
            <Button asChild variant="outline" className="card-hover backdrop-blur-sm bg-white/80 border border-accent text-accent hover:text-accent">
              <a href="#research">
                <i className="fas fa-flask mr-2"></i>Recherche
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
