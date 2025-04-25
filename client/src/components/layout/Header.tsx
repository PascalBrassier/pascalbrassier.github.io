import { useState } from "react";
import { Link } from "wouter";
import { useMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMobile();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#0a3d62] text-white shadow-md">
      <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold">Dr. Pascal Brassier</h1>
        </div>
        <nav>
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
          <ul className={`${isMobile && !mobileMenuOpen ? 'hidden' : 'flex'} flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center mt-4 md:mt-0`}>
            <li>
              <Link href="#about" onClick={closeMobileMenu}>
                <a className="hover:text-[#f5f5f5] transition duration-200">À propos</a>
              </Link>
            </li>
            <li>
              <Link href="#research" onClick={closeMobileMenu}>
                <a className="hover:text-[#f5f5f5] transition duration-200">Recherche</a>
              </Link>
            </li>
            <li>
              <Link href="#publications" onClick={closeMobileMenu}>
                <a className="hover:text-[#f5f5f5] transition duration-200">Publications</a>
              </Link>
            </li>
            <li>
              <Link href="#teaching" onClick={closeMobileMenu}>
                <a className="hover:text-[#f5f5f5] transition duration-200">Enseignement</a>
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={closeMobileMenu}>
                <a className="hover:text-[#f5f5f5] transition duration-200">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
