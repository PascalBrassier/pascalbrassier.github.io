import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit comporter au moins 2 caractères"),
  email: z.string().email("Veuillez fournir une adresse email valide"),
  subject: z.string().min(5, "Le sujet doit comporter au moins 5 caractères"),
  message: z.string().min(10, "Le message doit comporter au moins 10 caractères"),
});
