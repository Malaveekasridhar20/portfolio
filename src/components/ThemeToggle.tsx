import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    const isDarkMode = localStorage.getItem("theme") === "dark" || 
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    setIsDark(isDarkMode);
    root.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const newIsDark = !isDark;
    
    setIsDark(newIsDark);
    root.classList.toggle("dark", newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="default"
      size="icon"
      className="fixed top-4 right-4 z-[100] bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 rounded-full w-12 h-12"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-6 w-6 animate-in spin-in-180 duration-500" />
      ) : (
        <Moon className="h-6 w-6 animate-in spin-in-180 duration-500" />
      )}
    </Button>
  );
};

export default ThemeToggle;
