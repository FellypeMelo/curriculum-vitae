import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Group } from 'three';

export function ConnectingLines() {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.y = Math.sin(t / 4) / 2;
      ref.current.rotation.z = Math.cos(t / 4) / 2;
    }
  });

  return (
    <group ref={ref} scale={10}>
       <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  )
}
