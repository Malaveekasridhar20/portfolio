import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Trophy, Award, Star, Image, X } from "lucide-react";
import { useState } from "react";

interface Achievement {
  id: number;
  title: string;
  event: string;
  year: string;
  prize: string;
  category: string;
  linkedinLink?: string;
  image?: string;
  icon: "trophy" | "award" | "star";
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Winner",
    event: "ILink Digital AI Hackathon",
    year: "2025",
    prize: "Trophy + ₹10,000 Amazon voucher",
    category: "Hackathon",
    icon: "trophy",
    linkedinLink: "https://www.linkedin.com/posts/malaveeka-sridhar-750b70252_ilinkdigital-aihackathon-beak-activity-7371100926616662018-a9Gv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD523ywBNXfMokeL-30dwR2ckklUYP60Uwk",
    image: "/achievements/ilink-hackathon.png"
  },
  {
    id: 2,
    title: "Winner - App Development",
    event: "SindhanAI Hackathon",
    year: "2025",
    prize: "₹10,000 cash",
    category: "Hackathon",
    icon: "trophy",
    linkedinLink: "https://www.linkedin.com/posts/malaveeka-sridhar-750b70252_goroute-hackathonwinner-sindhanai-activity-7326874681183997953-NWCm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD523ywBNXfMokeL-30dwR2ckklUYP60Uwk",
    image: "/achievements/sindhanai-hackathon.png"
  },
  {
    id: 3,
    title: "Winner - Paper Presentation",
    event: "THIRAN 2025 - AI in Action",
    year: "2025",
    prize: "Cash reward",
    category: "AI in Action",
    icon: "award",
    linkedinLink: "https://www.linkedin.com/posts/malaveeka-sridhar-750b70252_legionx-medcare-healthcareinnovation-activity-7325489053649244160-x1-s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD523ywBNXfMokeL-30dwR2ckklUYP60Uwk",
    image: "/achievements/thiran-paper.png"
  },
  {
    id: 4,
    title: "Top 5 - Project Expo",
    event: "THIRAN 2025",
    year: "2025",
    prize: "Cash reward",
    category: "Project Expo",
    icon: "star",
    linkedinLink: "https://www.linkedin.com/posts/malaveeka-sridhar-750b70252_legionx-medcare-thiran2025-activity-7311473215615156225-Ab-n?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD523ywBNXfMokeL-30dwR2ckklUYP60Uwk",
    image: "/achievements/thiran-expo.png"
  },
  {
    id: 5,
    title: "Winner - Startathon",
    event: "Educational Innovation",
    year: "2024",
    prize: "Startup Competition Winner",
    category: "Competition",
    icon: "trophy",
    linkedinLink: "https://www.linkedin.com/posts/malaveeka-sridhar-750b70252_startathon-hackothon-education-activity-7183794608072536065-n7Ms?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD523ywBNXfMokeL-30dwR2ckklUYP60Uwk",
    image: "/achievements/analytix-startup.png"
  },
  {
    id: 6,
    title: "Winner - Code Machine",
    event: "ANALYTIX FEST",
    year: "2024",
    prize: "Cash reward",
    category: "Coding Competition",
    icon: "trophy",
    linkedinLink: "https://www.linkedin.com/posts/malaveeka-sridhar-750b70252_codemachine-bishophebercollege-datascience-activity-7176783830475833344-t9kj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD523ywBNXfMokeL-30dwR2ckklUYP60Uwk",
    image: "/achievements/analytix-code.png"
  },
  {
    id: 7,
    title: "Winner - Code Machine",
    event: "ANALYTIKHA",
    year: "2024",
    prize: "Coding Excellence + Cash reward",
    category: "Competition",
    icon: "trophy",
    linkedinLink: "https://www.linkedin.com/posts/malaveeka-sridhar-750b70252_codingchallenge-dataanalytics-datascience-activity-7167183629989691392-dyYq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD523ywBNXfMokeL-30dwR2ckklUYP60Uwk",
    image: "/achievements/analytikha-code.png"
  },
  {
    id: 8,
    title: "Mentorship Award",
    event: "Reva Hack 2023",
    year: "2023",
    prize: "Recognition for Outstanding Performance",
    category: "Hackathon",
    icon: "award",
    linkedinLink: "https://www.linkedin.com/posts/malaveeka-sridhar-750b70252_revahack-revauniversity-hackathon2023-activity-7139298819472596992-uc-i?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD523ywBNXfMokeL-30dwR2ckklUYP60Uwk",
    image: "/achievements/reva-hack.png"
  }
];

const getIcon = (iconType: "trophy" | "award" | "star") => {
  switch (iconType) {
    case "trophy":
      return <Trophy className="w-6 h-6 text-yellow-500" />;
    case "award":
      return <Award className="w-6 h-6 text-blue-500" />;
    case "star":
      return <Star className="w-6 h-6 text-purple-500" />;
    default:
      return <Trophy className="w-6 h-6 text-yellow-500" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Hackathon":
      return "bg-green-500 text-white dark:bg-green-600 dark:text-white pastel-mode:bg-green-600 pastel-mode:text-white";
    case "Academic":
      return "bg-blue-500 text-white dark:bg-blue-600 dark:text-white pastel-mode:bg-blue-600 pastel-mode:text-white";
    case "Competition":
      return "bg-purple-500 text-white dark:bg-purple-600 dark:text-white pastel-mode:bg-purple-600 pastel-mode:text-white";
    case "AI in Action":
      return "bg-indigo-500 text-white dark:bg-indigo-600 dark:text-white pastel-mode:bg-indigo-600 pastel-mode:text-white";
    case "Project Expo":
      return "bg-orange-500 text-white dark:bg-orange-600 dark:text-white pastel-mode:bg-orange-600 pastel-mode:text-white";
    case "Coding Competition":
      return "bg-red-500 text-white dark:bg-red-600 dark:text-white pastel-mode:bg-red-600 pastel-mode:text-white";
    default:
      return "bg-gray-500 text-white dark:bg-gray-600 dark:text-white pastel-mode:bg-gray-600 pastel-mode:text-white";
  }
};

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const openImageModal = (imageSrc: string, title: string) => {
    setSelectedImage(imageSrc);
    setSelectedTitle(title);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setSelectedTitle("");
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of awards, recognitions, and achievements earned through dedication to innovation and excellence in technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 glass-card border-primary/20"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getIcon(achievement.icon)}
                    <Badge className={getCategoryColor(achievement.category)}>
                      {achievement.category}
                    </Badge>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {achievement.year}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-lg leading-tight">
                    {achievement.title}
                  </h3>

                  <p className="text-primary font-semibold">
                    {achievement.event}
                  </p>

                  {/* Achievement Image Display */}
                  {achievement.image && achievement.image !== "#" && (
                    <div className="my-3">
                      <div
                        className="relative overflow-hidden rounded-lg border-2 border-primary/30 bg-white shadow-lg cursor-pointer group"
                        onClick={() => openImageModal(achievement.image!, `${achievement.event} - ${achievement.title}`)}
                      >
                        <img
                          src={achievement.image}
                          alt={`${achievement.event} - ${achievement.title}`}
                          className="w-full h-64 object-contain bg-white hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            console.log('Achievement image failed to load:', achievement.image);
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

                  <p className="text-sm text-muted-foreground">
                    {achievement.prize}
                  </p>
                </div>

                {achievement.linkedinLink && (
                  <div className="mt-4 pt-4 border-t border-primary/10">
                    <a
                      href={achievement.linkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group-hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      LinkedIn Verification
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Each achievement represents a milestone in my journey of continuous learning and innovation.
          </p>
        </div>

        {/* Image Zoom Modal */}
        <Dialog open={!!selectedImage} onOpenChange={closeImageModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-transparent border-0">
            <DialogHeader className="sr-only">
              <DialogTitle>{selectedTitle} - Achievement Image</DialogTitle>
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

export default Achievements;