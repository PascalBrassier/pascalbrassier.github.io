import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMobile();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-background/95 backdrop-blur-md shadow-md' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className={`transition-all duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}>
              Dr. Pascal Brassier
            </span>
          </h1>
        </div>
        <nav>
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className={`fas fa-bars text-xl transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}></i>
          </button>
          <ul className={`${
            isMobile && !mobileMenuOpen ? 'hidden' : 'flex'
          } flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center mt-4 md:mt-0 ${
            isMobile ? 'bg-background/95 backdrop-blur-md p-4 rounded-lg shadow-lg' : ''
          }`}>
            <li>
              <Link href="#about" onClick={closeMobileMenu} className="nav-item">
                <span className={`font-medium transition-colors duration-300 ${scrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white'}`}>
                  À propos
                </span>
              </Link>
            </li>
            <li>
              <Link href="#tabs-section" onClick={closeMobileMenu} className="nav-item">
                <span className={`font-medium transition-colors duration-300 ${scrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white'}`}>
                  Travaux
                </span>
              </Link>
            </li>
            <li>
              <Link href="#research" onClick={closeMobileMenu} className="nav-item">
                <span className={`font-medium transition-colors duration-300 ${scrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white'}`}>
                  Recherche
                </span>
              </Link>
            </li>
            <li>
              <Link href="#publications" onClick={closeMobileMenu} className="nav-item">
                <span className={`font-medium transition-colors duration-300 ${scrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white'}`}>
                  Publications
                </span>
              </Link>
            </li>
            <li>
              <Link href="#teaching" onClick={closeMobileMenu} className="nav-item">
                <span className={`font-medium transition-colors duration-300 ${scrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white'}`}>
                  Enseignement
                </span>
              </Link>
            </li>
            <li>
              <Button asChild variant={scrolled ? "default" : "secondary"} size="sm" className="transition-all duration-300 shadow-md">
                <Link href="#contact" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
