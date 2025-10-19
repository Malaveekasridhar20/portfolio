import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI/ML",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP", "LLMs", "Hugging Face", "YOLO"],
      color: "text-primary"
    },
    {
      title: "Software Development",
      skills: ["React.js", "Node.js", "Java", "Flutter", "React Native"],
      color: "text-accent"
    },
    {
      title: "Web Development",
      skills: ["React", "Tailwind CSS", "Django", "PostgreSQL", "SQL", "MongoDB", "HTML", "CSS", "JS"],
      color: "text-blue-400 dark:text-blue-300"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Figma", "VS Code", "Streamlit", "Power BI"],
      color: "text-muted-foreground"
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills & <span className="text-gradient">Tech Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Crafting intelligent solutions with cutting-edge technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <Card
                key={idx}
                className="glass-card border-primary/20 hover:glow-cyber transition-smooth p-6 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className={`text-2xl font-semibold mb-4 ${category.color}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <Badge
                      key={skillIdx}
                      variant="secondary"
                      className="glass-card text-sm px-4 py-2 hover:scale-105 hover:glow-purple transition-bounce cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
