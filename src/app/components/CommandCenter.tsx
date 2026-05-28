import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import {
  Search,
  Book,
  GraduationCap,
  Music,
  Film,
  Smile,
  History,
  Trophy,
  Mic,
  Settings,
  Bell,
  Command,
  X,
  ChevronRight,
  Home,
  MessageSquare,
  Calendar,
  BookOpen,
  BarChart3,
  User,
} from 'lucide-react';

interface CommandItem {
  icon: any;
  label: string;
  category: string;
  path: string;
  description: string;
  emoji: string;
}

const commands: CommandItem[] = [
  // Level 1 Pages
  { icon: Home, label: 'Dashboard', category: 'Core', path: '/app', description: 'Go to your main workspace', emoji: '🏠' },
  { icon: MessageSquare, label: 'Chat', category: 'Core', path: '/app/chat', description: 'Speak with your AI Companion', emoji: '💬' },
  { icon: Calendar, label: 'Planner', category: 'Core', path: '/app/planner', description: 'Manage your schedule and habits', emoji: '🎯' },
  { icon: BookOpen, label: 'Journal', category: 'Core', path: '/app/journal', description: 'Write daily logs and reflections', emoji: '🧾' },
  { icon: BarChart3, label: 'Analytics', category: 'Core', path: '/app/analytics', description: 'Review your mood and progress stats', emoji: '📊' },
  { icon: User, label: 'Profile', category: 'Core', path: '/app/profile', description: 'View your identity and achievements', emoji: '👤' },

  // Level 2 & 3 Pages
  { icon: Book, label: 'Books', category: 'Explore', path: '/app/books', description: 'Read books, papers and recommendations', emoji: '📚' },
  { icon: GraduationCap, label: 'Skills', category: 'Explore', path: '/app/skills', description: 'Track and learn new capabilities', emoji: '🎓' },
  { icon: Music, label: 'Music', category: 'Explore', path: '/app/music', description: 'Relaxing tunes and focus playlists', emoji: '🎵' },
  { icon: Film, label: 'Movies', category: 'Explore', path: '/app/movies', description: 'Inspirational movies curated for you', emoji: '🎬' },
  { icon: Smile, label: 'Mood Hub', category: 'Explore', path: '/app/mood', description: 'Deep dive into your emotional well-being', emoji: '😊' },
  { icon: History, label: 'History', category: 'Explore', path: '/app/history', description: 'Timeline of your actions and memories', emoji: '📍' },
  { icon: Trophy, label: 'Gamification & Growth', category: 'Explore', path: '/app/gamification', description: 'Level up and claim reward points', emoji: '🎮' },
  { icon: Mic, label: 'Voice Companion', category: 'Explore', path: '/app/voice', description: 'Hands-free voice companion logs', emoji: '🎤' },
  
  // Settings & Utilities
  { icon: Settings, label: 'Settings', category: 'Utility', path: '/app/settings', description: 'Configure app features and theme', emoji: '⚙️' },
  { icon: Bell, label: 'Notifications', category: 'Utility', path: '/app/notifications', description: 'View recent updates and nudges', emoji: '🔔' },
];

export function CommandCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Toggle Command Center globally
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Reset selected index when search query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSearchQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle outside clicks
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Filter commands
  const filteredCommands = commands.filter((cmd) => {
    const query = searchQuery.toLowerCase();
    return (
      cmd.label.toLowerCase().includes(query) ||
      cmd.category.toLowerCase().includes(query) ||
      cmd.description.toLowerCase().includes(query)
    );
  });

  // Handle keyboard navigation inside list
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        handleNavigate(filteredCommands[selectedIndex].path);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
    }
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Glass Launcher Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 flex items-center gap-2 px-4 py-3.5 rounded-full bg-card/85 backdrop-blur-xl border border-border/80 shadow-2xl hover:shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300 group"
        aria-label="Open Command Center"
      >
        <Command className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
        <span className="text-xs font-semibold tracking-wider text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border/50 text-[10px] font-sans shadow-sm">Ctrl</kbd>
          <span>+</span>
          <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border/50 text-[10px] font-sans shadow-sm">K</kbd>
        </span>
      </button>

      {/* Glassmorphic Backdrop Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-background/60 backdrop-blur-lg z-50 flex items-start justify-center pt-[15vh] transition-all duration-300">
          <div
            ref={modalRef}
            className="max-w-2xl w-full mx-4 bg-card/80 backdrop-blur-2xl border border-border/60 rounded-3xl shadow-2xl shadow-primary/5 overflow-hidden flex flex-col relative animate-in fade-in zoom-in-95 duration-200"
            onKeyDown={handleKeyDown}
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header Search Bar */}
            <div className="relative flex items-center border-b border-border/50 px-6 py-4.5">
              <Search className="w-5 h-5 text-muted-foreground mr-4 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pages, settings, or tools..."
                className="w-full bg-transparent border-0 outline-none text-foreground placeholder-muted-foreground text-lg py-1 pr-10 focus:ring-0 focus:border-0"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-6 p-1.5 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results Container */}
            <div className="max-h-[50vh] overflow-y-auto p-4 space-y-4">
              {filteredCommands.length > 0 ? (
                // Group by Category
                Object.entries(
                  filteredCommands.reduce((acc, cmd) => {
                    if (!acc[cmd.category]) acc[cmd.category] = [];
                    acc[cmd.category].push(cmd);
                    return acc;
                  }, {} as Record<string, CommandItem[]>)
                ).map(([category, items]) => (
                  <div key={category} className="space-y-1">
                    <h3 className="text-xs font-semibold text-muted-foreground/80 tracking-wider uppercase px-3 py-1.5">
                      {category}
                    </h3>
                    <div className="space-y-1">
                      {items.map((cmd) => {
                        // Find global index in filtered list
                        const globalIndex = filteredCommands.findIndex((c) => c.path === cmd.path);
                        const isSelected = globalIndex === selectedIndex;
                        const Icon = cmd.icon;

                        return (
                          <div
                            key={cmd.path}
                            onClick={() => handleNavigate(cmd.path)}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                            className={`group flex items-center justify-between p-3.5 rounded-2xl cursor-pointer transition-all duration-200 ${
                              isSelected
                                ? 'bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 shadow-md shadow-primary/5'
                                : 'border border-transparent hover:bg-muted/40'
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <div
                                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 ${
                                  isSelected
                                    ? 'bg-gradient-to-br from-primary to-accent text-white scale-105 rotate-3'
                                    : 'bg-muted text-muted-foreground group-hover:scale-105'
                                }`}
                              >
                                <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="font-semibold text-foreground flex items-center gap-2">
                                  <span>{cmd.label}</span>
                                  <span className="text-sm">{cmd.emoji}</span>
                                </div>
                                <div className="text-xs text-muted-foreground mt-0.5">
                                  {cmd.description}
                                </div>
                              </div>
                            </div>
                            <ChevronRight
                              className={`w-5 h-5 transition-all duration-300 ${
                                isSelected
                                  ? 'text-primary translate-x-1 opacity-100'
                                  : 'text-muted-foreground/0 -translate-x-2 group-hover:text-muted-foreground/60 group-hover:translate-x-0 group-hover:opacity-100'
                              }`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center text-muted-foreground">
                  <div className="text-4xl mb-3">🔍</div>
                  <div className="font-medium">No results found for "{searchQuery}"</div>
                  <div className="text-xs mt-1 opacity-70">Try searching for other words or categories</div>
                </div>
              )}
            </div>

            {/* Retro keycap footer help */}
            <div className="px-6 py-4.5 bg-muted/30 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border/60 font-sans text-[10px] shadow-sm">↑↓</kbd>
                  <span>Browse</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border/60 font-sans text-[10px] shadow-sm">⏎</kbd>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border/60 font-sans text-[10px] shadow-sm">esc</kbd>
                  <span>Close</span>
                </span>
              </div>
              <div className="font-medium text-primary/80">Peehu Sakhi Command Center</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
