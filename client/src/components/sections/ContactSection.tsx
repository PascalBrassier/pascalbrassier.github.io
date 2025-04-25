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
    <section id="contact" className="py-20 bg-gradient-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-noise-pattern"></div>
      <div className="absolute top-40 left-0 w-96 h-96 bg-gradient-to-br from-secondary/20 to-transparent rounded-full filter blur-3xl -ml-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/20 to-transparent rounded-full filter blur-3xl -mr-48 -mb-48"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Contact</span>
          </h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <Card className="md:w-1/2 bg-gradient-card rounded-xl shadow-card p-8 card-hover backdrop-blur-sm animate-slide-right">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-secondary mb-8 inline-block relative">
                Coordonnées
                <span className="absolute bottom-0 left-0 h-1 w-1/2 bg-gradient-to-r from-primary to-accent rounded-full"></span>
              </h3>
              
              <div className="space-y-8">
                <div className="flex group">
                  <div className="mr-6 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient shadow-md text-white group-hover:scale-110 transition-all duration-300">
                    <i className="fas fa-building"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Adresse Professionnelle</h4>
                    <p className="text-foreground leading-relaxed">
                      Université Clermont Auvergne<br />
                      IAE Clermont Auvergne<br />
                      11 Boulevard Charles de Gaulle<br />
                      63000 Clermont-Ferrand, France
                    </p>
                  </div>
                </div>
                
                <div className="flex group">
                  <div className="mr-6 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient shadow-md text-white group-hover:scale-110 transition-all duration-300">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Email</h4>
                    <a href="mailto:pascal.brassier@uca.fr" className="text-primary hover:text-accent transition-colors duration-300">
                      pascal.brassier@uca.fr
                    </a>
                  </div>
                </div>
                
                <div className="flex group">
                  <div className="mr-6 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient shadow-md text-white group-hover:scale-110 transition-all duration-300">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Téléphone</h4>
                    <p className="text-foreground">+33 (0)4 XX XX XX XX</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-bold text-lg mb-4">Réseaux Sociaux & Profils Académiques</h4>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://www.linkedin.com/in/pascalbrassier/" target="_blank" rel="noopener noreferrer" 
                       className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient shadow-md text-white hover:scale-110 transition-all duration-300">
                      <i className="fab fa-linkedin-in text-lg"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" 
                       className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient shadow-md text-white hover:scale-110 transition-all duration-300">
                      <i className="fab fa-researchgate text-lg"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" 
                       className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient shadow-md text-white hover:scale-110 transition-all duration-300">
                      <i className="fas fa-graduation-cap text-lg"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" 
                       className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient shadow-md text-white hover:scale-110 transition-all duration-300">
                      <i className="fab fa-twitter text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:w-1/2 bg-gradient-card rounded-xl shadow-card p-8 card-hover backdrop-blur-sm animate-slide-left">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-secondary mb-8 inline-block relative">
                Formulaire de Contact
                <span className="absolute bottom-0 left-0 h-1 w-1/2 bg-gradient-to-r from-primary to-accent rounded-full"></span>
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">Nom</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-white/70 backdrop-blur-sm border-border focus:border-primary focus:ring-primary/20"
                            placeholder="Votre nom" 
                          />
                        </FormControl>
                        <FormMessage className="text-secondary" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">Email</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            className="bg-white/70 backdrop-blur-sm border-border focus:border-primary focus:ring-primary/20"
                            placeholder="Votre email" 
                          />
                        </FormControl>
                        <FormMessage className="text-secondary" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">Sujet</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-white/70 backdrop-blur-sm border-border focus:border-primary focus:ring-primary/20"
                            placeholder="Sujet de votre message" 
                          />
                        </FormControl>
                        <FormMessage className="text-secondary" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={5} 
                            className="bg-white/70 backdrop-blur-sm border-border focus:border-primary focus:ring-primary/20"
                            placeholder="Votre message" 
                          />
                        </FormControl>
                        <FormMessage className="text-secondary" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isPending}
                    className="btn-fancy bg-gradient w-full mt-4"
                  >
                    <span className="relative z-10 px-2">
                      {isPending ? 'Envoi en cours...' : 'Envoyer le message'}
                    </span>
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
