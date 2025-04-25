import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-noise-pattern"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-tl from-primary/20 to-transparent rounded-full filter blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">À propos</span>
          </h2>
          <div className="section-divider"></div>
        </div>
        
        <Card className="bg-gradient-card rounded-xl shadow-card p-8 mb-16 card-hover animate-slide-up backdrop-blur-sm">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="w-full">
                <h3 className="text-2xl font-bold text-secondary mb-6">Profil Professionnel</h3>
                <p className="mb-8 text-foreground leading-relaxed">
                  Je suis Maître de Conférences en Sciences de Gestion à l'Université Clermont Auvergne depuis 2013. 
                  Mon parcours académique et professionnel est orienté vers la recherche et l'enseignement 
                  dans les domaines de la vente B2B, des techniques de négociation et du management commercial. 
                  Je m'intéresse particulièrement au développement des compétences commerciales, aux stratégies de négociation 
                  et à la gestion de la relation client dans les contextes B2B.
                </p>
                
                <h3 className="text-2xl font-bold text-secondary mb-6">Formation</h3>
                <ul className="mb-8 space-y-5">
                  <li className="flex items-center group">
                    <div className="mr-6 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient shadow-md group-hover:shadow-lg transition-all duration-300">
                      <i className="fas fa-graduation-cap text-white"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Doctorat en Sciences de Gestion</p>
                      <p className="text-muted-foreground">Université d'Auvergne - Clermont-Ferrand</p>
                    </div>
                  </li>
                  <li className="flex items-center group">
                    <div className="mr-6 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient shadow-md group-hover:shadow-lg transition-all duration-300">
                      <i className="fas fa-graduation-cap text-white"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">DEA Gestion Socio-Economique</p>
                      <p className="text-muted-foreground">IAE Lyon</p>
                    </div>
                  </li>
                  <li className="flex items-center group">
                    <div className="mr-6 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient shadow-md group-hover:shadow-lg transition-all duration-300">
                      <i className="fas fa-graduation-cap text-white"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">DESCAF</p>
                      <p className="text-muted-foreground">ESC Clermont Business School</p>
                    </div>
                  </li>
                </ul>
                
                <h3 className="text-2xl font-bold text-secondary mb-6">Affiliations</h3>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="inline-block bg-white/60 backdrop-blur-sm px-5 py-3 rounded-full text-foreground shadow-sm hover:shadow-md transition-all duration-300">
                    <i className="fas fa-building mr-2 text-primary"></i>Université Clermont Auvergne
                  </span>
                  <span className="inline-block bg-white/60 backdrop-blur-sm px-5 py-3 rounded-full text-foreground shadow-sm hover:shadow-md transition-all duration-300">
                    <i className="fas fa-flask mr-2 text-accent"></i>CleRMa (Clermont Recherche Management)
                  </span>
                  <span className="inline-block bg-white/60 backdrop-blur-sm px-5 py-3 rounded-full text-foreground shadow-sm hover:shadow-md transition-all duration-300">
                    <i className="fas fa-users mr-2 text-secondary"></i>Association Française de Marketing (AFM)
                  </span>
                  <span className="inline-block bg-white/60 backdrop-blur-sm px-5 py-3 rounded-full text-foreground shadow-sm hover:shadow-md transition-all duration-300">
                    <i className="fas fa-handshake mr-2 text-primary"></i>Association Française des Sciences de Gestion (AFSG)
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-card rounded-xl shadow-card p-8 card-hover animate-slide-up backdrop-blur-sm transform transition-all duration-500 hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="rounded-full bg-gradient w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md">
                <i className="fas fa-chalkboard-teacher text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Enseignement</h3>
              <p className="text-center text-muted-foreground">Plus de 20 ans d'expérience dans l'enseignement de la vente B2B, des techniques de négociation et du management commercial.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card rounded-xl shadow-card p-8 card-hover animate-slide-up delay-100 backdrop-blur-sm transform transition-all duration-500 hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="rounded-full bg-gradient w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md">
                <i className="fas fa-search text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Recherche</h3>
              <p className="text-center text-muted-foreground">Publications dans des revues académiques sur les compétences de vente, les processus de négociation et les stratégies commerciales B2B.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card rounded-xl shadow-card p-8 card-hover animate-slide-up delay-200 backdrop-blur-sm transform transition-all duration-500 hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="rounded-full bg-gradient w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md">
                <i className="fas fa-handshake text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Consultation</h3>
              <p className="text-center text-muted-foreground">Collaboration avec des entreprises pour des projets de développement commercial, formation à la négociation et optimisation des processus de vente.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
