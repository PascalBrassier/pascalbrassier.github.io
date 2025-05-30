import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ResearchProject, Publication, Course } from "@/lib/types";
import { useLocation } from "wouter";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("research");
  const [location] = useLocation();

  // Fetch research projects from the server
  const { data: researchProjects = [] } = useQuery<ResearchProject[]>({
    queryKey: ['/api/research-projects'],
  });

  // Fetch publications from the server
  const { data: publications = [] } = useQuery<Publication[]>({
    queryKey: ['/api/publications'],
  });
  
  // Fetch courses from the server
  const { data: courses = [] } = useQuery<Course[]>({
    queryKey: ['/api/courses'],
  });

  // Handle hash changes in the URL
  useEffect(() => {
    const hash = location.split('#')[1];
    if (hash === 'research' || hash === 'publications' || hash === 'teaching') {
      setActiveTab(hash);
    }
  }, [location]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    window.history.replaceState(null, '', `#${tab}`);
  };
  
  return (
    <section id="tabs-section" className="py-20 bg-gradient-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-noise-pattern"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-secondary/20 to-transparent rounded-full filter blur-3xl -mr-48 -mb-48"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Travaux & Activités</span>
          </h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="flex flex-wrap justify-center bg-white/60 backdrop-blur-sm rounded-lg shadow-sm mb-12 max-w-3xl mx-auto">
          <Button 
            variant="ghost" 
            className={`nav-item px-6 py-4 font-medium text-lg ${activeTab === 'research' 
              ? 'text-primary font-semibold' 
              : 'text-foreground opacity-80 hover:opacity-100'}`}
            onClick={() => handleTabClick('research')}
          >
            <i className="fas fa-flask mr-2"></i>
            Recherche
          </Button>
          <Button 
            variant="ghost" 
            className={`nav-item px-6 py-4 font-medium text-lg ${activeTab === 'publications' 
              ? 'text-primary font-semibold' 
              : 'text-foreground opacity-80 hover:opacity-100'}`}
            onClick={() => handleTabClick('publications')}
          >
            <i className="fas fa-book mr-2"></i>
            Publications
          </Button>
          <Button 
            variant="ghost" 
            className={`nav-item px-6 py-4 font-medium text-lg ${activeTab === 'teaching' 
              ? 'text-primary font-semibold' 
              : 'text-foreground opacity-80 hover:opacity-100'}`}
            onClick={() => handleTabClick('teaching')}
          >
            <i className="fas fa-chalkboard-teacher mr-2"></i>
            Enseignement
          </Button>
        </div>

        {/* Research Tab Content */}
        <div className={activeTab === 'research' ? 'block' : 'hidden'}>
          <h2 id="research" className="text-2xl md:text-3xl font-bold text-secondary mb-8">Domaines de Recherche</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-card p-8 rounded-xl shadow-card card-hover">
              <h3 className="text-xl font-bold text-secondary mb-4">Vente B2B & Négociation</h3>
              <p className="mb-4 text-foreground leading-relaxed">
                Mes recherches se concentrent sur les processus de vente et les techniques de négociation dans le contexte B2B, 
                avec une attention particulière sur le développement des compétences commerciales et leur évaluation. J'ai dirigé 
                le programme de recherche-action P2C sur l'autoévaluation des compétences commerciales.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-white/60 shadow-sm px-3 py-1 rounded-full text-sm text-foreground backdrop-blur-sm hover:shadow-md transition-all duration-300">Négociation commerciale</span>
                <span className="bg-white/60 shadow-sm px-3 py-1 rounded-full text-sm text-foreground backdrop-blur-sm hover:shadow-md transition-all duration-300">Compétences de vente</span>
                <span className="bg-white/60 shadow-sm px-3 py-1 rounded-full text-sm text-foreground backdrop-blur-sm hover:shadow-md transition-all duration-300">Relation client B2B</span>
              </div>
            </div>
            
            <div className="bg-gradient-card p-8 rounded-xl shadow-card card-hover">
              <h3 className="text-xl font-bold text-secondary mb-4">Communautés en ligne B2B</h3>
              <p className="mb-4 text-foreground leading-relaxed">
                Je suis co-concepteur du Programme de recherche-action STAM (2019-2023) sur la création et l'animation de communautés 
                en ligne B2B en métrologie industrielle. Ce projet interdisciplinaire associe des chercheurs en gestion et informatique 
                et des acteurs industriels avec un budget de 1,7 M€.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-white/60 shadow-sm px-3 py-1 rounded-full text-sm text-foreground backdrop-blur-sm hover:shadow-md transition-all duration-300">Communautés B2B</span>
                <span className="bg-white/60 shadow-sm px-3 py-1 rounded-full text-sm text-foreground backdrop-blur-sm hover:shadow-md transition-all duration-300">Marketing digital</span>
                <span className="bg-white/60 shadow-sm px-3 py-1 rounded-full text-sm text-foreground backdrop-blur-sm hover:shadow-md transition-all duration-300">Social selling</span>
              </div>
            </div>
          </div>
          
          <Card className="bg-gradient-card shadow-card p-8 rounded-xl card-hover backdrop-blur-sm">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-secondary mb-8 inline-block relative">
                Projets de Recherche Actuels
                <span className="absolute bottom-0 left-0 h-1 w-1/2 bg-gradient-to-r from-primary to-accent rounded-full"></span>
              </h3>
              
              <div className="space-y-8">
                {researchProjects.map((project, index) => (
                  <div className="flex group" key={index}>
                    <div className="mr-6 flex-shrink-0 flex items-start mt-1">
                      <div className="w-12 h-12 rounded-lg bg-gradient shadow-md text-white flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <i className="fas fa-flask text-lg"></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 group-hover:text-accent transition-colors duration-300">{project.title}</h4>
                      <p className="text-foreground leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Publications Tab Content */}
        <div className={activeTab === 'publications' ? 'block animate-fade-in' : 'hidden'}>
          <div className="mb-10">
            <h2 id="publications" className="text-2xl md:text-3xl font-bold inline-block relative">
              <span className="text-gradient">Publications Scientifiques</span>
            </h2>
          </div>
          
          <div className="mb-12">
            <Card className="bg-gradient-card shadow-card p-8 rounded-xl card-hover backdrop-blur-sm mb-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-secondary mb-8 inline-block relative">
                  Articles dans des Revues Académiques
                  <span className="absolute bottom-0 left-0 h-1 w-1/2 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                </h3>
                
                <div className="space-y-8">
                  {publications.filter(pub => pub.type === 'article').map((publication, index) => (
                    <div className="publication-item pb-6 border-b border-border last:border-none group" key={index}>
                      <h4 className="font-bold text-xl mb-2 group-hover:text-accent transition-colors duration-300">{publication.title}</h4>
                      <p className="italic text-muted-foreground mb-3">{publication.journal}, {publication.year}</p>
                      <p className="text-foreground mb-4 leading-relaxed">{publication.description}</p>
                      <div className="flex items-center space-x-4">
                        {publication.pdfUrl && (
                          <a href={publication.pdfUrl} className="text-primary hover:text-accent flex items-center transition-colors duration-300 group" 
                             target="_blank" rel="noopener noreferrer">
                            <span className="bg-primary/10 p-2 rounded-full mr-2 group-hover:bg-accent/10 transition-colors duration-300">
                              <i className="fas fa-file-pdf text-primary group-hover:text-accent"></i>
                            </span>
                            PDF
                          </a>
                        )}
                        {publication.doiUrl && (
                          <a href={publication.doiUrl} className="text-primary hover:text-accent flex items-center transition-colors duration-300 group" 
                             target="_blank" rel="noopener noreferrer">
                            <span className="bg-primary/10 p-2 rounded-full mr-2 group-hover:bg-accent/10 transition-colors duration-300">
                              <i className="fas fa-external-link-alt text-primary group-hover:text-accent"></i>
                            </span>
                            DOI
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-12">
            <Card className="bg-gradient-card shadow-card p-8 rounded-xl card-hover backdrop-blur-sm mb-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-secondary mb-8 inline-block relative">
                  Chapitres d'Ouvrages
                  <span className="absolute bottom-0 left-0 h-1 w-1/2 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                </h3>
                
                <div className="space-y-8">
                  {publications.filter(pub => pub.type === 'chapter').map((publication, index) => (
                    <div className="publication-item pb-6 border-b border-border last:border-none group" key={index}>
                      <h4 className="font-bold text-xl mb-2 group-hover:text-accent transition-colors duration-300">{publication.title}</h4>
                      <p className="italic text-muted-foreground mb-3">Dans: {publication.journal}, {publication.year}</p>
                      <p className="text-foreground leading-relaxed">{publication.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-gradient-card shadow-card p-8 rounded-xl card-hover backdrop-blur-sm">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-secondary mb-8 inline-block relative">
                  Communications en Conférences
                  <span className="absolute bottom-0 left-0 h-1 w-1/2 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                </h3>
                
                <div className="space-y-8">
                  {publications.filter(pub => pub.type === 'conference').map((publication, index) => (
                    <div className="publication-item pb-6 border-b border-border last:border-none group" key={index}>
                      <h4 className="font-bold text-xl mb-2 group-hover:text-accent transition-colors duration-300">{publication.title}</h4>
                      <p className="italic text-muted-foreground">{publication.journal}, {publication.year}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Teaching Tab Content */}
        <div className={activeTab === 'teaching' ? 'block animate-fade-in' : 'hidden'}>
          <div className="mb-10">
            <h2 id="teaching" className="text-2xl md:text-3xl font-bold inline-block relative">
              <span className="text-gradient">Activités d'Enseignement</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-card shadow-card p-8 rounded-xl card-hover backdrop-blur-sm">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-secondary mb-6 inline-block relative">
                  Cours enseignés
                  <span className="absolute bottom-0 left-0 h-1 w-1/2 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                </h3>
                <ul className="space-y-5 mt-8">
                  {courses.map((course, index) => (
                    <li className="flex items-center group" key={index}>
                      <div className="mr-5 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient shadow-md text-white group-hover:scale-110 transition-all duration-300">
                        <i className="fas fa-book text-lg"></i>
                      </div>
                      <div>
                        <p className="font-semibold text-lg group-hover:text-accent transition-colors duration-300">{course.title}</p>
                        <p className="text-muted-foreground">{course.level}, {course.institution}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-card p-8 rounded-xl card-hover backdrop-blur-sm">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-secondary mb-6 inline-block relative">
                  Méthodes Pédagogiques
                  <span className="absolute bottom-0 left-0 h-1 w-1/2 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                </h3>
                <p className="mb-8 text-foreground leading-relaxed">
                  J'adopte une approche par compétences en tant que Chargé de Mission Compétences & Learning pour l'IDEM-UCA,
                  combinant théorie et pratique avec une forte orientation professionnelle. Je privilégie l'apprentissage actif et 
                  l'utilisation d'outils numériques innovants.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient shadow-sm group-hover:shadow-md text-white transition-all duration-300">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <p className="text-foreground pt-1 group-hover:text-accent transition-colors duration-300">Enseignement bilingue français/anglais (65% / 35%)</p>
                  </li>
                  <li className="flex items-start group">
                    <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient shadow-sm group-hover:shadow-md text-white transition-all duration-300">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <p className="text-foreground pt-1 group-hover:text-accent transition-colors duration-300">Approche par compétences (APC) et certification AACSB</p>
                  </li>
                  <li className="flex items-start group">
                    <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient shadow-sm group-hover:shadow-md text-white transition-all duration-300">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <p className="text-foreground pt-1 group-hover:text-accent transition-colors duration-300">Simulations de négociation commerciale et jeux de rôle</p>
                  </li>
                  <li className="flex items-start group">
                    <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient shadow-sm group-hover:shadow-md text-white transition-all duration-300">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <p className="text-foreground pt-1 group-hover:text-accent transition-colors duration-300">Formation continue pour professionnels (plusieurs milliers de cadres formés)</p>
                  </li>
                  <li className="flex items-start group">
                    <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient shadow-sm group-hover:shadow-md text-white transition-all duration-300">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <p className="text-foreground pt-1 group-hover:text-accent transition-colors duration-300">Organisation de conférences pédagogiques internationales (Shanghai, Utah Valley)</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gradient-card shadow-card p-8 rounded-xl card-hover backdrop-blur-sm">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-secondary mb-8 inline-block relative">
                Encadrement et Supervision
                <span className="absolute bottom-0 left-0 h-1 w-1/2 bg-gradient-to-r from-primary to-accent rounded-full"></span>
              </h3>
              
              <div className="space-y-10">
                <div>
                  <h4 className="font-bold text-xl mb-4 text-foreground">Encadrement doctoral</h4>
                  <p className="mb-6 text-foreground leading-relaxed">
                    Suite à l'obtention de mon HDR en 2024, je peux désormais diriger des travaux doctoraux. Je co-encadre déjà:
                  </p>
                  <ul className="mt-3 space-y-5">
                    <li className="flex items-start group">
                      <div className="mr-4 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary">
                        <i className="fas fa-user-graduate text-xs"></i>
                      </div>
                      <div>
                        <p className="text-foreground font-medium group-hover:text-accent transition-colors duration-300">
                          DAN Serge (2019-2024): Co-encadrement avec Pr. Pascal LIÈVRE
                        </p>
                        <p className="text-foreground text-sm">
                          Programme STAM, communauté en ligne B2B en métrologie industrielle. 50% d'encadrement, 5 communications réalisées.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="mr-4 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary">
                        <i className="fas fa-user-graduate text-xs"></i>
                      </div>
                      <div>
                        <p className="text-foreground font-medium group-hover:text-accent transition-colors duration-300">
                          Membre du jury de thèse de doctorat (Juin 2024)
                        </p>
                        <p className="text-foreground text-sm">
                          GUIGUARD Laure, Université Lyon 3, Direction: Pr. Régine Vanheems et Catherine Pardo.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="mr-4 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary">
                        <i className="fas fa-user-graduate text-xs"></i>
                      </div>
                      <div>
                        <p className="text-foreground font-medium group-hover:text-accent transition-colors duration-300">
                          Comités de suivi doctoral (2021-2023)
                        </p>
                        <p className="text-foreground text-sm">
                          GUIGUARD Laure (Lyon 3) et KHRIFECH Salma (EM Normandie)
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-xl mb-4 text-foreground">Encadrement de masters</h4>
                  <p className="text-foreground leading-relaxed mb-4">
                    Je dirige depuis 2017 le Master 2 Direction Commerciale & International Business, un programme en alternance 
                    bilingue français-anglais. J'encadre régulièrement des mémoires-recherche et des contrats d'alternance.
                  </p>
                  <ul className="mt-3 space-y-3">
                    <li className="flex items-start group">
                      <div className="mr-4 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary">
                        <i className="fas fa-graduation-cap text-xs"></i>
                      </div>
                      <p className="text-foreground group-hover:text-accent transition-colors duration-300">
                        <strong>MESFIOUI Meriem</strong> (2017-2018): "L'animation des communautés en ligne B2B" - Doctorante au CleRMa
                      </p>
                    </li>
                    <li className="flex items-start group">
                      <div className="mr-4 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary">
                        <i className="fas fa-graduation-cap text-xs"></i>
                      </div>
                      <p className="text-foreground group-hover:text-accent transition-colors duration-300">
                        12-15 étudiants de M2 par an en contrats d'alternance et de stage avec problématique de recherche
                      </p>
                    </li>
                    <li className="flex items-start group">
                      <div className="mr-4 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary">
                        <i className="fas fa-graduation-cap text-xs"></i>
                      </div>
                      <p className="text-foreground group-hover:text-accent transition-colors duration-300">
                        12-14 projets de recherche M1 par an dans le cadre du cours "Initiation à la recherche" (format article)
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
