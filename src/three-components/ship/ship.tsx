import {
  PointerLockControls,
  PointerLockControlsProps,
  useGLTF,
  useKeyboardControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group, Object3DEventMap, Vector3 } from "three";

const SPEED = 5;
const ROTATION_SPEED = 1.5;

export default function Ship() {
  const { nodes, materials } = useGLTF("/better-noAni-posi-draco.glb");
  const shipRef = useRef<Group<Object3DEventMap>>(null);
  const pointerControlRef = useRef(undefined);
  const [_, getKeys] = useKeyboardControls();

  const velocity = useRef(new Vector3(0, 0, 0));
  const rotationInput = useRef(new Vector3(0, 0, 0));

  useFrame((state, delta) => {
    if (!shipRef.current) return;
    const {
      forward,
      backward,
      strafeLeft,
      strafeRight,
      rollLeft,
      rollRight,
      pitchUp,
      pitchDown,
      yawLeft,
      yawRight,
    } = getKeys();

    rotationInput.current.x = (pitchUp ? 1 : 0) - (pitchDown ? 1 : 0); // Pitch (X-axis)
    rotationInput.current.y = (yawLeft ? 1 : 0) - (yawRight ? 1 : 0); // Yaw (Y-axis)
    rotationInput.current.z = (rollLeft ? 1 : 0) - (rollRight ? 1 : 0); // Roll (Z-axis)

    shipRef.current.rotation.x +=
      rotationInput.current.x * ROTATION_SPEED * delta;
    shipRef.current.rotation.y +=
      rotationInput.current.y * ROTATION_SPEED * delta;
    shipRef.current.rotation.z +=
      rotationInput.current.z * ROTATION_SPEED * delta;

    const thrustDirection = new Vector3(0, 0, 1); // Forward is usually +Z or -Z
    shipRef.current.getWorldDirection(thrustDirection); // Get the current direction the ship is facing

    // Calculate forward/backward velocity
    const forwardMovement = (forward ? 1 : 0) - (backward ? 1 : 0);
    velocity.current
      .copy(thrustDirection)
      .multiplyScalar(forwardMovement * SPEED);

    // Handle strafing (local X-axis)
    const strafeMovement = (strafeLeft ? 1 : 0) - (strafeRight ? 1 : 0);

    // Get the local X-axis (right vector)
    const rightVector = new Vector3();
    shipRef.current
      .localToWorld(rightVector.set(1, 0, 0))
      .sub(shipRef.current.position);

    velocity.current.add(rightVector.multiplyScalar(strafeMovement * SPEED));

    shipRef.current.position.addScaledVector(velocity.current, delta);
  });

  return (
    <>
      <PointerLockControls ref={pointerControlRef} />
      <group ref={shipRef} dispose={null}>
        <mesh
          geometry={nodes.StarSparrow_Wing002.geometry}
          material={materials.StarSparrow_Material}
          position={[-1.769, -2, -3.262]}
          rotation={[0, Math.PI, 1.336]}
          scale={1}
        />
      </group>
    </>
  );
}

useGLTF.preload("/better-noAni-posi-draco.glb");
