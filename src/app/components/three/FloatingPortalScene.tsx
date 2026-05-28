import { Float, MeshTransmissionMaterial, Stars } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef, type MutableRefObject } from 'react';
import * as THREE from 'three';
import { usePerformanceProfile } from '@/hooks/usePerformanceProfile';

function PortalCore({
  mouse,
  lowQuality,
}: {
  mouse: MutableRefObject<THREE.Vector2>;
  lowQuality: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const segments = lowQuality ? 32 : 64;

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.15;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouse.current.y * 0.25,
      0.05,
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      mouse.current.x * 0.15,
      0.05,
    );
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh>
          <sphereGeometry args={[0.85, segments, segments]} />
          <MeshTransmissionMaterial
            backside
            samples={lowQuality ? 2 : 4}
            resolution={lowQuality ? 128 : 256}
            transmission={0.98}
            thickness={0.4}
            roughness={0.05}
            ior={1.2}
            chromaticAberration={0.04}
            anisotropy={0.3}
            distortion={0.15}
            distortionScale={0.2}
            temporalDistortion={0.1}
            color="#8b5cf6"
            attenuationColor="#3b82f6"
            attenuationDistance={0.6}
          />
        </mesh>
        <mesh scale={1.02}>
          <sphereGeometry args={[0.88, 32, 32]} />
          <meshBasicMaterial color="#6366f1" transparent opacity={0.12} wireframe />
        </mesh>
      </Float>
    </group>
  );
}

function OrbitRings() {
  const rings = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (rings.current) rings.current.rotation.y -= delta * 0.08;
  });

  return (
    <group ref={rings}>
      {[1.35, 1.75, 2.15].map((radius, i) => (
        <mesh key={radius} rotation={[Math.PI / 2 + i * 0.15, i * 0.4, 0]}>
          <torusGeometry args={[radius, 0.018, 16, 100]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#6366f1' : '#06b6d4'}
            emissive={i % 2 === 0 ? '#4f46e5' : '#0891b2'}
            emissiveIntensity={0.8}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.2 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#a78bfa" transparent opacity={0.85} sizeAttenuation />
    </points>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[3, 2, 4]} intensity={2} color="#6366f1" />
      <pointLight position={[-3, -1, 2]} intensity={1.2} color="#8b5cf6" />
      <pointLight position={[0, -2, 3]} intensity={0.8} color="#06b6d4" />
    </>
  );
}

export default function FloatingPortalScene() {
  const mouse = useRef(new THREE.Vector2(0, 0));
  const { invalidate } = useThree();
  const { lowQuality } = usePerformanceProfile();

  useFrame((state) => {
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, state.pointer.x, 0.06);
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, state.pointer.y, 0.06);
    if (lowQuality) invalidate();
  });

  return (
    <>
      <SceneLights />
      <Stars
        radius={40}
        depth={30}
        count={lowQuality ? 300 : 800}
        factor={2}
        saturation={0}
        fade
        speed={0.4}
      />
      <PortalCore mouse={mouse} lowQuality={lowQuality} />
      <OrbitRings />
      <Particles count={lowQuality ? 50 : 120} />
    </>
  );
}
