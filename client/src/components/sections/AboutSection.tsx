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
                  Je suis Maître de Conférences en Sciences de Gestion à l'Université Clermont Auvergne depuis 2013, 
                  actuellement rattaché à l'IAE Clermont Auvergne. Mon parcours académique et professionnel est orienté 
                  vers la recherche et l'enseignement dans les domaines de la vente B2B, des techniques de négociation 
                  et du management commercial. Avec une Habilitation à Diriger des Recherches (HDR) obtenue en 2024,
                  je supervise désormais des travaux doctoraux et dirige des projets de recherche en lien avec le 
                  développement des compétences commerciales et les stratégies de vente B2B.
                </p>
                
                <h3 className="text-2xl font-bold text-secondary mb-6">Formation</h3>
                <ul className="mb-8 space-y-5">
                  <li className="flex items-center group">
                    <div className="mr-6 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient shadow-md group-hover:shadow-lg transition-all duration-300">
                      <i className="fas fa-graduation-cap text-white"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Habilitation à Diriger des Recherches (HDR) en Sciences de Gestion</p>
                      <p className="text-muted-foreground">Université Clermont Auvergne, 2024</p>
                    </div>
                  </li>
                  <li className="flex items-center group">
                    <div className="mr-6 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient shadow-md group-hover:shadow-lg transition-all duration-300">
                      <i className="fas fa-graduation-cap text-white"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Doctorat ès Sciences de Gestion</p>
                      <p className="text-muted-foreground">Université d'Auvergne, 2004 - Mention Très Honorable, avec Félicitations du Jury</p>
                    </div>
                  </li>
                  <li className="flex items-center group">
                    <div className="mr-6 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient shadow-md group-hover:shadow-lg transition-all duration-300">
                      <i className="fas fa-graduation-cap text-white"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">D.E.A. Sciences de Gestion</p>
                      <p className="text-muted-foreground">Université d'Auvergne, 1996 - Mention Très Bien, Rang : 1er</p>
                    </div>
                  </li>
                </ul>
                
                <h3 className="text-2xl font-bold text-secondary mb-6">Affiliations & Organisations</h3>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="inline-block bg-white/60 backdrop-blur-sm px-5 py-3 rounded-full text-foreground shadow-sm hover:shadow-md transition-all duration-300">
                    <i className="fas fa-building mr-2 text-primary"></i>IAE Clermont Auvergne (UCA)
                  </span>
                  <span className="inline-block bg-white/60 backdrop-blur-sm px-5 py-3 rounded-full text-foreground shadow-sm hover:shadow-md transition-all duration-300">
                    <i className="fas fa-flask mr-2 text-accent"></i>CleRMa (Clermont Recherche Management)
                  </span>
                  <span className="inline-block bg-white/60 backdrop-blur-sm px-5 py-3 rounded-full text-foreground shadow-sm hover:shadow-md transition-all duration-300">
                    <i className="fas fa-users mr-2 text-secondary"></i>AFM (Association Française de Marketing)
                  </span>
                  <span className="inline-block bg-white/60 backdrop-blur-sm px-5 py-3 rounded-full text-foreground shadow-sm hover:shadow-md transition-all duration-300">
                    <i className="fas fa-handshake mr-2 text-primary"></i>GSSI (Global Sales Science Institute)
                  </span>
                  <span className="inline-block bg-white/60 backdrop-blur-sm px-5 py-3 rounded-full text-foreground shadow-sm hover:shadow-md transition-all duration-300">
                    <i className="fas fa-globe-europe mr-2 text-secondary"></i>EASB (European Academic Sales Board)
                  </span>
                  <span className="inline-block bg-white/60 backdrop-blur-sm px-5 py-3 rounded-full text-foreground shadow-sm hover:shadow-md transition-all duration-300">
                    <i className="fas fa-chart-line mr-2 text-accent"></i>EMAC (European Marketing Academy)
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
              <p className="text-center text-muted-foreground">
                Directeur du Master 2 Direction Commerciale & International Business (2017-2024), 
                enseignement en sales management, négociation commerciale, et développement commercial international.
                Professeur invité dans 12 universités à l'international.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card rounded-xl shadow-card p-8 card-hover animate-slide-up delay-100 backdrop-blur-sm transform transition-all duration-500 hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="rounded-full bg-gradient w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md">
                <i className="fas fa-search text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Recherche</h3>
              <p className="text-center text-muted-foreground">
                Direction de programmes de recherche-action (STAM, P2C) et co-encadrement doctoral
                portant sur les communautés en ligne B2B, compétences commerciales et négociation.
                Publications dans des revues académiques internationales.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card rounded-xl shadow-card p-8 card-hover animate-slide-up delay-200 backdrop-blur-sm transform transition-all duration-500 hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="rounded-full bg-gradient w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md">
                <i className="fas fa-award text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Responsabilités</h3>
              <p className="text-center text-muted-foreground">
                Chargé de Mission Compétences & Learning pour l'IDEM-UCA.
                Responsable du Standard 5 'AOL' pour l'accréditation AACSB.
                Ancien adjoint du Directeur de l'IAE pour l'accréditation AACSB (2018-2022).
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
