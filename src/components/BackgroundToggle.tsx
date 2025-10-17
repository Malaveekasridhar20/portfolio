import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const BackgroundToggle = () => {
  const [isPastelMode, setIsPastelMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const savedMode = localStorage.getItem("pastel-mode") === "true";
    
    setIsPastelMode(savedMode);
    root.classList.toggle("pastel-mode", savedMode);
  }, []);

  const toggleBackground = () => {
    const root = window.document.documentElement;
    const newIsPastelMode = !isPastelMode;
    
    setIsPastelMode(newIsPastelMode);
    root.classList.toggle("pastel-mode", newIsPastelMode);
    localStorage.setItem("pastel-mode", newIsPastelMode.toString());
  };

  return (
    <Button
      onClick={toggleBackground}
      variant="default"
      size="icon"
      className="fixed top-4 right-20 z-[100] bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 transition-all duration-300 rounded-full w-12 h-12"
      aria-label="Toggle pastel background"
    >
      <Palette className="h-6 w-6 transition-colors duration-500" />
    </Button>
  );
};

export default BackgroundToggle;