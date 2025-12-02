"use client";

import {
  Environment,
  KeyboardControls,
  PointerLockControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ship from "../ship/ship";
import { Perf } from "r3f-perf";
import { controlsMap } from "../control-configs";
const ThreeLayout = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={5} />
        <KeyboardControls map={controlsMap}>
          {/* <Environment
            background
            files={"/environment/output_ldr.jpg"}
            colorSpace='srgb'
            backgroundBlurriness={0}
            environmentIntensity={0}
          /> */}
          <Perf />
          <Ship />
        </KeyboardControls>
      </Canvas>
    </>
  );
};

export default ThreeLayout;
