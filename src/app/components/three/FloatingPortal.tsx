import { lazy, Suspense } from 'react';
import { SceneCanvas } from './SceneCanvas';
import { VisibilityGate } from './VisibilityGate';

const FloatingPortalScene = lazy(() => import('./FloatingPortalScene'));

function PortalPlaceholder() {
  return (
    <div className="flex h-full min-h-[420px] w-full items-center justify-center rounded-[2.5rem] border border-slate-800/80 bg-gradient-to-br from-slate-900/90 to-slate-950/90">
      <div className="h-20 w-20 animate-pulse rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20 ring-1 ring-indigo-500/30" />
    </div>
  );
}

export function FloatingPortal({ className = 'h-[min(520px,70vh)] w-full' }: { className?: string }) {
  return (
    <VisibilityGate
      className={`relative ${className}`}
      minHeight={420}
      fallback={<PortalPlaceholder />}
    >
      <div className="relative h-full min-h-[420px] w-full overflow-hidden rounded-[2.5rem] border border-slate-800/80 bg-gradient-to-br from-slate-900/95 to-slate-950/95 shadow-2xl shadow-indigo-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/8 via-transparent to-cyan-500/8" />
        <SceneCanvas>
          <Suspense fallback={null}>
            <FloatingPortalScene />
          </Suspense>
        </SceneCanvas>
      </div>
    </VisibilityGate>
  );
}
