import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('mind-mate-theme');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    // Default to dark as requested to keep current color combo on first load
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('mind-mate-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full border bg-card/80 backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center relative group cursor-pointer border-border/80"
      aria-label="Toggle visual theme"
    >
      {/* Background soft glow based on current theme */}
      <div className={`absolute inset-0 rounded-full blur-md opacity-25 group-hover:opacity-40 transition-all ${
        theme === 'dark' ? 'bg-purple-500' : 'bg-amber-400'
      }`} />
      
      <div className="relative z-10 text-foreground flex items-center justify-center">
        {theme === 'dark' ? (
          <Moon className="w-4 h-4 text-purple-400 animate-pulse" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" />
        )}
      </div>
    </button>
  );
}
