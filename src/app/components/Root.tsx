import { Outlet, useLocation } from 'react-router';
import { FloatingDock } from './FloatingDock';
import { CommandCenter } from './CommandCenter';
import { ThemeToggle } from './ThemeToggle';

export function Root() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen w-full bg-[#0A0A0A] text-[#F5F5F5]">
      {/* Floating top right Theme Toggle Switcher */}
      <div className="fixed right-4 top-4 z-50 md:right-6 md:top-6">
        <ThemeToggle />
      </div>

      <main className="pb-32">
        <Outlet />
      </main>
      
      <FloatingDock />
      {location.pathname.startsWith('/app') ? <CommandCenter /> : null}
    </div>
  );
}
