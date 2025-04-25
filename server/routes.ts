import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "@db";
import { 
  researchProjects, 
  publications, 
  courses, 
  contactMessages, 
  insertContactMessageSchema 
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API prefix
  const apiPrefix = '/api';
  
  // Get all research projects
  app.get(`${apiPrefix}/research-projects`, async (req, res) => {
    try {
      const projects = await db.query.researchProjects.findMany({
        orderBy: (projects, { desc }) => [desc(projects.createdAt)]
      });
      return res.status(200).json(projects);
    } catch (error) {
      console.error('Error fetching research projects:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Get all publications
  app.get(`${apiPrefix}/publications`, async (req, res) => {
    try {
      const allPublications = await db.query.publications.findMany({
        orderBy: (publications, { desc }) => [desc(publications.year)]
      });
      return res.status(200).json(allPublications);
    } catch (error) {
      console.error('Error fetching publications:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Get all courses
  app.get(`${apiPrefix}/courses`, async (req, res) => {
    try {
      const allCourses = await db.query.courses.findMany();
      return res.status(200).json(allCourses);
    } catch (error) {
      console.error('Error fetching courses:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Submit contact form
  app.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      const [newMessage] = await db.insert(contactMessages)
        .values(validatedData)
        .returning();

      return res.status(201).json({
        message: 'Message sent successfully',
        data: newMessage
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error('Error sending contact message:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
