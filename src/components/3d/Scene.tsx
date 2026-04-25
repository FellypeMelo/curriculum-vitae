import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { ParticleCloud } from './ParticleCloud';
import { ConnectingLines } from './ConnectingLines';

/**
 * Scene Component (3D).
 * Combines 3D elements (ParticleCloud and ConnectingLines) into a Canvas.
 * Acts as the interactive background for the application.
 *
 * @returns {JSX.Element} The rendered 3D scene.
 */
export function Scene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
          <ParticleCloud />
        </Float>
        <ConnectingLines />
      </Canvas>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-bg/60 to-bg pointer-events-none" />
    </div>
  );
}
