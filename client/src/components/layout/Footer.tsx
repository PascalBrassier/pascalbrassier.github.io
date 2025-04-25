const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-primary to-[#1a365d] text-white py-16">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-noise-pattern"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/20 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary/20 to-transparent rounded-full filter blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="mb-6 md:mb-0 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Dr. Pascal Brassier</h2>
            <p className="text-white/80 mb-1">Maître de Conférences en Sciences de Gestion</p>
            <p className="text-white/80 mb-4">Université Clermont Auvergne</p>
            
            <div className="mt-6 flex flex-col space-y-2">
              <div className="flex items-center">
                <i className="fas fa-envelope text-accent mr-3"></i>
                <a href="mailto:pascal.brassier@uca.fr" className="text-white/80 hover:text-white transition duration-300">
                  pascal.brassier@uca.fr
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-accent mr-3"></i>
                <span className="text-white/80">Clermont-Ferrand, France</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end animate-fade-in">
            <h3 className="text-xl font-semibold mb-4 md:text-right w-full">Suivez-moi</h3>
            <div className="flex flex-wrap gap-4 mb-8 md:justify-end">
              <a href="https://www.linkedin.com/in/pascalbrassier/" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110">
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110">
                <i className="fab fa-researchgate text-white"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110">
                <i className="fas fa-graduation-cap text-white"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110">
                <i className="fab fa-twitter text-white"></i>
              </a>
            </div>
            
            <div className="w-full md:text-right">
              <nav className="mb-6">
                <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
                  <li><a href="#about" className="text-white/70 hover:text-white transition duration-300">À propos</a></li>
                  <li><a href="#research" className="text-white/70 hover:text-white transition duration-300">Recherche</a></li>
                  <li><a href="#publications" className="text-white/70 hover:text-white transition duration-300">Publications</a></li>
                  <li><a href="#teaching" className="text-white/70 hover:text-white transition duration-300">Enseignement</a></li>
                  <li><a href="#contact" className="text-white/70 hover:text-white transition duration-300">Contact</a></li>
                </ul>
              </nav>
              <p className="text-white/50 text-sm">© {currentYear} Pascal Brassier. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
