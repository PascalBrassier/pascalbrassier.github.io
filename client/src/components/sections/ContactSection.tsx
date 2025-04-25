import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { contactSchema } from "@/lib/validation";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", values);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé",
        description: "Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    mutate(values);
  };

  return (
    <section id="contact" className="py-16 bg-[#f5f5f5] border-t border-gray-200">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0a3d62] mb-10 text-center">Contact</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <Card className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold text-[#800020] mb-6">Coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-6 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#0a3d62] text-white">
                    <i className="fas fa-building"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Adresse Professionnelle</h4>
                    <p className="text-[#4a4a4a]">
                      ESC Clermont Business School<br />
                      4 Boulevard Trudaine<br />
                      63000 Clermont-Ferrand, France
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#0a3d62] text-white">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <a href="mailto:pascal.brassier@esc-clermont.fr" className="text-[#0a3d62] hover:underline">
                      pascal.brassier@esc-clermont.fr
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#0a3d62] text-white">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Téléphone</h4>
                    <p className="text-[#4a4a4a]">+33 (0)4 XX XX XX XX</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-bold mb-4">Réseaux Sociaux & Profils Académiques</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/pascalbrassier/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0a3d62] text-white hover:bg-[#2c3e50] transition duration-300">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0a3d62] text-white hover:bg-[#2c3e50] transition duration-300">
                      <i className="fab fa-researchgate"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0a3d62] text-white hover:bg-[#2c3e50] transition duration-300">
                      <i className="fas fa-graduation-cap"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0a3d62] text-white hover:bg-[#2c3e50] transition duration-300">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold text-[#800020] mb-6">Formulaire de Contact</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#4a4a4a] font-medium">Nom</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a3d62]"
                            placeholder="Votre nom" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#4a4a4a] font-medium">Email</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a3d62]"
                            placeholder="Votre email" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#4a4a4a] font-medium">Sujet</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a3d62]"
                            placeholder="Sujet de votre message" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#4a4a4a] font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={5} 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a3d62]"
                            placeholder="Votre message" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isPending}
                    className="bg-[#0a3d62] text-white py-2 px-6 rounded-md hover:bg-[#2c3e50] transition duration-300 shadow-md"
                  >
                    {isPending ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
