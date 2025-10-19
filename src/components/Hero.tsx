import { ArrowRight, Download, Eye, FileText, Sun, Moon, Palette, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Hero = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [isPastelMode, setIsPastelMode] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "AI Engineer",
    "Software Developer", 
    "Website Creator"
  ];

  useEffect(() => {
    const root = window.document.documentElement;
    const savedPastelMode = localStorage.getItem("mode") === "pastel";
    
    setIsPastelMode(savedPastelMode);
    
    if (savedPastelMode) {
      // Pastel mode
      root.classList.remove("dark");
      root.classList.add("pastel-mode");
    } else {
      // Dark mode
      root.classList.add("dark");
      root.classList.remove("pastel-mode");
    }
  }, []);

  // Typing animation effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        // Typing
        if (currentText.length < current.length) {
          setCurrentText(current.substring(0, currentText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(current.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const toggleMode = () => {
    const root = window.document.documentElement;
    const newIsPastelMode = !isPastelMode;
    
    setIsPastelMode(newIsPastelMode);
    
    if (newIsPastelMode) {
      // Switch to Pastel mode
      root.classList.remove("dark");
      root.classList.add("pastel-mode");
      localStorage.setItem("mode", "pastel");
    } else {
      // Switch to Dark mode
      root.classList.add("dark");
      root.classList.remove("pastel-mode");
      localStorage.setItem("mode", "dark");
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mode Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          onClick={toggleMode}
          variant="ghost"
          size="icon"
          className={`glass-card transition-smooth w-11 h-11 rounded-xl border backdrop-blur-md ${
            isPastelMode 
              ? 'border-accent/30 hover:glow-pink' 
              : 'border-primary/20 hover:glow-cyber'
          }`}
          aria-label={isPastelMode ? 'Switch to Dark Mode' : 'Switch to Pastel Mode'}
        >
          {isPastelMode ? (
            <Moon className="h-5 w-5 text-accent animate-in spin-in-180 duration-500" />
          ) : (
            <Palette className="h-5 w-5 text-primary animate-in spin-in-180 duration-500" />
          )}
        </Button>
      </div>

      {/* Animated background */}
      <div className="absolute inset-0 gradient-mesh opacity-60" />
      
      {/* Floating orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-cyber opacity-30 blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full glass-card text-sm font-medium text-primary border border-primary/20">
              Available for Freelance Work
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Malaveeka Sridhar</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Developer by Code, Innovator by Heart.
          </p>

          <div className="text-lg md:text-xl text-muted-foreground min-h-[2rem] flex items-center justify-center">
            <span className="font-medium">
              {currentText}
              <span className="typing-cursor text-primary ml-1">|</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground glow-cyber transition-smooth"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="glass-card hover:glow-purple transition-smooth border-primary/20"
              onClick={() => scrollToSection("achievements")}
            >
              View Achievements
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="glass-card hover:glow-purple transition-smooth border-primary/20"
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="glass-card hover:glow-cyber transition-smooth"
              onClick={() => setShowResumeModal(true)}
            >
              <Eye className="mr-2 h-5 w-5" />
              View Resume
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="glass-card hover:bg-accent transition-smooth"
              asChild
            >
              <a href="/MalaveekaSridhar-Resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      <Dialog open={showResumeModal} onOpenChange={setShowResumeModal}>
        <DialogContent className="max-w-6xl w-[95vw] h-[95vh] glass-card p-2">
          <DialogHeader className="pb-2">
            <DialogTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Resume Preview
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 h-[calc(95vh-80px)] rounded-lg overflow-hidden">
            <iframe
              src="/MalaveekaSridhar-Resume.pdf#zoom=FitH"
              className="w-full h-full border-0"
              title="Resume Preview"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary/70 hover:text-primary transition-colors" />
      </div>
    </section>
  );
};

export default Hero;
