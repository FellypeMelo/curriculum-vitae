import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { ParticleCloud } from './ParticleCloud';
import { ConnectingLines } from './ConnectingLines';

export function Scene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
          <ParticleCloud />
        </Float>
        <ConnectingLines />
      </Canvas>
      {/* Overlay gradiente para garantir legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/10 via-slate-50/50 to-slate-50 pointer-events-none" />
    </div>
  );
}
