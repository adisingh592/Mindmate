import { Link, useLocation } from 'react-router';
import { Home, MessageCircle, Calendar, BookOpen, BarChart3, User } from 'lucide-react';

const dockItems = [
  { icon: Home, label: 'Dashboard', path: '/app' },
  { icon: MessageCircle, label: 'Chat', path: '/app/chat' },
  { icon: Calendar, label: 'Planner', path: '/app/planner' },
  { icon: BookOpen, label: 'Journal', path: '/app/journal' },
  { icon: BarChart3, label: 'Analytics', path: '/app/analytics' },
  { icon: User, label: 'Profile', path: '/app/profile' },
];

export function FloatingDock() {
  const location = useLocation();

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-6 py-4 rounded-[2rem] bg-card/80 backdrop-blur-xl border border-border/50 shadow-2xl shadow-primary/10">
        {dockItems.map((item) => {
          const isActive = item.path === '/app'
            ? location.pathname === '/app'
            : location.pathname.startsWith(item.path);

          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`group relative flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-br from-[var(--brand-gradient-from)] to-[var(--brand-gradient-to)] text-white shadow-lg shadow-primary/30'
                  : 'hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="absolute -top-12 bg-popover/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border/50 shadow-lg">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
