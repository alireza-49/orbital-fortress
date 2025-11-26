"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const ThreeLayout = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
};

export default ThreeLayout;
