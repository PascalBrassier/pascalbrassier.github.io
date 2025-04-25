const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#2c3e50] text-white py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Dr. Pascal Brassier</h2>
            <p className="text-gray-300">Maître de Conférences en Sciences de Gestion</p>
            <p className="text-gray-300">ESC Clermont Business School</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/in/pascalbrassier/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
                <i className="fab fa-researchgate"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
                <i className="fas fa-graduation-cap"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <p className="text-gray-400 text-sm">© {currentYear} Pascal Brassier. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
