import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-[#f5f5f5]">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0a3d62] mb-10 text-center">À propos</h2>
        
        <Card className="bg-white rounded-lg shadow-md p-8 mb-12">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="w-full">
                <h3 className="text-xl font-bold text-[#800020] mb-4">Profil Professionnel</h3>
                <p className="mb-6 text-[#4a4a4a]">
                  Je suis Maître de Conférences en Sciences de Gestion à l'ESC Clermont Business School depuis 2005. 
                  Mon parcours académique et professionnel est orienté vers la recherche et l'enseignement 
                  dans les domaines du marketing, de la communication et du management. 
                  Je m'intéresse particulièrement au marketing expérientiel, à l'innovation et au comportement des consommateurs.
                </p>
                
                <h3 className="text-xl font-bold text-[#800020] mb-4">Formation</h3>
                <ul className="mb-6 space-y-3">
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#0a3d62] text-white">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                      <p className="font-semibold">Doctorat en Sciences de Gestion</p>
                      <p className="text-sm text-[#4a4a4a]">Université d'Auvergne - Clermont-Ferrand</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#0a3d62] text-white">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                      <p className="font-semibold">DEA Gestion Socio-Economique</p>
                      <p className="text-sm text-[#4a4a4a]">IAE Lyon</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#0a3d62] text-white">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                      <p className="font-semibold">DESCAF</p>
                      <p className="text-sm text-[#4a4a4a]">ESC Clermont Business School</p>
                    </div>
                  </li>
                </ul>
                
                <h3 className="text-xl font-bold text-[#800020] mb-4">Affiliations</h3>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="inline-block bg-[#f5f5f5] px-4 py-2 rounded-full text-[#2c3e50] text-sm">
                    <i className="fas fa-building mr-2"></i>ESC Clermont Business School
                  </span>
                  <span className="inline-block bg-[#f5f5f5] px-4 py-2 rounded-full text-[#2c3e50] text-sm">
                    <i className="fas fa-flask mr-2"></i>CleRMa (Clermont Recherche Management)
                  </span>
                  <span className="inline-block bg-[#f5f5f5] px-4 py-2 rounded-full text-[#2c3e50] text-sm">
                    <i className="fas fa-users mr-2"></i>Association Française du Marketing
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <CardContent className="p-0">
              <div className="text-4xl text-[#800020] mb-4 flex justify-center">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Enseignement</h3>
              <p className="text-center text-[#4a4a4a]">Plus de 20 ans d'expérience dans l'enseignement du marketing et de la communication à différents niveaux.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <CardContent className="p-0">
              <div className="text-4xl text-[#800020] mb-4 flex justify-center">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Recherche</h3>
              <p className="text-center text-[#4a4a4a]">Publications dans des revues académiques sur le marketing expérientiel et le comportement des consommateurs.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <CardContent className="p-0">
              <div className="text-4xl text-[#800020] mb-4 flex justify-center">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Consultation</h3>
              <p className="text-center text-[#4a4a4a]">Collaboration avec des entreprises pour des projets de marketing, d'innovation et de développement stratégique.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
