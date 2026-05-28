import { Canvas } from '@react-three/fiber';
import { Suspense, type ReactNode } from 'react';
import { usePerformanceProfile } from '@/hooks/usePerformanceProfile';

type SceneCanvasProps = {
  children: ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  fov?: number;
};

function SceneFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-12 w-12 animate-pulse rounded-full bg-indigo-500/20 ring-2 ring-indigo-500/40" />
    </div>
  );
}

export function SceneCanvas({
  children,
  className = 'absolute inset-0',
  cameraPosition = [0, 0, 5],
  fov = 45,
}: SceneCanvasProps) {
  const { lowQuality } = usePerformanceProfile();

  return (
    <div className={className}>
      <Suspense fallback={<SceneFallback />}>
        <Canvas
          dpr={lowQuality ? [1, 1.25] : [1, 1.75]}
          frameloop={lowQuality ? 'demand' : 'always'}
          gl={{ antialias: !lowQuality, alpha: true, powerPreference: 'high-performance' }}
          camera={{ position: cameraPosition, fov }}
          style={{ background: 'transparent' }}
          onCreated={({ gl }) => {
            if (lowQuality) gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
          }}
        >
          {children}
        </Canvas>
      </Suspense>
    </div>
  );
}
