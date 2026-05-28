import { Outlet, useLocation } from 'react-router';
import { FloatingDock } from './FloatingDock';
import { CommandCenter } from './CommandCenter';
import { ThemeToggle } from './ThemeToggle';

export function Root() {
  const location = useLocation();

  // Get dynamic page-wise gradient/theme identifier class
  const getThemeClass = (path: string) => {
    if (path === '/app') return 'theme-dashboard';
    if (path.includes('/chat')) return 'theme-chat';
    if (path.includes('/planner')) return 'theme-planner';
    if (path.includes('/habits')) return 'theme-habits';
    if (path.includes('/journal')) return 'theme-journal';
    if (path.includes('/analytics')) return 'theme-analytics';
    if (path.includes('/books')) return 'theme-books';
    if (path.includes('/skills')) return 'theme-skills';
    if (path.includes('/music')) return 'theme-music';
    if (path.includes('/movies')) return 'theme-movies';
    if (path.includes('/gamification')) return 'theme-gamification';
    if (path.includes('/profile')) return 'theme-profile';
    if (path.includes('/settings')) return 'theme-settings';
    if (path.includes('/notifications')) return 'theme-notifications';
    if (path.includes('/voice')) return 'theme-voice';
    if (path.includes('/mood')) return 'theme-mood';
    if (path.includes('/history')) return 'theme-history';
    return '';
  };

  const themeClass = getThemeClass(location.pathname);

  return (
    <div className={`relative min-h-screen w-full bg-background transition-colors duration-300 ${themeClass}`}>
      {/* Floating top right Theme Toggle Switcher */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <main className="pb-32">
        <Outlet />
      </main>
      
      <FloatingDock />
      <CommandCenter />
    </div>
  );
}
