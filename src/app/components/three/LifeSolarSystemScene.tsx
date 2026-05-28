import { Html } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import { usePerformanceProfile } from '@/hooks/usePerformanceProfile';

const NODES = [
  { label: 'Mood', color: '#06b6d4', orbit: 1.6, speed: 0.55, phase: 0 },
  { label: 'Goals', color: '#6366f1', orbit: 1.95, speed: 0.42, phase: 1.2 },
  { label: 'Habits', color: '#8b5cf6', orbit: 2.25, speed: 0.38, phase: 2.4 },
  { label: 'Learning', color: '#3b82f6', orbit: 2.55, speed: 0.32, phase: 3.6 },
  { label: 'Journal', color: '#a78bfa', orbit: 2.85, speed: 0.28, phase: 4.8 },
] as const;

function CentralSphere() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.12;
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.06;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.55, 48, 48]} />
      <meshStandardMaterial
        color="#6366f1"
        emissive="#4f46e5"
        emissiveIntensity={0.6}
        metalness={0.4}
        roughness={0.2}
      />
    </mesh>
  );
}

function OrbitNode({
  label,
  color,
  orbit,
  speed,
  phase,
}: (typeof NODES)[number]) {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + phase;
    ref.current.position.x = Math.cos(t) * orbit;
    ref.current.position.z = Math.sin(t) * orbit;
    ref.current.position.y = Math.sin(t * 2) * 0.12;
    const scale = hovered ? 1.35 : 1;
    ref.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.12);
  });

  return (
    <group
      ref={ref}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      <mesh>
        <sphereGeometry args={[0.14, 24, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1.4 : 0.7}
        />
      </mesh>
      {hovered && (
        <Html center distanceFactor={6} style={{ pointerEvents: 'none' }}>
          <span className="whitespace-nowrap rounded-lg border border-white/10 bg-slate-950/90 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
            {label}
          </span>
        </Html>
      )}
    </group>
  );
}

function OrbitPaths() {
  return (
    <>
      {NODES.map(({ orbit, color }) => (
        <mesh key={orbit} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[orbit, 0.006, 8, 80]} />
          <meshBasicMaterial color={color} transparent opacity={0.12} />
        </mesh>
      ))}
    </>
  );
}

export default function LifeSolarSystemScene() {
  const system = useRef<THREE.Group>(null);
  const { invalidate } = useThree();
  const { lowQuality } = usePerformanceProfile();

  useFrame((_, delta) => {
    if (system.current) system.current.rotation.y += delta * 0.04;
    if (lowQuality) invalidate();
  });

  return (
    <group ref={system}>
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 3, 2]} intensity={1.5} color="#6366f1" />
      <pointLight position={[-2, -1, 3]} intensity={1} color="#8b5cf6" />
      <CentralSphere />
      <OrbitPaths />
      {NODES.map((node) => (
        <OrbitNode key={node.label} {...node} />
      ))}
    </group>
  );
}
