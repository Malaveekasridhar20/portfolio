import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  text: string;
  isBot: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! 👋 I'm Malaveeka's AI assistant. I know everything about her - skills, projects, achievements, experience, and more! What would you like to know?",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");

  // Comprehensive knowledge base about Malaveeka
  const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    // LinkedIn and Social Media specific queries
    if (lowerInput.includes("linkedin") || lowerInput.includes("social") || lowerInput.includes("profile")) {
      return "🔗 Malaveeka's Social Profiles:\n\n💼 LinkedIn:\nlinkedin.com/in/malaveeka-sridhar-750b70252/\n\n🐙 GitHub:\ngithub.com/Malaveekasridhar20\n\n📸 Instagram:\n@malaveekasridhar\n\nHer LinkedIn has all achievement verifications and professional updates!";
    }

    // GitHub specific queries
    if (lowerInput.includes("github") || lowerInput.includes("code") || lowerInput.includes("repository")) {
      return "🐙 GitHub Profile:\n\ngithub.com/Malaveekasridhar20\n\nFeatured Repositories:\n• MedCare - AI healthcare platform\n• TalentScout - AI hiring assistant\n• Emotional AI Companion\n• Multiple AI/ML and web projects\n\nCheck out her code and contributions!";
    }

    // Resume/CV queries
    if (lowerInput.includes("resume") || lowerInput.includes("cv") || lowerInput.includes("download")) {
      return "📄 Resume:\n\nYou can download Malaveeka's latest resume from her portfolio website. It includes all her skills, projects, achievements, and experience in detail.\n\nFor the most up-to-date version, contact her directly at malaveekasridhar20072004@gmail.com";
    }

    // Availability and hiring
    if (lowerInput.includes("available") || lowerInput.includes("freelance") || lowerInput.includes("hire") || lowerInput.includes("work with")) {
      return "💼 Availability:\n\nMalaveeka is available for:\n• Freelance projects\n• AI/ML consulting\n• Full-stack development\n• Mobile app development\n• Internship opportunities\n\n📧 Contact: malaveekasridhar20072004@gmail.com\n📱 Phone: +91 9790731131\n\nShe's passionate about working on innovative projects!";
    }

    // Skills and Technologies
    if (lowerInput.includes("skill") || lowerInput.includes("tech") || lowerInput.includes("technology") || lowerInput.includes("stack")) {
      return "🚀 Malaveeka's Complete Tech Stack:\n\n🤖 AI/ML: Python, TensorFlow, PyTorch, NLP, LLMs, Hugging Face, YOLO, OpenCV\n💻 Software Dev: React.js, Node.js, Java, Flutter, React Native\n🌐 Web Dev: React, Tailwind CSS, Django, Flask, PostgreSQL, SQL, MongoDB\n🛠️ Tools: Git, Figma, VS Code, Streamlit, Power BI, Docker\n☁️ Cloud: Basic AWS, Google Cloud\n\nShe's particularly strong in AI/ML and full-stack development!";
    }

    // Specific project queries
    if (lowerInput.includes("goroute")) {
      return "🚌 GoRoute - AI-Powered Transport Platform:\n\n• Real-time bus tracking with GPS\n• Indoor navigation using ARCore\n• Multi-modal transport integration\n• AI-powered route optimization\n• React Native + Django backend\n• PostgreSQL database\n\nWinner of SindhanAI Hackathon! This project showcases her AI and mobile development skills.";
    }

    if (lowerInput.includes("medcare")) {
      return "🏥 MedCare - AI Healthcare Platform:\n\n• AI-powered symptom analysis\n• Real-time health monitoring\n• Automated appointment scheduling\n• Flask + Python backend\n• Hugging Face AI models\n• Mistral AI integration\n\nGitHub: github.com/Malaveekasridhar20/MedCare\nWinner of THIRAN 2025 AI in Action!";
    }

    if (lowerInput.includes("talentscout")) {
      return "🤖 TalentScout - AI Hiring Assistant:\n\n• Domain-aware recruiter chatbot\n• Advanced NLP with BERT\n• Emotion recognition system\n• OpenChat 3.5 integration\n• Gradio interface\n• Transformer models\n\nGitHub: github.com/Malaveekasridhar20/TalentScout-AI-Powered-Hiring-Assistant";
    }

    // Projects - Client Projects
    if (lowerInput.includes("client project") || lowerInput.includes("real project") || lowerInput.includes("production")) {
      return "💼 Real-Time Client Projects:\n\n1. 🏪 Rythym Cloth Rental Billing System\n   • Flutter + SQLite\n   • Invoice & rental tracking\n   • Real client in production\n\n2. 💰 Greedam Ram Finance Chit System\n   • React + Tailwind + PHP + MySQL\n   • Web-based finance platform\n   • Live system serving customers\n\n3. 📸 Photo Studio Billing System (TriStone Industries)\n   • Flutter + SQLite + GST integration\n   • Professional billing solution\n\n4. 🌐 Rotary Club of Trichy Diamond City Website\n   • React + Node.js + Tailwind\n   • Official live website: rctdc.org\n\nAll are production systems serving real clients!";
    }

    // Projects - Technical Projects
    if (lowerInput.includes("technical project") || lowerInput.includes("ai project") || lowerInput.includes("personal project")) {
      return "🔬 Technical & AI Projects:\n\n🚌 GoRoute: AI transport platform (SindhanAI Winner)\n🏥 MedCare: AI healthcare platform (THIRAN Winner)\n🌱 Smart Irrigation: IoT + Weather API automation\n🤖 TalentScout: AI hiring assistant with NLP\n📱 EcoFinds: React Native eco-marketplace\n💬 Emotional AI Companion: Emotion-adaptive AI\n🚜 Agriculture Optimization: Smart farming solutions\n\nAll showcase cutting-edge AI/ML and development skills!";
    }

    // General Projects
    if (lowerInput.includes("project")) {
      return "📂 Malaveeka's Project Portfolio:\n\n💼 Client Projects (Production):\n• Billing systems, finance platforms, websites\n• Real clients, live systems\n\n🔬 Technical Projects (AI/ML):\n• GoRoute, MedCare, TalentScout\n• Award-winning innovations\n\nWant details on 'client projects' or 'technical projects'?";
    }

    // Experience and Work
    if (lowerInput.includes("experience") || lowerInput.includes("work") || lowerInput.includes("intern") || lowerInput.includes("job")) {
      return "💼 Professional Experience:\n\n🏢 Software Development Intern - TriStone Industries (2025)\n   • Flutter billing system development\n   • SQLite database integration\n   • Client project delivery\n\n🚂 AI Engineer - NIT Trichy IRCTC Project (2025)\n   • AI solutions for Indian Railways\n   • Delay system optimization\n   • Government project collaboration\n\n📊 Data Analyst Intern - Pacific Creation (2023)\n   • Business data analysis\n   • Excel-based insights\n   • Report generation\n\nPlus multiple hackathon wins and freelance projects!";
    }

    // Education
    if (lowerInput.includes("education") || lowerInput.includes("college") || lowerInput.includes("degree") || lowerInput.includes("study")) {
      return "🎓 Education:\n\nB.Tech in Artificial Intelligence and Data Science\nSaranathan College of Engineering, Tiruchirappalli\n2022 - 2026 (Currently in 3rd year)\n\n📚 Specializations:\n• Machine Learning & Deep Learning\n• Natural Language Processing\n• Computer Vision\n• Data Science & Analytics\n• Software Engineering\n\nCombining academic excellence with real-world project experience!";
    }

    // Achievements
    if (lowerInput.includes("achievement") || lowerInput.includes("award") || lowerInput.includes("winner") || lowerInput.includes("hackathon") || lowerInput.includes("competition")) {
      return "🏆 Major Achievements (2023-2025):\n\n🥇 Winner - ILink Digital AI Hackathon (₹10,000 + Trophy)\n🥇 Winner - SindhanAI Hackathon App Development (₹10,000)\n🥇 Winner - THIRAN 2025 AI in Action Paper Presentation\n⭐ Top 5 - THIRAN 2025 Project Expo\n🥇 Winner - Startathon Educational Innovation\n🥇 Winner - ANALYTIX FEST Code Machine (2x wins)\n🥇 Winner - ANALYTICA Code Machine\n🏅 Mentorship Award - Reva Hack 2023\n\nAll achievements have LinkedIn verification links!\nTotal prize money: ₹20,000+ plus trophies and recognition!";
    }

    // Contact Information
    if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("phone") || lowerInput.includes("reach")) {
      return "📞 Contact Malaveeka:\n\n📧 Email:\nmalaveekasridhar20072004@gmail.com\n\n📱 Phone: +91 9790731131\n\n🔗 Social Links:\n• LinkedIn: linkedin.com/in/malaveeka-sridhar-750b70252/\n• GitHub: github.com/Malaveekasridhar20\n• Instagram: @malaveekasridhar\n\n💼 Available for freelance & consulting!";
    }

    // Specific technologies
    if (lowerInput.includes("python") || lowerInput.includes("tensorflow") || lowerInput.includes("pytorch") || lowerInput.includes("machine learning") || lowerInput.includes("nlp")) {
      return "🐍 AI/ML Expertise:\n\nMalaveeka is highly skilled in:\n• Python (Advanced level)\n• TensorFlow & PyTorch for deep learning\n• Hugging Face for LLMs and transformers\n• NLP and text processing\n• Computer vision with YOLO and OpenCV\n• Emotion recognition systems\n\nProjects: MedCare (healthcare AI), TalentScout (NLP chatbot), Emotional AI Companion\n\nShe's passionate about creating AI that feels human!";
    }

    if (lowerInput.includes("react") || lowerInput.includes("web") || lowerInput.includes("frontend") || lowerInput.includes("javascript")) {
      return "⚛️ Web Development Expertise:\n\nMalaveeka excels in:\n• React.js (Advanced)\n• Tailwind CSS for styling\n• Node.js backend development\n• Django and Flask frameworks\n• PostgreSQL and MongoDB databases\n• Full-stack application architecture\n\nLive Projects:\n• Rotary Club website (rctdc.org)\n• Greedam Finance platform\n• Multiple client web applications\n\nShe creates beautiful, functional web experiences!";
    }

    if (lowerInput.includes("flutter") || lowerInput.includes("mobile") || lowerInput.includes("app")) {
      return "📱 Mobile Development Expertise:\n\nMalaveeka specializes in:\n• Flutter (Cross-platform development)\n• React Native for mobile apps\n• SQLite database integration\n• Mobile UI/UX design\n• App store deployment\n\nClient Projects:\n• Rythym Cloth Rental Billing System\n• Photo Studio Billing System\n• Multiple production mobile apps\n\nShe builds apps that users love to use!";
    }

    // About Malaveeka
    if (lowerInput.includes("about") || lowerInput.includes("who is") || lowerInput.includes("tell me about") || lowerInput.includes("introduce")) {
      return "👩‍💻 About Malaveeka Sridhar:\n\nShe's a passionate AI/Data Science student and full-stack developer who believes technology should feel human. She designs intelligent systems that think, adapt, and inspire.\n\n🎯 Core Strengths:\n• AI/ML Development (Python, TensorFlow, PyTorch)\n• Full-stack Web Development (React, Node.js)\n• Mobile App Development (Flutter, React Native)\n• Real client project delivery\n\n🏆 Achievements: 8+ hackathon wins, ₹20,000+ in prizes\n🚀 Mission: Creating impactful technology solutions\n📍 Location: Tiruchirappalli, Tamil Nadu, India\n\nCurrently in 3rd year B.Tech AI & Data Science!";
    }

    // Greetings
    if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey") || lowerInput.includes("good")) {
      return "Hello! 👋 Great to meet you! I'm Malaveeka's comprehensive AI assistant.\n\nI can tell you about:\n🚀 Her technical skills & expertise\n💼 Real client projects & technical innovations\n🏆 Hackathon wins & achievements\n💻 Work experience & internships\n🎓 Education & specializations\n📞 Contact information & availability\n\nWhat would you like to know about Malaveeka?";
    }

    // Thank you responses
    if (lowerInput.includes("thank") || lowerInput.includes("thanks")) {
      return "You're welcome! 😊 I'm happy to help you learn about Malaveeka.\n\nFeel free to ask me anything else about her skills, projects, achievements, or how to get in touch with her. I'm here to provide all the information you need!";
    }

    // Default response with comprehensive suggestions
    return "🤖 I'm Malaveeka's comprehensive AI assistant! I can help you with:\n\n💻 Technical Skills: 'skills', 'python', 'react', 'flutter'\n📂 Projects: 'projects', 'goroute', 'medcare', 'client projects'\n🏆 Achievements: 'hackathons', 'awards', 'competitions'\n💼 Experience: 'work experience', 'internships'\n🎓 Education: 'college', 'degree'\n📞 Contact: 'contact', 'linkedin', 'github', 'hire'\n👩‍💻 About: 'about malaveeka', 'who is she'\n\nTry asking: 'What are her skills?' or 'Tell me about her projects!'";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages([...messages, userMessage]);

    // Get intelligent response
    setTimeout(() => {
      const botResponse = getResponse(input);
      setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 glow-cyber transition-smooth shadow-lg"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-[420px] h-[500px] glass-card border-primary/20 glow-cyber flex flex-col animate-scale-in">
          <div className="p-4 border-b border-primary/20">
            <h3 className="font-semibold text-lg">🤖 Malaveeka's AI Assistant</h3>
            <p className="text-sm text-muted-foreground">
              I know everything about her - skills, projects, achievements & more!
            </p>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    message.isBot ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg p-3 ${
                      message.isBot
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed break-words overflow-wrap-anywhere">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-primary/20">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="glass-card border-primary/20"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="bg-primary hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
