import { db } from "./index";
import * as schema from "@shared/schema";

async function seed() {
  try {
    console.log("Seeding database...");

    // Seed research projects
    const researchProjectsData = [
      {
        title: "Marketing Sensoriel et Expérience en Magasin",
        description: "Étude des effets des stimuli sensoriels (musique, parfums, éclairage) sur l'expérience client et le comportement d'achat dans les environnements commerciaux."
      },
      {
        title: "Innovation dans les Services et Satisfaction Client",
        description: "Analyse de l'impact des innovations de service sur la perception de la qualité et la satisfaction des clients dans différents secteurs."
      },
      {
        title: "Stratégies de Communication Multicanale",
        description: "Recherche sur l'efficacité des stratégies de communication intégrées à travers différents canaux (traditionnels et digitaux) et leur impact sur l'engagement des consommateurs."
      }
    ];

    for (const project of researchProjectsData) {
      const existingProject = await db.query.researchProjects.findFirst({
        where: (projects, { eq }) => eq(projects.title, project.title)
      });

      if (!existingProject) {
        await db.insert(schema.researchProjects).values(project);
        console.log(`Added research project: ${project.title}`);
      }
    }

    // Seed publications - articles
    const publicationsArticlesData = [
      {
        type: "article",
        title: "Expérience client et satisfaction dans le secteur des services: une analyse comparative",
        journal: "Journal of Services Marketing",
        year: 2021,
        description: "Cette étude explore les relations entre divers aspects de l'expérience client et la satisfaction globale dans différents contextes de service.",
        pdfUrl: "#",
        doiUrl: "#"
      },
      {
        type: "article",
        title: "Le rôle du marketing sensoriel dans l'expérience d'achat au sein des magasins physiques",
        journal: "Recherche et Applications en Marketing",
        year: 2019,
        description: "Cette recherche étudie comment les stimuli sensoriels influencent le comportement des consommateurs et leur perception de l'expérience en magasin.",
        pdfUrl: "#",
        doiUrl: "#"
      },
      {
        type: "article",
        title: "L'innovation dans la distribution: impacts sur l'expérience client et la fidélisation",
        journal: "Journal of Retailing and Consumer Services",
        year: 2018,
        description: "Cet article analyse comment les innovations dans la distribution affectent l'expérience client et contribuent à la fidélisation dans un environnement commercial en évolution.",
        pdfUrl: "#",
        doiUrl: "#"
      }
    ];

    // Seed publications - chapters
    const publicationsChaptersData = [
      {
        type: "chapter",
        title: "Le marketing expérientiel: concepts et applications",
        journal: "Manuel de Marketing Avancé, Éditions Dunod",
        year: 2020,
        description: "Ce chapitre présente les fondements théoriques du marketing expérientiel et propose des applications pratiques dans différents contextes d'entreprise."
      },
      {
        type: "chapter",
        title: "Stratégies de communication multicanale: défis et opportunités",
        journal: "Communication Marketing à l'Ère Digitale, Éditions Vuibert",
        year: 2017,
        description: "Ce chapitre explore les enjeux de la communication multicanale et propose des stratégies pour optimiser l'intégration des différents canaux de communication."
      }
    ];

    // Seed publications - conferences
    const publicationsConferencesData = [
      {
        type: "conference",
        title: "L'impact du digital sur l'expérience client dans le secteur du retail",
        journal: "Congrès de l'Association Française du Marketing, Paris",
        year: 2021
      },
      {
        type: "conference",
        title: "Marketing sensoriel et comportement d'achat: une approche expérimentale",
        journal: "International Conference on Marketing and Consumer Behavior, Amsterdam",
        year: 2019
      },
      {
        type: "conference",
        title: "Innovation et satisfaction client: une étude longitudinale dans le secteur des services",
        journal: "European Marketing Academy Conference (EMAC), Glasgow",
        year: 2018
      }
    ];

    const allPublications = [
      ...publicationsArticlesData,
      ...publicationsChaptersData,
      ...publicationsConferencesData
    ];

    for (const publication of allPublications) {
      const existingPublication = await db.query.publications.findFirst({
        where: (publications, { eq, and }) => 
          and(
            eq(publications.title, publication.title),
            eq(publications.year, publication.year)
          )
      });

      if (!existingPublication) {
        await db.insert(schema.publications).values(publication);
        console.log(`Added publication: ${publication.title}`);
      }
    }

    // Seed courses
    const coursesData = [
      {
        title: "Marketing Fondamental",
        level: "Master 1",
        institution: "ESC Clermont Business School"
      },
      {
        title: "Comportement du Consommateur",
        level: "Master 1",
        institution: "ESC Clermont Business School"
      },
      {
        title: "Marketing Expérientiel",
        level: "Master 2",
        institution: "ESC Clermont Business School"
      },
      {
        title: "Communication Marketing Intégrée",
        level: "Master 2",
        institution: "ESC Clermont Business School"
      },
      {
        title: "Stratégie Marketing",
        level: "Master 2",
        institution: "ESC Clermont Business School"
      }
    ];

    for (const course of coursesData) {
      const existingCourse = await db.query.courses.findFirst({
        where: (courses, { eq, and }) => 
          and(
            eq(courses.title, course.title),
            eq(courses.level, course.level)
          )
      });

      if (!existingCourse) {
        await db.insert(schema.courses).values(course);
        console.log(`Added course: ${course.title}`);
      }
    }

    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
