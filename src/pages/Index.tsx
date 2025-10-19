import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";
import StructuredData from "@/components/StructuredData";
import HiddenAnalytics from "@/components/HiddenAnalytics";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import ContactAnalytics from "@/components/ContactAnalytics";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <StructuredData />
      <HiddenAnalytics />
      <AnalyticsDashboard />
      <ContactAnalytics />
      <Chatbot />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />

      {/* Footer */}
      <footer className="py-8 border-t border-primary/20 glass-card">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Malaveeka Sridhar | Freelance AI Engineer, Software & Web Developer | 
            Crafted with expertise in building intelligent and interactive digital experiences.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
