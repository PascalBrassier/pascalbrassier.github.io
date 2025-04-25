export interface ResearchProject {
  id: number;
  title: string;
  description: string;
}

export interface Publication {
  id: number;
  type: 'article' | 'chapter' | 'conference';
  title: string;
  journal: string;
  year: number;
  description?: string;
  pdfUrl?: string;
  doiUrl?: string;
}

export interface Course {
  id: number;
  title: string;
  level: string;
  institution: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}
