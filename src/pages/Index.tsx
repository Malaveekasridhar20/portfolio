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
      <footer className="py-12 border-t border-primary/20 glass-card" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">Malaveeka Sridhar</h3>
              <p className="text-sm text-muted-foreground">
                Freelance AI Engineer & Full-Stack Developer based in Tiruchirappalli, Tamil Nadu. 
                Specializing in AI/ML, React, Flutter, and custom software solutions.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">Quick Links</h3>
              <nav aria-label="Footer navigation">
                <ul className="space-y-2 text-sm">
                  <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Me</a></li>
                  <li><a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills & Expertise</a></li>
                  <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Client Projects</a></li>
                  <li><a href="#achievements" className="text-muted-foreground hover:text-primary transition-colors">Achievements</a></li>
                  <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact & Hire</a></li>
                </ul>
              </nav>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• AI & Machine Learning Solutions</li>
                <li>• Custom Software Development</li>
                <li>• Website & Web App Development</li>
                <li>• Mobile App Development (Flutter)</li>
                <li>• Billing & Invoice Systems</li>
                <li>• Technical Consulting</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary/10 pt-6">
            <p className="text-center text-sm text-muted-foreground">
              © 2025 Malaveeka Sridhar | AI Engineer, Software & Web Developer in Trichy | 
              Available for Freelance Projects | 
              <a href="mailto:malaveekasridhar20072004@gmail.com" className="hover:text-primary transition-colors ml-1">
                malaveekasridhar20072004@gmail.com
              </a> | 
              <a href="tel:+919790731131" className="hover:text-primary transition-colors ml-1">
                +91 9790731131
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
