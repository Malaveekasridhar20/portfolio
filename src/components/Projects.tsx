import { ExternalLink, Github, Briefcase, Play, Image, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const isValidImage = (imagePath: string) => {
    return imagePath && imagePath !== "#" && (imagePath.startsWith('http') || imagePath.startsWith('/'));
  };

  const openImageModal = (imageSrc: string, title: string) => {
    setSelectedImage(imageSrc);
    setSelectedTitle(title);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setSelectedTitle("");
  };
  const clientProjects = [
    {
      title: "Rythym Cloth Rental Billing System",
      description: "Flutter + SQLite app for invoice, rental, and sales tracking. Real-time client project.",
      tags: ["Flutter", "SQLite", "Billing"],
      isClient: true,
      image: "/screenshots/rythym-billing.png",
      demoVideo: "/videos/rythym-demo.mp4",
    },
    {
      title: "Greedam Ram Finance Chit System",
      description: "React + Tailwind + PHP + MySQL web-based platform. Real-time client project.",
      tags: ["React", "Tailwind", "PHP", "MySQL"],
      isClient: true,
      image: "/screenshots/greedam-finance.png",
      demoVideo: "/videos/greedam-demo.mp4",
    },
    {
      title: "Photo Studio Billing System (Tri Stone Industries)",
      description: "Flutter + SQLite app with GST-enabled billing and invoice reporting. Real-time client project.",
      tags: ["Flutter", "SQLite", "GST"],
      isClient: true,
      image: "/screenshots/photo-studio-billing.png",
      demoVideo: "/videos/photo-studio-demo.mp4",
    },
    {
      title: "Rotary Club of Trichy Diamond City Website",
      description: "Official live website built with React.js, Tailwind, and Node.js. Real-time client project.",
      tags: ["React", "Tailwind", "Node.js"],
      link: "https://rctdc.org/",
      isClient: true,
      image: "/screenshots/rotary-club-website.png",
      demoVideo: "#", // No demo video for website
      isWebsite: true, // Special flag for website projects
    },
  ];

  const technicalProjects = [
    {
      title: "GoRoute – The Future of Public Transport",
      description: "AI-powered platform for real-time bus tracking, indoor navigation, and multi-modal transport integration.",
      tags: ["React Native", "Django", "AI/ML", "ARCore", "PostgreSQL"],
      github: "#",
      image: "#", // Add your image link here
    },
    {
      title: "MedCare",
      description: "AI-powered healthcare platform with real-time health monitoring, symptom analysis, and automated appointment scheduling.",
      tags: ["Flask", "Python", "Hugging Face", "Mistral AI"],
      github: "https://github.com/Malaveekasridhar20/MedCare",
      image: "#", // Add your image link here
    },
    {
      title: "Optimization Agriculture – Smart Irrigation System",
      description: "Automated irrigation system that adjusts water supply based on real-time weather data and soil moisture levels.",
      tags: ["IoT", "Python", "Weather API"],
      github: "#",
      image: "#", // Add your image link here
    },
    {
      title: "TalentScout – AI-Powered Hiring Assistant",
      description: "Domain-aware recruiter chatbot using advanced NLP and emotion recognition.",
      tags: ["OpenChat 3.5", "BERT", "Transformers", "Gradio"],
      github: "https://github.com/Malaveekasridhar20/TalentScout-AI-Powered-Hiring-Assistant",
      image: "#", // Add your image link here
    },
    {
      title: "EcoFinds",
      description: "React Native mobile app for discovering, buying, and reselling eco-friendly products.",
      tags: ["React Native", "Node.js", "SQLite"],
      github: "#",
      image: "#", // Add your image link here
    },
    {
      title: "AI-Powered Emotionally Adaptive AI Companion",
      description: "AI companion that adapts responses based on user's emotional state for improved engagement.",
      tags: ["OpenChat", "BERT", "PyTorch", "CUDA"],
      github: "https://github.com/Malaveekasridhar20/Emotional-Campanion-AI",
      image: "#", // Add your image link here
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Transforming ideas into intelligent digital experiences
            </p>
          </div>

          {/* Client Projects */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Real-Time Client Projects</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {clientProjects.map((project, idx) => (
                <Card
                  key={idx}
                  className="glass-card border-primary/20 hover:glow-cyber transition-smooth animate-fade-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <Badge className="bg-primary/20 text-primary border-primary/30 mb-2">
                          Client Project
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        {project.link && project.link !== "#" && (
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 hover:text-primary transition-smooth"
                            asChild
                          >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Project Image Display */}
                  {project.image && project.image !== "#" && (
                    <div className="px-6 pb-4">
                      <div
                        className="relative overflow-hidden rounded-lg border-2 border-primary/30 bg-white/95 shadow-lg cursor-pointer group"
                        onClick={() => openImageModal(project.image!, project.title)}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover object-center hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            console.log('Image failed to load:', project.image);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        {/* Zoom overlay indicator */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                            <Image className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIdx) => (
                        <Badge key={tagIdx} variant="secondary" className="glass-card">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.demoVideo && project.demoVideo !== "#" && (
                        <Button
                          size="sm"
                          className="bg-accent hover:bg-accent/90 text-accent-foreground"
                          asChild
                        >
                          <a href={project.demoVideo} target="_blank" rel="noopener noreferrer">
                            <Play className="h-4 w-4 mr-2" />
                            Demo Video
                          </a>
                        </Button>
                      )}
                      {project.link && project.link !== "#" && (
                        <Button
                          size="sm"
                          className={project.isWebsite ? "bg-accent hover:bg-accent/90 text-accent-foreground" : "border-primary/20 hover:bg-primary/10"}
                          variant={project.isWebsite ? "default" : "outline"}
                          asChild
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {project.isWebsite ? "🔗 Website" : "Live Site"}
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Projects */}
          <div className="space-y-6 mt-12">
            <h3 className="text-2xl font-bold">Technical Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalProjects.map((project, idx) => (
                <Card
                  key={idx}
                  className="glass-card border-primary/20 hover:glow-purple transition-smooth animate-fade-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl flex-1">{project.title}</CardTitle>
                      <div className="flex gap-2">
                        {project.github && project.github !== "#" && (
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 hover:text-primary transition-smooth"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Project Image Display */}
                  {project.image && project.image !== "#" && (
                    <div className="px-6 pb-4">
                      <div className="relative overflow-hidden rounded-lg border-2 border-primary/30 bg-white/95 shadow-lg">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover object-center hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            console.log('Image failed to load:', project.image);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  )}

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIdx) => (
                        <Badge key={tagIdx} variant="secondary" className="glass-card">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-2">
                      {project.github && project.github !== "#" && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary/20 hover:bg-primary/10"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Image Zoom Modal */}
        <Dialog open={!!selectedImage} onOpenChange={closeImageModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-transparent border-0">
            <DialogHeader className="sr-only">
              <DialogTitle>{selectedTitle} - Project Image</DialogTitle>
            </DialogHeader>
            <div className="relative">
              <Button
                onClick={closeImageModal}
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt={selectedTitle}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
