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
    <section id="tabs-section" className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-wrap border-b border-gray-200 mb-8">
          <Button 
            variant="ghost" 
            className={`px-6 py-3 font-medium text-lg border-b-2 rounded-none ${activeTab === 'research' ? 'border-[#0a3d62] text-[#0a3d62]' : 'border-transparent text-[#4a4a4a] hover:text-[#0a3d62]'}`}
            onClick={() => handleTabClick('research')}
          >
            Recherche
          </Button>
          <Button 
            variant="ghost" 
            className={`px-6 py-3 font-medium text-lg border-b-2 rounded-none ${activeTab === 'publications' ? 'border-[#0a3d62] text-[#0a3d62]' : 'border-transparent text-[#4a4a4a] hover:text-[#0a3d62]'}`}
            onClick={() => handleTabClick('publications')}
          >
            Publications
          </Button>
          <Button 
            variant="ghost" 
            className={`px-6 py-3 font-medium text-lg border-b-2 rounded-none ${activeTab === 'teaching' ? 'border-[#0a3d62] text-[#0a3d62]' : 'border-transparent text-[#4a4a4a] hover:text-[#0a3d62]'}`}
            onClick={() => handleTabClick('teaching')}
          >
            Enseignement
          </Button>
        </div>

        {/* Research Tab Content */}
        <div className={activeTab === 'research' ? 'block' : 'hidden'}>
          <h2 id="research" className="text-2xl md:text-3xl font-bold text-[#0a3d62] mb-8">Domaines de Recherche</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#f5f5f5] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#800020] mb-4">Marketing Expérientiel</h3>
              <p className="mb-4 text-[#4a4a4a]">
                Mes recherches se concentrent sur l'expérience client et les stratégies de marketing expérientiel, 
                en particulier dans les contextes de services et du retail.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-white px-3 py-1 rounded-full text-sm text-[#4a4a4a]">Expérience client</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm text-[#4a4a4a]">Satisfaction</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm text-[#4a4a4a]">Retail</span>
              </div>
            </div>
            
            <div className="bg-[#f5f5f5] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#800020] mb-4">Comportement du Consommateur</h3>
              <p className="mb-4 text-[#4a4a4a]">
                J'étudie les facteurs influençant les décisions d'achat et la satisfaction des consommateurs, 
                avec un intérêt particulier pour les dimensions expérientielles et émotionnelles.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-white px-3 py-1 rounded-full text-sm text-[#4a4a4a]">Psychologie</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm text-[#4a4a4a]">Décision d'achat</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm text-[#4a4a4a]">Émotions</span>
              </div>
            </div>
          </div>
          
          <Card className="bg-[#f5f5f5] p-8 rounded-lg">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold text-[#800020] mb-6">Projets de Recherche Actuels</h3>
              
              <div className="space-y-6">
                {researchProjects.map((project, index) => (
                  <div className="flex" key={index}>
                    <div className="mr-6 flex-shrink-0 flex items-start mt-1">
                      <div className="w-8 h-8 rounded-full bg-[#0a3d62] text-white flex items-center justify-center">
                        <i className="fas fa-flask"></i>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{project.title}</h4>
                      <p className="text-[#4a4a4a]">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Publications Tab Content */}
        <div className={activeTab === 'publications' ? 'block' : 'hidden'}>
          <h2 id="publications" className="text-2xl md:text-3xl font-bold text-[#0a3d62] mb-8">Publications</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#800020] mb-4">Articles dans des Revues Académiques</h3>
            
            <div className="space-y-6">
              {publications.filter(pub => pub.type === 'article').map((publication, index) => (
                <div className="publication-item pb-6" key={index}>
                  <h4 className="font-bold text-lg mb-2">{publication.title}</h4>
                  <p className="italic text-[#4a4a4a] mb-2">{publication.journal}, {publication.year}</p>
                  <p className="text-[#4a4a4a] mb-3">{publication.description}</p>
                  <div className="flex items-center space-x-4">
                    {publication.pdfUrl && (
                      <a href={publication.pdfUrl} className="text-[#0a3d62] hover:underline flex items-center" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-file-pdf mr-2"></i> PDF
                      </a>
                    )}
                    {publication.doiUrl && (
                      <a href={publication.doiUrl} className="text-[#0a3d62] hover:underline flex items-center" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt mr-2"></i> DOI
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#800020] mb-4">Chapitres d'Ouvrages</h3>
            
            <div className="space-y-6">
              {publications.filter(pub => pub.type === 'chapter').map((publication, index) => (
                <div className="publication-item pb-6" key={index}>
                  <h4 className="font-bold text-lg mb-2">{publication.title}</h4>
                  <p className="italic text-[#4a4a4a] mb-2">Dans: {publication.journal}, {publication.year}</p>
                  <p className="text-[#4a4a4a] mb-3">{publication.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-[#800020] mb-4">Communications en Conférences</h3>
            
            <div className="space-y-6">
              {publications.filter(pub => pub.type === 'conference').map((publication, index) => (
                <div className="publication-item pb-6" key={index}>
                  <h4 className="font-bold text-lg mb-2">{publication.title}</h4>
                  <p className="italic text-[#4a4a4a] mb-2">{publication.journal}, {publication.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Teaching Tab Content */}
        <div className={activeTab === 'teaching' ? 'block' : 'hidden'}>
          <h2 id="teaching" className="text-2xl md:text-3xl font-bold text-[#0a3d62] mb-8">Activités d'Enseignement</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#f5f5f5] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#800020] mb-4">Cours enseignés</h3>
              <ul className="space-y-4">
                {courses.map((course, index) => (
                  <li className="flex" key={index}>
                    <div className="mr-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#0a3d62] text-white">
                      <i className="fas fa-book"></i>
                    </div>
                    <div>
                      <p className="font-semibold">{course.title}</p>
                      <p className="text-sm text-[#4a4a4a]">{course.level}, {course.institution}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#f5f5f5] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#800020] mb-4">Méthodes Pédagogiques</h3>
              <p className="mb-6 text-[#4a4a4a]">
                J'adopte une approche pédagogique mixte qui combine théorie et pratique, favorisant l'apprentissage actif 
                et le développement des compétences professionnelles des étudiants.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 text-[#0a3d62] mt-1"><i className="fas fa-check-circle"></i></div>
                  <p>Études de cas réels et analyses sectorielles</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-[#0a3d62] mt-1"><i className="fas fa-check-circle"></i></div>
                  <p>Projets de groupe avec des entreprises partenaires</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-[#0a3d62] mt-1"><i className="fas fa-check-circle"></i></div>
                  <p>Simulations et jeux de rôle pour développer des compétences pratiques</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-[#0a3d62] mt-1"><i className="fas fa-check-circle"></i></div>
                  <p>Intégration des technologies numériques et des médias sociaux</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-[#0a3d62] mt-1"><i className="fas fa-check-circle"></i></div>
                  <p>Conférences de professionnels invités et témoignages d'experts</p>
                </li>
              </ul>
            </div>
          </div>
          
          <Card className="bg-[#f5f5f5] p-8 rounded-lg">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold text-[#800020] mb-6">Encadrement et Supervision</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-lg mb-3">Direction de Thèses et Mémoires</h4>
                  <p className="mb-4 text-[#4a4a4a]">
                    J'encadre régulièrement des étudiants de Master 2 dans leurs travaux de recherche et mémoires professionnels, 
                    principalement dans les domaines du marketing expérientiel, du comportement du consommateur et des stratégies de communication.
                  </p>
                  <p className="text-[#4a4a4a]">
                    Quelques exemples de sujets récemment encadrés:
                  </p>
                  <ul className="mt-3 space-y-2 pl-6 list-disc">
                    <li>"L'impact des stratégies de marketing sensoriel sur l'expérience client dans le secteur du luxe"</li>
                    <li>"L'influence des réseaux sociaux sur les décisions d'achat des Millennials"</li>
                    <li>"Stratégies d'innovation dans la distribution: étude comparative de cas européens"</li>
                    <li>"L'expérience client omnicanale: défis et opportunités pour les retailers"</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3">Activités de Tutorat</h4>
                  <p className="text-[#4a4a4a]">
                    Je supervise également des projets professionnels et des stages, assurant un lien entre la formation académique 
                    et le monde professionnel. Cette activité permet aux étudiants de développer leurs compétences pratiques 
                    et de créer des connexions dans le milieu professionnel.
                  </p>
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
