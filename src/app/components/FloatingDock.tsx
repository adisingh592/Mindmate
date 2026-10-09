import { Link, useLocation } from 'react-router';
import { Home, MessageCircle, Calendar, BookOpen, BarChart3, User } from 'lucide-react';

const dockItems = [
  { icon: Home, label: 'Life Command Center', path: '/app' },
  { icon: MessageCircle, label: 'Neural Link', path: '/app/chat' },
  { icon: Calendar, label: 'Mission Control', path: '/app/planner' },
  { icon: BookOpen, label: 'Memory Archive', path: '/app/journal' },
  { icon: BarChart3, label: 'System Intelligence', path: '/app/analytics' },
  { icon: User, label: 'Identity Core', path: '/app/profile' },
];

export function FloatingDock() {
  const location = useLocation();

  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-[2rem] border border-white/15 bg-[#151515]/95 px-4 py-3 shadow-2xl backdrop-blur-xl">
        {dockItems.map((item) => {
          const isActive = item.path === '/app'
            ? location.pathname === '/app'
            : location.pathname.startsWith(item.path);

          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`group relative flex flex-col items-center justify-center rounded-2xl p-3 transition-all duration-300 ${
                isActive
                  ? 'bg-[#1E1E1E] text-[#D4FF00] shadow-[0_0_20px_rgba(212,255,0,0.15)]'
                  : 'text-[#A3A3A3] hover:bg-white/5 hover:text-[#F5F5F5]'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="absolute -top-12 whitespace-nowrap rounded-lg border border-white/15 bg-[#1E1E1E]/95 px-3 py-1.5 text-xs opacity-0 transition-opacity group-hover:opacity-100">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
