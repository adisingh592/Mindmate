import { lazy, Suspense } from 'react';
import { SceneCanvas } from './SceneCanvas';
import { VisibilityGate } from './VisibilityGate';

const LifeSolarSystemScene = lazy(() => import('./LifeSolarSystemScene'));

function SolarPlaceholder() {
  return (
    <div className="flex h-80 w-full items-center justify-center rounded-[2.5rem] border border-slate-800/80 bg-slate-900/60">
      <div className="h-14 w-14 animate-pulse rounded-full bg-indigo-500/15 ring-2 ring-indigo-500/25" />
    </div>
  );
}

export function LifeSolarSystem({ className = 'h-80 w-full' }: { className?: string }) {
  return (
    <VisibilityGate className={`relative ${className}`} minHeight={320} fallback={<SolarPlaceholder />}>
      <div className="relative h-80 w-full overflow-hidden rounded-[2.5rem] border border-slate-800/80 bg-gradient-to-br from-slate-900/90 to-slate-950/90 shadow-xl backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-cyan-500/5" />
        <SceneCanvas cameraPosition={[0, 1.2, 5.5]} fov={42}>
          <Suspense fallback={null}>
            <LifeSolarSystemScene />
          </Suspense>
        </SceneCanvas>
      </div>
    </VisibilityGate>
  );
}
