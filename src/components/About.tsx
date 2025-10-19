import { useState } from "react";
import { GraduationCap, Briefcase, Settings, Smartphone, Globe, Calculator, Brain, Wrench } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm an engineer who believes technology should feel human. I design intelligent
              systems that think, adapt, and inspire.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 glass-card">
              <TabsTrigger value="experience" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-smooth">
                <Briefcase className="mr-2 h-4 w-4" />
                Experience
              </TabsTrigger>
              <TabsTrigger value="education" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-smooth">
                <GraduationCap className="mr-2 h-4 w-4" />
                Education
              </TabsTrigger>
              <TabsTrigger value="services" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-smooth">
                <Settings className="mr-2 h-4 w-4" />
                Services
              </TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="mt-8 space-y-4 animate-fade-in">
              <Card className="glass-card border-primary/20 hover:glow-cyber transition-smooth">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Software Development Intern
                  </h3>
                  <p className="text-muted-foreground mb-2">TriStone Industries</p>
                  <p className="text-sm text-muted-foreground mb-3">2025</p>
                  <p className="text-sm">
                    Developed Flutter-based billing system with SQLite integration for invoice management.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-primary/20 hover:glow-cyber transition-smooth">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    AI Engineer
                  </h3>
                  <p className="text-muted-foreground mb-2">NIT Trichy - IRCTC Project</p>
                  <p className="text-sm text-muted-foreground mb-3">2025</p>
                  <p className="text-sm">
                    Worked on AI-powered solutions for Indian Railways Delay system optimization.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-primary/20 hover:glow-cyber transition-smooth">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Data Analyst Intern
                  </h3>
                  <p className="text-muted-foreground mb-2">Pacific Creation</p>
                  <p className="text-sm text-muted-foreground mb-3">2023</p>
                  <p className="text-sm">
                    Analyzed business data and created insights using Excel.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education" className="mt-8 space-y-4 animate-fade-in">
              <Card className="glass-card border-primary/20 hover:glow-cyber transition-smooth">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    B.Tech in Artificial Intelligence and Data Science
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Saranathan College Of Engineering, Tiruchirappalli
                  </p>
                  <p className="text-sm text-muted-foreground">2022 - 2026</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="services" className="mt-8 space-y-4 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="glass-card border-primary/20 hover:glow-purple transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Smartphone className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary">
                        Custom App Development
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Flutter-based mobile applications with cross-platform compatibility, 
                      SQLite integration, and modern UI/UX design.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-primary/20 hover:glow-purple transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary">
                        Website Creation
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Responsive websites using React, TypeScript, and modern frameworks. 
                      SEO-optimized with fast loading times and interactive features.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-primary/20 hover:glow-purple transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Calculator className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary">
                        Billing System Solutions
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Complete billing and invoice management systems with inventory tracking, 
                      client management, and automated reporting features.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-primary/20 hover:glow-purple transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Brain className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary">
                        AI Integration Services
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      AI-powered solutions including chatbots, data analysis, 
                      machine learning models, and intelligent automation systems.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-primary/20 hover:glow-purple transition-smooth md:col-span-2">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Wrench className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary">
                        Software & Support
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ongoing maintenance, bug fixes, feature updates, and technical support 
                      for existing applications. Performance optimization and security updates included.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
